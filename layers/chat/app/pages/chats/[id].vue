<script setup lang="ts">

  const route = useRoute()
  const {chat: chatFromChats, messages, sendMessage, fetchMessages} = useChat(route.params.id as string);
  const typing = ref(false)

  await fetchMessages()

  if (!chatFromChats.value) {
    await navigateTo('/', {replace: true})
  }

  const chat = computed(() => chatFromChats.value as Chat)

  const handleSendMessage = async (message: string) => {
    typing.value = true;
    await sendMessage(message)
    typing.value = false;
  }


  const appConfig = useAppConfig()
  const title = computed(() => {
    return chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title
  })

  useHead({
    title
  })
</script>

<template>
  <ChatWindow v-if="chat" :typing :messages :chat  @send-message="handleSendMessage" />
</template>