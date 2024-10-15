<script setup lang="ts">

const t = useI18n().t
</script>

<template>
    <section>
      <div class="grid-container">
        <ProjectCard
          class="card-left"
          name="Biophilum"
          :description="t('biophilum.desc')"
          date="~2023~"
          image="https://cdn2.thecatapi.com/images/27i.jpg"
          preview="https://cdn2.thecatapi.com/images/94h.png"
          code-source="https://github.com/arthurfrin"
          code-source-color="#EF7163"
        />
        <ProjectCard
          class="card-right"
          name="Cleanwalk.org"
          :description="t('cleanwalk.desc')"
          date="~2023~"
          image="https://cdn2.thecatapi.com/images/27i.jpg"
          preview="https://cdn2.thecatapi.com/images/94h.png"
          code-source="https://github.com/arthurfrin"
          code-source-color="#6394EF"
        />
        <ProjectCard
          class="card-left"
          name="Biophilum"
          description="lalala"
          date="~2023~"
          image="https://cdn2.thecatapi.com/images/27i.jpg"
          preview="https://cdn2.thecatapi.com/images/94h.png"
          code-source="https://github.com/arthurfrin"
          code-source-color="#EF7163"
        />
      </div>
    </section>
  </template>
  
 
  
    
  