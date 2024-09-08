<script lang="ts" setup>

</script>

<template>
    <section>
        <Profile class="profile"/>
        <Plant />
        <GithubContributions class="github-contributions" />
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 0 2.5rem;
    background: linear-gradient(157deg, #37457D 15.04%, #EF7163 118.98%);
    height: 100dvh;
}

.profile {
    padding-top: 9rem;
    margin-left: 2rem;
}

.github-contributions {
    margin-top: 5rem;
}

</style>
