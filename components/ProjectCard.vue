<script setup lang="ts">
const props = defineProps<{
    name: string;
    description: string;
    image: string;
    preview: string;
    link?: string;
    date: string;
    codeSource: string;
    codeSourceColor: string;
}>();
</script>

<template>
    <article class="card">
        <div class="left">
            <div class="header">
                <img :src="props.image" alt="project image">
                <h4 class="font-michroma">{{ props.name }}</h4>
            </div>
            <p>
                {{ props.description }}
            </p>
        </div>
        <div class="right">
            <span>{{ props.date }}</span>
            <img class="preview" :src="props.preview" alt="preview">
            <a class="button-code-source" :href="props.codeSource" target="_blank":style="{ background: codeSourceColor }">
                <img src="../assets/imgs/github_logo.svg" alt="github logo">
                <p>Code source</p>
            </a>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    margin-top: 5rem;
    border-radius: 3px;
    background: rgba(170, 170, 170, 0.40);
    backdrop-filter: blur(30px);
    overflow: hidden;
    width: 35rem;
    padding: 1.5rem;

    .left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 60%;
        p {
            padding: 1rem 3rem 0 0;
        }
        .header {
            display: flex;
            gap: 1rem;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                border-radius: 999px;
                object-fit: cover;
            }
            h4 {
                font-size: 1.5rem;
            }
        }
    }
    .right {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        span {
            font-size: 1.5rem;
            }
        .preview {
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
            border-radius: 12px;
        }

    }

}
</style>
