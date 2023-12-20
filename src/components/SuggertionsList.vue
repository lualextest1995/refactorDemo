<template>
  <ul class="suggestions">
    <template v-if="props.data.length === 0">
      <template v-if="props.keywords === ''">
        <li>Filter for a city</li>
        <li>or a state</li>
      </template>
      <li v-else>No information found</li>
    </template>
    <template v-else>
      <li v-for="item in props.data" :key="item.rank">
        <div v-html="`${splitText(item.city)}, ${splitText(item.state)}`"></div>
        <span class="population">{{ thousandthConverter(item.population) }}</span>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { IDataItem } from '../types/api'
const props = defineProps<{ data: IDataItem[]; keywords: string }>()

/**
 * 符合關鍵字變色
 * @param text - 資料
 * @returns 變色後的資料
 */
const splitText = (text: string) => {
  if (!props.keywords) {
    return text
  }
  const regex = new RegExp(props.keywords, 'gi')
  return text.replace(regex, (match) => `<span style='background:#ffc600'>${match}</span>`)
}
</script>

<style scoped>
.suggestions {
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  /*perspective:20px;*/
}

.suggestions li {
  background: white;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}
.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

.population {
  font-size: 15px;
}
</style>
