<script setup lang="ts">

const props = defineProps<{
    icons: {
        src: string;
        alt: string;
        description: string;
    }[];
    title: string;
}>();
</script>

<template>
    <div class="container">
            <h3>{{ title }}</h3>
            <ul class="tech-list">
                <li v-for="icon in icons" :key="icon.alt" class="tech-card">
                    <div class="description-card">
                        <p>{{ icon.description }}</p>
                    </div>
                    <img :src="icon.src" :alt="icon.alt" width="30" />
                    <p>{{ icon.alt }}</p>
                </li>
            </ul>
        </div>
</template>

<style lang="scss" scoped>
.tech-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    list-style-type: none;
    height: 180px;
}

.tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.tech-card:hover {
    transform: scale(1.1);
}

.description-card {
    display: none;
    flex-direction: column;
    align-items: center;
    color: #37457D;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(80px);
    padding: 0.5rem;
    min-width: 200px;
    max-width: 500px;
    border-radius: 12px;
    position: absolute;
    bottom: 85px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    white-space: normal; 
    text-align: left; 
    line-height: 1.2; 
}

/* Affiche la description au survol et agrandit la carte */
.tech-card:hover .description-card {
    display: flex;
    opacity: 1;
}

.tech-list img {
    display: block;
}

.tech-list p {
    margin: 0;
    font-size: 0.9rem;
}

@media screen and (min-width: 768px) {
    

    .tech-list {
        gap: 2rem;
    }

    .tech-list li {
        width: calc(25% - 2rem); /* 4 colonnes avec espace entre les éléments */
    }
}
</style>