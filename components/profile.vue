<script lang="ts" setup>
</script>

<template>
    <div class="container font-michroma">
        <img src="../assets/imgs/profile_picture.jpg" alt="profile_picture">
        <h1 class="title">Arthur FRIN</h1>
    </div>
</template>

<style lang="scss" scoped>
.container {
    img {
        width: 150px;
        aspect-ratio: 1;
        border-radius: 999px;
    }

    .title {
        font-size: 3rem;
        max-width: 13rem;
        margin: 0;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        gap:3rem;

        img {
            width: 390px;
        }

        .title {
            font-size: 6rem;
        }
    }
}
</style>
