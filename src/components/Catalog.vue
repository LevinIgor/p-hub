<template>
  <div>
    <h2 class="mt-20">Catalog</h2>

    <hr class="mt-5" />
    <div class="grid grid-cols-4 gap-5 mt-10">
      <div
        class="border border-spacing-x-1 border-white p-3 cursor-pointer hover:border-dotted"
        v-for="(item, index) in 10"
        @click="$router.push({ name: 'person-page', params: { id: index } })"
        :key="index">
        <img
          src="https://playcontestofchampions.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war-720x720.jpg"
          alt="" />
        <h2 class="">Iron man</h2>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
