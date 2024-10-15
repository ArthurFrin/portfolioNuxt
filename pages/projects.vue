<script setup lang="ts">
const t = useI18n().t
</script>

<template>
    <section>
        <div class="grid-container">
            <ProjectCard class="card" name="Biophilum" :description="t('biophilum.desc')" date="~2023~"
                image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png"
                code-source="https://github.com/arthurfrin" code-source-color="#EF7163" />
            <ProjectCard class="card" name="Cleanwalk.org" :description="t('cleanwalk.desc')" date="~2023~"
                image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png"
                code-source="https://github.com/arthurfrin" code-source-color="#6394EF" />
            <ProjectCard class="card" name="Biophilum" description="lalala" date="~2023~"
                image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png"
                code-source="https://github.com/arthurfrin" code-source-color="#EF7163" />
        </div>
    </section>
</template>

<style lang="scss" scoped>

section {
    background: linear-gradient(224deg, #377d57 2.99%, #37457d 90.89%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 100%;
    width: 100%;
    position: relative;
    place-items: center;
}

.card {
    overflow: visible;
}

@media (min-width: 1400px) {
    section::after {
        content: '';
        position: absolute;
        height: 85%;
        width: 10px;
        background-color: #2E2A3D;
        left: 50%;
        transform: translate(-50%, 5%);
        border-radius: 10px;
    }

    .grid-container {
        grid-template-columns: 1fr 1fr;
        gap: 0 11rem;
        max-width: 1390px;
        width: 100%;
        position: relative;
    }

    .card {
        &::after {
            content: '';
            position: absolute;
            transform: translate(-50%, -50%);
            height: 10px;
            top: 50%;
            width: 10%;
            border-radius: 10px;
            background-color: #2E2A3D;
            right: 0;
        }
    }

    .card:nth-child(odd) {
        grid-column: 1;
        &::after {
            left: 110%;
        }
    }

    .card:nth-child(even) {
        grid-column: 2;
        grid-row: 1 / span 2;
        align-self: center;
        &::after {
            right: 100%;
        }
    }
}
</style>