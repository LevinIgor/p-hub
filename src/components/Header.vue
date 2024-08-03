<script setup></script>

<template>
  <header
    class="w-full flex items-center py-4 select-none sticky top-0 bg-black border-b-2 border-white">
    <h1 class="cursor-pointer"></h1>
    <RouterLink
      class="underline-offset-8 py-1 hover:underline"
      to="/"
      >PERSON-HUB</RouterLink
    >

    <input
      class="ml-auto"
      type="text" />
    <button class="ml-2">Search</button>
  </header>
</template>

<style lang="scss" scoped></style>
