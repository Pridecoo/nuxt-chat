<script setup lang="ts">
// const config = useRuntimeConfig()

  const {fetchChats} = useChats();
  const {fetchProjects} = useProjects()
  
  await Promise.all([fetchProjects(), fetchChats()])
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>  
  </UApp>
</template>
