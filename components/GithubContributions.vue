<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useGithubContributionStore } from '~/stores/githubContributions';
const store = useGithubContributionStore();

interface monthColumns {
  month: string;
  columns: number;
}

const getLastYearDate = (): string => {
  const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);
  lastYear.setDate(lastYear.getDate() - lastYear.getDay());
  return lastYear.toISOString();
};

const getTodayDate = (): string => {
  return new Date().toISOString();
};

interface monthColumns {
  month: string;
  columns: number;
}

const orderedMonths = ref<monthColumns[]>([]);

const githubName = 'ArthurFrin';

const calculateMonthOrderAndColumns = (from: string, to: string): monthColumns[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const startDate = new Date(from);
  const endDate = new Date(to);

  const monthColumns: monthColumns[] = [];
  
  let currentDate = new Date(startDate);
  let currentMonthIndex = currentDate.getMonth();
  let weeksForCurrentMonth = 0;

  // Fonction pour compter le nombre de jours d'une semaine qui appartiennent à un mois
  const getDaysInMonthForWeek = (start: Date, end: Date, month: number) => {
    let count = 0;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (d.getMonth() === month) {
        count++;
      }
    }
    return count;
  };

  // Boucle pour chaque semaine entre "from" et "to"
  while (currentDate <= endDate) {
    const weekEndDate = new Date(currentDate);
    weekEndDate.setDate(currentDate.getDate() + 6); // Fin de la semaine

    // Ne pas dépasser la date de fin
    if (weekEndDate > endDate) {
      weekEndDate.setTime(endDate.getTime());
    }

    // Calculer le nombre de jours dans le mois courant et le mois suivant
    const currentMonthDays = getDaysInMonthForWeek(currentDate, weekEndDate, currentMonthIndex);
    const nextMonthIndex = (currentMonthIndex + 1) % 12; // Mois suivant (gérer le passage de décembre à janvier)
    const nextMonthDays = getDaysInMonthForWeek(currentDate, weekEndDate, nextMonthIndex);

    // Attribuer la colonne au mois qui a le plus de jours dans cette semaine
    if (currentMonthDays >= nextMonthDays) {
      weeksForCurrentMonth++;
    } else {
      // Si on passe à un nouveau mois
      monthColumns.push({ month: months[currentMonthIndex], columns: weeksForCurrentMonth });
      currentMonthIndex = nextMonthIndex;
      weeksForCurrentMonth = 1; // La semaine commence dans le mois suivant
    }

    // Passer à la semaine suivante
    currentDate.setDate(currentDate.getDate() + 7);
  }

  // Ajouter le dernier mois s'il reste des semaines non comptées
  if (weeksForCurrentMonth > 0) {
    monthColumns.push({ month: months[currentMonthIndex], columns: weeksForCurrentMonth });
  }

  // Ajustement pour retirer une colonne en trop pour le premier mois
  if (monthColumns.length > 0 && monthColumns[0].columns > 1) {
    monthColumns[0].columns -= 1;
  }

  return monthColumns;
};
onMounted(() => {
  const from = getLastYearDate();
  const to = getTodayDate();
  console.log(from, to);
  orderedMonths.value =calculateMonthOrderAndColumns(from, to);
  store.fetchContributions(githubName, from, to);
});
</script>

<template>
  <div class="graph">
    <ul class="months">
      <li v-for="(month, index) in orderedMonths" :key="index" :style="{ width: `${month.columns * 13}px` }">
        {{ month.month }}
      </li>
    </ul>
    <div class="days-squares">
      <ul class="days">
        <li v-for="(day, index) in ['Tue', 'Thu', 'Sat']" :key="index">{{ day }}</li>
      </ul>
      <ul class="squares">
        <!-- Afficher des carrés placeholder si les données ne sont pas encore chargées -->
        <li v-for="(square, index) in (store.squares.length ? store.squares : Array(52 * 7).fill({ level: 0 }))"
          :key="index" :data-level="square.level" class="square">
          <div class="tooltip">{{ square.date ? `${square.date}: ${square.level} contributions` : '' }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//reset li

$square-size: 10px;
$square-gap: 3px;
$week-width: calc(#{$square-size} + #{$square-gap});

$background-default: hsl(325, 59%, 90%);
$background-level-1: hsl(326, 59%, 70%);
$background-level-2: hsl(326, 59%, 50%);
$background-level-3: hsl(326, 59%, 30%);
$background-level-4: hsl(326, 59%, 20%);

.graph {
  display: flex;
  flex-direction: column;
  grid-template-areas:
    'empty months'
    'days squares';
  grid-template-columns: auto 1fr;
  grid-gap: 10px;

  .months {
    height: 0.8rem;
    display: flex;
    font-size: 12px;
    padding-left: 2.5rem;
  }

  .squares {
    display: grid;
    grid-gap: $square-gap;
    grid-template-rows: repeat(7, $square-size);
    background-color: rgba(255, 255, 255, 0.2);
    /* Un fond semi-transparent */
    backdrop-filter: blur(50px);
    padding: 0.7rem;
    border-radius: 12px;
  }

  .days-squares {
    display: flex;
    gap: 0.5rem;
  }

  .days {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    padding: 11.5px 0;
  }

  .squares {
    grid-auto-flow: column;
    grid-auto-columns: $square-size;
  }

  .squares li {
    position: relative;
    background-color: $background-default;
    border-radius: 3px;

    &[data-level='1'] {
      background-color: $background-level-1;
    }

    &[data-level='2'] {
      background-color: $background-level-2;
    }

    &[data-level='3'] {
      background-color: $background-level-3;
    }

    &[data-level='4'] {
      background-color: $background-level-4;
    }

    // Tooltip styling
    .tooltip {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 8px;
      background-color: rgb(45, 45, 45);
      color: #fff;
      border-radius: 4px;
      font-size: 10px;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.2s linear;
      white-space: nowrap;
      z-index: 99;
    }

    &:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
