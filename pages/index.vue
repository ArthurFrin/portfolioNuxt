<script lang="ts" setup></script>

<template>
    <section>
        <Plant />
        <div class="left">
            <Profile class="profile" />
            <GithubContributions />
        </div>
        <div class="btn-box">
            <ButtonLink
                format="big"
                route-name="technos"
                direction="right"
                class="button-link"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 0 0.5rem;
    background: linear-gradient(157deg, #37457d 15.04%, #ef7163 118.98%);
    height: 100%;
    min-height: 100lvh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    .profile {
        padding: 2rem 0;
        margin-left: 2rem;
    }

    .btn-box {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 0 2.5rem;

        .btn-box {
            justify-content: center;
            height: 100vh;
            top: 0;

            .button-link {
                margin-top: 9rem;
            }
            
        }

        .profile {
            padding: 9rem 0 2rem;

        }
    }
}
</style>
