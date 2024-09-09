<script setup lang="ts">
import { useI18n } from 'vue-i18n'; // Importez useI18n

const { t } = useI18n(); // Utilisez la méthode t() pour les traductions

// Liste des icônes frontend avec les descriptions via i18n
const frontendIcons = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        alt: "Vue.js",
        description: t('vuejs.desc'), // Description traduite avec i18n
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        alt: "Angular",
        description: t('angular.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
        description: t('javascript.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        description: t('typescript.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Tailwind CSS",
        description: t('tailwindcss.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        alt: "Sass",
        description: t('sass.desc'),
    },
];

// Liste des icônes backend
const backendIcons = [
    {
        src: "https://nodejs.org/static/logos/jsIconGreen.svg",
        alt: "Node.js",
        description: t('nodejs.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        alt: "NestJS",
        description: t('nestjs.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg",
        alt: "Fastify",
        description: t('fastify.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        alt: "Python",
        description: t('python.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        alt: "Flask",
        description: t('flask.desc'),
    },
];

// Liste des icônes DevOps
const devopsIcons = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
        alt: "Docker",
        description: t('docker.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
        alt: "GitHub Actions",
        description: t('githubactions.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        alt: "MySQL",
        description: t('mysql.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        alt: "PostgreSQL",
        description: t('postgresql.desc'),
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        alt: "Firebase",
        description: t('firebase.desc'),
    },
];
</script>


<template>
    <section>
        <div class="technos-container">
            <TechnoList :icons="frontendIcons" title="Frontend" />
            <TechnoList :icons="backendIcons" title="Backend" />
            <TechnoList :icons="devopsIcons" :title="t('others')" />
        </div>
        <div class="btns">
            <ButtonLink format="small" direction="left" route-name="/" />
            <ButtonLink format="small" direction="right" route-name="test" />
        </div>    
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(110deg, #37457d 51.17%, #ef7163 105.78%);
    height: 100dvh;
    color: #fff;

    .technos-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;


        @media screen and (min-width: 768px) {
            flex-direction: row;
        }
    }
}
.btns {
    display: flex;
    margin-top: 2rem;
    gap: 2rem;

    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: 2rem;
        
    }
}
</style>
