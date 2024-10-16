<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'; // Utilisation de i18n pour la gestion des langues
import Burger from './icons/Burger.vue';

const burgerBool = ref(false); // Gestion de l'état du menu burger

// Fonction pour ouvrir/fermer le menu burger
const toggleBurger = () => {
  burgerBool.value = !burgerBool.value;
};

// Fermer le menu burger si on clique en dehors
const closeBurgerOnClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const navbar = document.querySelector('.navbar');
  const burgerButton = document.querySelector('.burger');
  if (navbar && burgerButton && !navbar.contains(target) && !burgerButton.contains(target)) {
    burgerBool.value = false; // Fermer le burger si on clique à l'extérieur
  }
};

// Gestion des routes
const routeName = ref('');
const route = useRoute();
routeName.value = route.name as string;

watch(route, () => {
  routeName.value = route.name as string;
});

// Gestion de la langue avec i18n
const { locale, setLocale } = useI18n();

// Fonction pour basculer la langue et sauvegarder dans le localStorage
const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en';
  setLocale(newLocale);
  localStorage.setItem('locale', newLocale);
  window.location.reload();
};

// Fermer le menu burger si on clique en dehors
onMounted(() => {
  document.addEventListener('click', closeBurgerOnClickOutside);

  // Récupérer la langue stockée dans le localStorage
  const storedLocale = localStorage.getItem('locale');
  if (storedLocale && locale.value !== storedLocale) {
    setLocale(storedLocale);
  }
});
</script>
<template>
  <!-- Bouton pour le burger en mode mobile -->
  <button class="burger" @click="toggleBurger()">
    <Burger />
  </button>

  <!-- Barre de navigation -->
  <nav class="navbar" :class="{ 'is-open': burgerBool }">
    <NuxtLink class="button1" :class="{ 'is-active': routeName === 'index' }" to="/">
      {{ $t('profile') }}
    </NuxtLink>
    <NuxtLink class="button1" :class="{ 'is-active': routeName === 'technos' }" to="/technos">
      Technos
    </NuxtLink>
    <NuxtLink class="button1" :class="{ 'is-active': routeName === 'projects' }" to="/projects">
      {{ $t('projects') }}
    </NuxtLink>
    <!-- Bouton pour changer la langue -->
    <button class="language" @click="toggleLocale">
      {{ locale }} <!-- Affiche la langue actuelle -->
    </button>
  </nav>

  <!-- Overlay sombre qui apparaît lors de l'ouverture du burger -->
  <div class="overlay" v-if="burgerBool" @click="burgerBool = false"></div>
</template>
<style lang="scss" scoped>
.navbar {
  display: none;
  /* Cacher par défaut */
  position: fixed;
  top: 0;
  left: 0;
  gap: 1rem;
  flex-direction: column;
  justify-content: left;
  padding: 10px;
  background: $bg-secondary;
  width: 8rem;
  height: 100lvh;
  z-index: 100;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(-100%);
  /* Par défaut, la navbar est cachée à gauche */
  opacity: 0;
  /* Cacher visuellement en plus du translate */

  &.is-open {
    display: flex;
    /* Montrer le menu */
    transform: translateX(0);
    /* Le menu est visible */
    opacity: 1;
    /* Assurer que le menu est complètement visible */
  }
}

.burger {
  position: fixed;
  z-index: 1;
  top: 1rem;
  left: 1rem;
  fill: $icon-color;
  z-index: 99;
}

/* Overlay sombre lorsqu'on ouvre le burger menu */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(59, 59, 59, 0.4);
  backdrop-filter: blur(3px);
  z-index: 99;
}



.language {
  position: absolute;
  font-size: 1.2rem;
  bottom: 2rem;
  left: 3.3rem;
  padding: 0.5rem;
  cursor: pointer;
}

/* Mode desktop */
@media screen and (min-width: 768px) {
  .burger {
    display: none;
    /* Cacher le burger en mode desktop */
  }

  .navbar {
    display: flex;
    /* Montrer la navbar sur desktop */
    position: fixed;
    transform: none;
    flex-direction: row;
    height: auto;
    justify-content: left;
    width: 100%;
    opacity: 1;

    .language {
      top: 1rem;
      right: 3rem;
      left: auto;
    }
  }

  .overlay {
    display: none;
    /* Pas d'overlay en mode desktop */
  }
}
</style>