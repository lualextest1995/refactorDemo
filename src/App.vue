<template>
  <form class="search-form">
    <SearchBar v-model:keywords="keywords" />
    <SuggertionsList :data="matchData" :keywords="filterXss(keywords)" />
  </form>
</template>

<script setup lang="ts">
import type { IDataItem } from './types/api'
import * as apiClient from '@/api'

const { debounce } = useDebounce()
const { cached } = useCached(filterMatch, 20)

const keywords = ref('')
const data = ref<IDataItem[] | null>(null)
const matchData = ref<IDataItem[]>([])

/**
 * 取得所有查詢資料
 * @async
 * @function getAllData
 */
const getAllData = async () => {
  try {
    const result = await apiClient.getData()
    data.value = result.data
  } catch (e) {
    if (e instanceof Error) {
      errorAlert(e.message)
    } else {
      console.log(e)
    }
  }
}

// 監控查詢關鍵字變化
watch(keywords, (value) => {
  debounce(() => {
    if (!value || data.value === null) {
      matchData.value = []
      return
    }
    matchData.value = cached(filterXss(value), data.value)
  }, 400)
})

// 載入資料
onMounted(async () => {
  await getAllData()
})
</script>

<style>
html {
  box-sizing: border-box;
  background: #ffc600;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

.search-form {
  max-width: 400px;
  margin: 50px auto;
}
</style>
./types/api.js
