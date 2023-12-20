<template>
  <input type="text" v-model.trim="keywords" placeholder="City or State" />
</template>

<script setup lang="ts">
const props = defineProps<{ keywords: string }>()
const emit = defineEmits(['update:keywords'])
const keywords = computed({
  get: () => props.keywords,
  set: (value) => emit('update:keywords', value)
})
</script>

<style scoped>
input {
  width: 100%;
  padding: 20px;
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 40px;
  background-color: white;
  box-shadow:
    0 0 5px rgba(0, 0, 0, 0.12),
    inset 0 0 2px rgba(0, 0, 0, 0.19);
}
</style>
