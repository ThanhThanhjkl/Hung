<script setup>
import { apiPost } from '@/axios/axiosConfig.js';
import DemoSimpleTableBasics from '@/views/pages/tables/DemoSimpleTableBasics.vue';
const form = ref({
  CategoryID: 0,
  CategoryName: '',
  ImageCategory: "",
  Slug: "",
  Is_Default: false,
  PathCategory: "",

})

const handleCreate = async () => {
  const formData = new FormData();
  for (let key in form.value) {
    formData.append(key, form.value[key]);
  }
  const response = await apiPost('https://xshop.devtest.ink/api/v1/Items/admin/add-category', formData);
  if (response.data.code === 200) {
    isActive.value = false
  }
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              <v-text-field label="CategoryID" v-model="form.CategoryID" />
            </v-card-text>
            <v-card-text>
              <v-text-field label="CategoryName" v-model="form.CategoryName" />
            </v-card-text>
            <v-card-text>
              <v-text-field label="ImageCategory" v-model="form.ImageCategory" />
            </v-card-text>
            <v-card-text>
              <v-text-field label="Slug" v-model="form.Slug" />
            </v-card-text>
            <v-card-text>
              <v-file-input label="PathCategory" v-model="form.PathCategory"></v-file-input>
            </v-card-text>
            <v-card-text>
              <v-checkbox label="Is_Default" v-model="form.Is_Default"></v-checkbox>
            </v-card-text>


            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text="Close " @click="isActive.value = false"></v-btn>
              <v-btn primary text="create" @click="handleCreate"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <VCard title="Categories">
        <DemoSimpleTableBasics />
      </VCard>
    </VCol>

    <!-- <VCol cols="12">
      <VCard title="Theme">
        <VCardText>
          use <code>theme</code> prop to switch table to the dark theme.
        </VCardText>
        <DemoSimpleTableTheme />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Density">
        <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText>
        <DemoSimpleTableDensity />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Height">
        <VCardText>
          You can set the height of the table by using the <code>height</code> prop.
        </VCardText>
        <DemoSimpleTableHeight />
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Fixed Header">
        <VCardText>
          You can fix the header of table by using the <code>fixed-header</code> prop.
        </VCardText>
        <DemoSimpleTableFixedHeader />
      </VCard>
    </VCol> -->
  </VRow>
</template>
