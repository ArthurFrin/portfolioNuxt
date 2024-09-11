<script setup lang="ts">

const t = useI18n().t
</script>

<template>
    <section>
        <ProjectCard name="Biophilum" :description="t('biophilum.desc')" date="~2023~" image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png" code-source="https://github.com/arthurfrin" code-source-color="#EF7163"/>
        <ProjectCard name="Cleanwalk.org" :description="t('cleanwalk.desc')" date="~2023~" image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png" code-source="https://github.com/arthurfrin" code-source-color="#6394EF"/>
        <ProjectCard name="Biophilum" description="lalala" date="~2023~" image="https://cdn2.thecatapi.com/images/27i.jpg" preview="https://cdn2.thecatapi.com/images/94h.png" code-source="https://github.com/arthurfrin" code-source-color="#EF7163"/>
    </section>
</template>

<style lang="scss" scoped>

section {
    height: 100lvh;
    background: linear-gradient(224deg, #377D57 2.99%, #37457D 90.89%);}
</style>

