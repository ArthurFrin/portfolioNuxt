<script setup lang="ts">

const t = useI18n().t
</script>

<template>
    <section>
        <div class="tree">
            <div v-for="item in 5" :key="item">
            </div>
        </div>
        <ProjectCard class="card" name="Biophilum" :description="t('biophilum.desc')" date="~2023~"
            image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png"
            code-source="https://github.com/arthurfrin" code-source-color="#EF7163" />
        <ProjectCard class="card" name="Cleanwalk.org" :description="t('cleanwalk.desc')" date="~2023~"
            image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png"
            code-source="https://github.com/arthurfrin" code-source-color="#6394EF" />
        <ProjectCard class="card" name="Biophilum" description="lalala" date="~2023~"
            image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png"
            code-source="https://github.com/arthurfrin" code-source-color="#EF7163" />
    </section>
</template>

<style lang="scss" scoped>
section {
    background: linear-gradient(224deg, #377D57 2.99%, #37457D 90.89%);
    display: grid;
    grid-template-columns: max-content max-content; // Les colonnes prennent la taille des cartes
    grid-gap: 5rem; // Ajoute une distance de 2rem entre les colonnes
    padding: 2rem;
    min-height: 100lvh;
    justify-content: center; // Centre les colonnes horizontalement
    align-items: start;

    // Appliquer un décalage à la colonne de droite
    .card:nth-child(odd) {
        transform: translateY(10rem); // Décale en hauteur les cartes paires
    }
}

.tree {
    position: absolute;
    top: 6rem;
    left: 50%;
    z-index: 99;
    transform: translate(-50%, 0);

    div {
        width: 100px;
        height: 300px;
        border-bottom: 5px solid white;
        &:nth-child(odd) {
            // Style pour les cartes paires
            border-right: 5px solid white;
            transform: translateX(-47.8%);

        }
        &:nth-child(even) {
            // Style pour les cartes impaires
            border-left: 5px solid white;
            transform: translateX(47.8%);
        }
        
    }

}



</style>
