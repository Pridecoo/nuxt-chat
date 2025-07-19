<script setup lang="ts">
  const {chat, messages, sendMessage} = useChat();

  useHead({
    title: chat.value.title
  })
</script>

<template>
  <ChatWindow :messages :chat @send-message="sendMessage" />
</template>