<script setup lang="ts">
import Arrow from "./icons/arrow.vue";

const props = defineProps<{
    routeName: string;
    format: "big" | "small";
    direction: "left" | "right";
}>();
</script>

<template>
    <NuxtLink :to="routeName" class="btn" :class="format, direction">
        <Arrow />
    </NuxtLink>
</template>

<style lang="scss" scoped>
.btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    fill: #fff;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.2);
    /* Un fond semi-transparent */
    backdrop-filter: blur(50px);
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Même comportement au survol */
    &:hover {
        backdrop-filter: blur(100px); /* Augmente le flou lors du survol */
        background-color: rgba(255, 255, 255, 0.1); /* Change légèrement la couleur de fond au survol */
    }

    /* Forcer un format carré pour big */
    &.big {
        width: 6rem; /* Définir une largeur et une hauteur carrée */
        height: 6rem;

        .arrow {
            width: 5rem;
            height: 5rem;
        }
    }

    /* Forcer un format carré pour small */
    &.small {
        width: 3rem; /* Définir une largeur et une hauteur carrée */
        height: 3rem;

        .arrow {
            width: 2rem;
            height: 2rem;
        }
    }

    /* Inverser la direction de l'icône si 'left' est utilisé */
    &.left {
        transform: rotate(180deg);
    }
}
</style>
