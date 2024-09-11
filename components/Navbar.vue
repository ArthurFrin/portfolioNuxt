<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from '#i18n'; // Correct import pour setLocale
import Burger from './icons/Burger.vue';

const burgerBool = ref(false);
const toggleBurger = () => {
  burgerBool.value = !burgerBool.value;
};

// Gestion des routes
const routeName = ref('');
const route = useRoute();
routeName.value = route.name as string;

// Met à jour la route si elle change
watch(route, () => {
  routeName.value = route.name as string;
});

// i18n: gestion de la langue
const { locale, setLocale } = useI18n(); // Import de setLocale pour changer la langue

// Fonction pour basculer la langue sans changer l'URL et définir le cookie
const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en';
  setLocale(newLocale); // Utiliser setLocale pour changer la langue
  localStorage.setItem('locale', newLocale); // Sauvegarde dans localStorage
  window.location.reload(); // Recharger la page pour appliquer les changements
};

onMounted(() => {
  const storedLocale = localStorage.getItem('locale');
  if (storedLocale && locale.value !== storedLocale) {
    setLocale(storedLocale); // Utiliser setLocale pour basculer à la langue stockée
  }
});
</script>


<template>
  <button class="burger" @click="toggleBurger()">
    <Burger />
  </button>
  <nav class="navbar">
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
    <button @click="toggleLocale">
      {{ locale }} <!-- Affiche la langue actuelle -->
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  gap: 1rem;
  justify-content: left;
  padding: 10px;
  background: $bg-secondary;
  width: 100%;
}

.burger {
  fill: $icon-color;
}

@media screen and (min-width: 768px) {
  .burger {
    display: none;
  }
}
</style>
