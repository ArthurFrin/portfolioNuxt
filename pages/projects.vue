<script setup lang="ts">
const t = useI18n().t
import ia_game from '../assets/imgs/ia_game.png'
import ia_game_logo from '../assets/imgs/ia_game_logo.png'
import cleanwalk_logo from '../assets/imgs/cleanwalk_logo.png'
import cleanwalk from '../assets/imgs/cleanwalk.png'
import biophilum_logo from '../assets/imgs/biophilum_logo.png'
import biophilum from '../assets/imgs/biophilum.png'
import reperio from '../assets/imgs/reperio.jpg'
import reperio_logo from '../assets/imgs/reperio_logo.png'
</script>

<template>
    <section>
        <div class="grid-container">
            <ProjectCard class="card" name="ia-game" :description="t('ia-game.desc')" date="~2024~"
                :image="ia_game_logo" :preview="ia_game" code-source="https://github.com/arthurfrin/mini-game"
                code-source-color="#EF7163" />
            <ProjectCard class="card" name="Cleanwalk.org" :description="t('cleanwalk.desc')" date="~2023~"
                :image="cleanwalk_logo" :preview="cleanwalk"
                code-source="https://github.com/cleanwalk-org-asso/cleanwalk-org-v2" code-source-color="#4F6CE3" />

            <ProjectCard class="card" name="Biophilum" :description="t('biophilum.desc')" date="~2022~"
                :image="biophilum_logo" :preview="biophilum" code-source="https://github.com/ArthurFrin/Biophilum"
                code-source-color="#00CC58" />
            <ProjectCard class="card" name="Biophilum" :description="t('biophilum.desc')" date="~2022~"
                :image="reperio_logo" :preview="reperio" code-source="https://github.com/ArthurFrin/Reperio"
                code-source-color="#A966FF" />

        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: linear-gradient(224deg, #377d57 2.99%, #37457d 90.89%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    padding-bottom: 10vh;
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
        height: 95%;
        width: 10px;
        background-color: #2E2A3D;
        left: 50%;
        transform: translate(-50%, 10%);
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
        transform: translateY(50%);


        &::after {
            right: 100%;
        }
    }
}
</style>