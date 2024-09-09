<script lang="ts" setup></script>

<template>
    <section>
        <Plant />
        <div class="left">
            <Profile class="profile" />
            <GithubContributions />
        </div>
        <div class="btn-box">
            <ButtonLink format="big" route-name="technos" direction="right" class="button-link" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 0 0.5rem;
    background: linear-gradient(157deg, #37457d 15.04%, #ef7163 118.98%);
    height: 100dvh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 0 2.5rem;        
    }
}

.profile {
    padding: 9rem 0 2rem;
    margin-left: 2rem;
}

.btn-box {
    display: flex;
    width: 100%;
    padding-top: 9rem;
    justify-content: center;
    align-items: center;
}
</style>
