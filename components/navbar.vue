<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Burger from './icons/Burger.vue';

const burgerBool = ref(false);
const toggleBurger = () => {
  burgerBool.value = !burgerBool.value;
}

const routeName = ref('');

const route = useRoute();
routeName.value = route.name as string;

// Watch the route to update the routeName
watch(route, () => {
  routeName.value = route.name as string;
});
</script>

<template>
    <button class="burger" @click="toggleBurger()">
        <Burger />
    </button>
    <nav class="navbar">
        <NuxtLink class="button1" :class="{ 'is-active': routeName === 'index' }" to="/">
            Profile
        </NuxtLink>
        <NuxtLink class="button1" :class="{ 'is-active': routeName === 'technos' }" to="/technos">
            Technos
        </NuxtLink>
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
