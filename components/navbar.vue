<script lang="ts" setup>
import Burger from './icons/Burger.vue';

const burgerBool = ref(false);

const toggleBurger = () => {
    burgerBool.value = !burgerBool.value;
}


</script>

<template>
    <div class="navbar">
        <button class="burger" @click="toggleBurger()">
            <Burger />
        </button>
        <nav class="navbar" v-if="burgerBool">
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/plants">Plants</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    position: absolute;
    left: 1rem;
    top: 1rem;

}

.burger {
    fill: $icon-color;
}
</style>
