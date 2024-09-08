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
        <div class="container">
            <h3>Frontend</h3>
            <ul class="tech-list">
                <li v-for="icon in frontendIcons" :key="icon.alt" class="tech-card">
                    <div class="description-card">
                        <p>{{ icon.description }}</p>
                    </div>
                    <img :src="icon.src" :alt="icon.alt" width="30" />
                    <p>{{ icon.alt }}</p>
                </li>
            </ul>
        </div>
        <div class="container">
            <h3>Backend</h3>
            <ul class="tech-list">
                <li v-for="icon in backendIcons" :key="icon.alt" class="tech-card">
                    <div class="description-card">
                        <p>{{ icon.description }}</p>
                    </div>
                    <img :src="icon.src" :alt="icon.alt" width="30" />
                    <p>{{ icon.alt }}</p>
                </li>
            </ul>
        </div>
        <div class="container">
            <h3>DevOps/Other</h3>
            <ul class="tech-list">
                <li v-for="icon in devopsIcons" :key="icon.alt" class="tech-card">
                    <div class="description-card">
                        <p>{{ icon.description }}</p>
                    </div>
                    <img :src="icon.src" :alt="icon.alt" width="30" />
                    <p>{{ icon.alt }}</p>
                </li>
            </ul>
        </div>
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
}

.tech-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    list-style-type: none;
    height: 180px;
}

.tech-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.tech-card:hover {
    transform: scale(1.1);
}

.description-card {
    display: none;
    flex-direction: column;
    align-items: center;
    color: #37457D;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(80px);
    padding: 0.5rem;
    min-width: 200px;
    max-width: 500px;
    border-radius: 12px;
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    white-space: normal; 
    text-align: left; 
    line-height: 1.2; 
}

/* Affiche la description au survol et agrandit la carte */
.tech-card:hover .description-card {
    display: flex;
    opacity: 1;
}

.tech-list img {
    display: block;
}

.tech-list p {
    margin: 0;
    font-size: 0.9rem;
}

@media screen and (min-width: 768px) {
    section {
        flex-direction: row;
    }

    .tech-list {
        gap: 2rem;
    }

    .tech-list li {
        width: calc(25% - 2rem); /* 4 colonnes avec espace entre les éléments */
    }
}
</style>
