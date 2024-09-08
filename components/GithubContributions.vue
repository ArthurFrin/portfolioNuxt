<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ky from 'ky';

interface monthColumns {
  month: string;
  columns: number;
}

const squares = ref<{ date: string; level: number; }[]>([]);
const orderedMonths = ref<monthColumns[]>([]); // Définir orderedMonths comme un ref réactif
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const setOrderMonths = (months: string[], monthColumns: number[]): monthColumns[] => {
  const orderedMonths: monthColumns[] = [];
  months.forEach((month, index) => {
    orderedMonths.push({ month, columns: monthColumns[index] });
  });
  return orderedMonths;
};

// Calculer la date d'il y a 1 an avec un dimanche en premier
function getLastYearDate(): string {
  const today = new Date();
  const lastYear = new Date(today);
  lastYear.setFullYear(today.getFullYear() - 1);
  lastYear.setDate(lastYear.getDate() - lastYear.getDay());
  return lastYear.toISOString();
}

function getTodayDate(): string {
  return new Date().toISOString();
}

// GraphQL Query pour obtenir le calendrier des contributions
const query = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

const token = import.meta.env.VITE_GITHUB_TOKEN as string;

async function fetchContributions(username: string) {
  const from = getLastYearDate();
  const to = getTodayDate();

  const response = await ky.post('https://api.github.com/graphql', {
    json: {
      query,
      variables: { login: username, from, to }
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).json() as any;

  const weeks = response.data.user.contributionsCollection.contributionCalendar.weeks;
  const contributionSquares = [];

  // Parcourir chaque jour et calculer le niveau de contribution
  for (const week of weeks) {
    for (const day of week.contributionDays) {
      const level = selectLevel(day.contributionCount);
      contributionSquares.push({ date: day.date, level });
    }
  }

  // Réorganiser pour s'assurer que les semaines commencent par lundi
  squares.value = contributionSquares;

  // Mettre à jour les mois ordonnés et calculer les colonnes
  orderedMonths.value = calculateMonthOrderAndColumns(weeks);
}

const selectLevel = (count: number) => {
  if (count === 0) return 0;
  if (count <= 5) return 1;
  if (count <= 10) return 2;
  if (count <= 15) return 3;
  return 4;
};

// Calculer le nombre de colonnes et l'ordre des mois
function calculateMonthOrderAndColumns(weeks: any[]): monthColumns[] {
  const firstDate = new Date(weeks[0].contributionDays[0].date); // Premier jour de contribution
  const firstMonth = firstDate.getMonth(); // Obtenez le premier mois

  const monthColumns: number[] = new Array(12).fill(0);

  weeks.forEach((week: any) => {
    week.contributionDays.forEach((day: any) => {
      const date = new Date(day.date);
      const month = date.getMonth(); // Obtenir le mois
      monthColumns[month] += 1;
    });
  });

  const orderedMonths: monthColumns[] = [];
  for (let i = 0; i < 12; i++) {
    const currentMonth = (firstMonth + i) % 12; // Ordre cyclique des mois
    orderedMonths.push({ month: months[currentMonth], columns: monthColumns[currentMonth] / 7 });
  }

  return orderedMonths;
}

onMounted(() => {
  fetchContributions('ArthurFrin'); // Remplacer par le nom d'utilisateur GitHub
});
</script>

<template>
  <div class="graph">
    <ul class="months">
      <li v-for="(month, index) in orderedMonths" :key="index" :style="{ width: `${month.columns * 13}px` }">{{
        month.month }}</li>
    </ul>
    <div class="days-squares">
      <ul class="days">
        <li v-for="(day, index) in ['Tue', 'Thu', 'Sat']" :key="index">{{ day }}</li>
      </ul>
      <ul class="squares">
        <li v-for="(square, index) in squares" :key="index" :data-level="square.level" :data-date="square.date"
          :data-contributions="square.level" class="square">
          <div class="tooltip">{{ square.date }}: {{ square.level }} contributions</div>
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
    display: flex;
    font-size: 12px;
    padding-left: 2.7rem;
  }

  .squares {
    display: grid;
    grid-gap: $square-gap;
    grid-template-rows: repeat(7, $square-size);
    background-color: rgba(255, 255, 255, 0.2); /* Un fond semi-transparent */
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
  min-width: 700px;
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
