<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
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
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

// Fonction pour basculer la langue
const toggleLocale = () => {
  const newLocale = locale.value === 'en' ? 'fr' : 'en';
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
  const newPath = switchLocalePath(newLocale);
  if (newPath) {
    window.location.href = newPath;
  }
};
onMounted(() => {
  const storedLocale = localStorage.getItem('locale');
  if (storedLocale && locale.value !== storedLocale) {
    locale.value = storedLocale;
    locale.value = 'fr'
    localStorage.setItem('locale', 'fr');
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
    <!-- Bouton pour changer la langue -->
    <button @click="toggleLocale">
      {{ locale }} <!-- Affiche l'autre langue -->
    </button>
  </nav>
</template>


<style lang="scss" scoped>
.navbar {
  position: fixed;
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
