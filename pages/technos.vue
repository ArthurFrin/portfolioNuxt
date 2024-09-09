<script lang="ts" setup>
// Données des icônes, inchangé
const frontendIcons = [
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
        alt: 'Vue.js',
        description: "Etudié à l'ESGI et utilisé sur tous les projets persos et professionnels",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        alt: 'Angular',
        description: "Utilisé sur des projets au sein d'Extia",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        alt: 'JavaScript',
        description: "Etudié à l'ESGI",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        alt: 'TypeScript',
        description: "Etudié à l'ESGI et utilisé sur tous les projets persos et professionnels",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
        alt: 'Sass',
        description: "Utilisé sur cleanwalk.org comme préprocesseur CSS",
    },
];

const backendIcons = [
    {
        src: 'https://nodejs.org/static/logos/jsIconGreen.svg',
        alt: 'Node.js',
        description: "Etudié à l'ESGI",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
        alt: 'NestJS',
        description: "Framework Node.js utilisé comme API sur un projet au sein d'Extia",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg',
        alt: 'Fastify',
        description: "Framework léger javascript utilisé sur le projet IA-games pour API",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        alt: 'Python',
        description: "Etudié à l'ESGI et utilisé sur le projet associatif cleanwalk.org",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
        alt: 'Flask',
        description: "Framework Python utilisé pour l'API de cleanwalk.org",
    },
];

const devopsIcons = [
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
        alt: 'Docker',
        description: "Etudié à l'ESGI, Utilisé sur le projet d'école IA-games et sur cleanwalk.org, contenerisation sur VPS",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
        alt: 'GitHub Actions',
        description: "Utilisé sur le projet d'école IA-games et sur cleanwalk.org pour automatiser le déploiement sur VPS",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        alt: 'MySQL',
        description: "Etudié à l'ESGI et utilisé sur le projet IA-games",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg',
        alt: 'PostgreSQL',
        description: "Utilisé sur le projet associatif cleanwalk.org comme base de données",
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
        alt: 'Firebase',
        description: "Utilisé au sein d'Extia sur un projet comme base de données et sur un mini-projet perso",
    },
];
</script>

<template>
    <section>
        <TechnoList :icons="frontendIcons" title="Frontend" />
        <TechnoList :icons="backendIcons" title="Backend" />
        <TechnoList :icons="devopsIcons" title="DevOps" />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    background: linear-gradient(110deg, #37457D 51.17%, #EF7163 105.78%);
    height: 100vh;
    color: #fff;

    @media screen and (min-width: 768px) {

        flex-direction: row;
    }
}

</style>
