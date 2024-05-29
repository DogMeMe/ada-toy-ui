<script setup lang="ts">
defineOptions({
  name: "YmButton",
});

const emit = defineEmits(["click"]);

const handleClick = (e) => {
  console.log("emit click");
  emit("click", e);
};
</script>

<template>
  <button class="ym-button" @click="handleClick">Button</button>
</template>

<style scoped>
@import url(./style.css);
</style>
