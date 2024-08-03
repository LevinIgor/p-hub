<script setup>
  import { ref } from "vue";

  const galleryTypes = {
    default: "gallery",
    list: "list",
    gallery: "gallery",
  };

  const galleryType = ref(galleryTypes.default);
</script>
<template>
  <div>
    <h2 class="mt-5">Iron man</h2>
    <hr />
    <div class="mt-10 flex items-center gap-1">
      <h2>Gallery type:</h2>
      <button
        class="border border-spacing-1 border-white px-5 py-1 ml-auto hover:border-dotted"
        :class="galleryType == galleryTypes.list ? 'bg-white text-black' : ''"
        @click="galleryType = galleryTypes.list">
        List
      </button>
      <button
        class="border border-spacing-1 border-white px-5 py-1 hover:border-dotted"
        :class="
          galleryType == galleryTypes.gallery ? 'bg-white text-black' : ''
        "
        @click="galleryType = galleryTypes.gallery">
        Gallery
      </button>
    </div>

    <div
      class="mt-20"
      :class="
        galleryType == 'list' ? 'flex flex-col gap-5' : 'grid grid-cols-4 gap-5'
      ">
      <img
        class="w-full max-w-[700px] object-contain"
        v-for="(item, index) in 10"
        :key="index"
        src="https://playcontestofchampions.com/wp-content/uploads/2021/11/champion-iron-man-infinity-war-720x720.jpg"
        alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
