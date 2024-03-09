<script setup>
import { apiGet } from '@/axios/axiosConfig.js';
import { onMounted } from 'vue';
const data = ref([])
const handleGetData = async () => {
  const response = await apiGet('https://xshop.devtest.ink/api/v1/Items/admin/get-all-category')
  data.value = response.data
}
onMounted(handleGetData)
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-uppercase">
          type
        </th>
        <th class="text-uppercase text-center">
          title
        </th>
        <th class="text-uppercase text-center">
          status
        </th>
        <th class="text-uppercase text-center">
          detail
        </th>
        <th class="text-uppercase text-center">
          instance
        </th>
        <th class="text-uppercase text-center">
          additionalProp1
        </th>
        <th class="text-uppercase text-center">
          additionalProp2
        </th>
        <th class="text-uppercase text-center">
          additionalProp3
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in data" :key="item.data">
        <td>
          {{ item.type }}
        </td>
        <td class="text-center">
          {{ item.title }}
        </td>
        <td class="text-center">
          {{ item.status }}
        </td>
        <td class="text-center">
          {{ item.detail }}
        </td>
        <td class="text-center">
          {{ item.instance }}
        </td>
        <td class="text-center">
          {{ item.additionalProp1 }}
        </td>
        <td class="text-center">
          {{ item.additionalProp2 }}
        </td>
        <td class="text-center">
          {{ item.additionalProp3 }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
