<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'


const form = ref({
  UserName: '',
  Email: '',
  PasswordHash: '',
  ConfirmPassword: '',
})

const router = useRouter()

const handleRegister = async () => {
  const formData = new FormData();
  for (let key in form.value) {
    formData.append(key, form.value[key]);
  }
  axios.post('https://xshop.devtest.ink/api/v1/Items/register', formData)
    .then(response => {
      if (response.data.code === 200)
        router.push('/login')
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Adventure starts (Register)
        </h5>
        <p class="mb-0">
          Make your app management easy and fun!
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => { }">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField v-model="form.UserName" label="UserName" placeholder="Johndoe" />
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField v-model="form.Email" label="Email" placeholder="johndoe@email.com" type="Email" />
            </VCol>
            <!-- password -->
            <VCol cols="12">
              <VTextField v-model="form.PasswordHash" label="PasswordHash" placeholder="············"
                :type="isPasswordVisible ? 'text' : 'PasswordHash'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible" />
            </VCol>


            <VCol cols="12">
              <VTextField v-model="form.ConfirmPassword" label="ConfirmPassword" placeholder="············"
                :type="isConfirmPasswordVisible ? 'text' : 'ConfirmPassword'"
                :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible" />
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox id="privacy-policy" v-model="form.privacyPolicies" inline />
                <VLabel for="privacy-policy" style="opacity: 1;">
                  <span class="me-1">I agree to</span>
                  <a href="javascript:void(0)" class="text-primary">privacy policy & terms</a>
                </VLabel>
              </div>

              <VBtn block type="submit" @click="handleRegister">
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol cols="12" class="text-center text-base">
              <span>Already have an account?</span>
              <RouterLink class="text-primary ms-2" to="login">
                Sign in instead
              </RouterLink>
            </VCol>

            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol cols="12" class="text-center">
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg class="auth-footer-start-tree d-none d-md-block" :src="authV1Tree" :width="250" />

    <VImg :src="authV1Tree2" class="auth-footer-end-tree d-none d-md-block" :width="350" />

    <!-- bg img -->
    <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>
