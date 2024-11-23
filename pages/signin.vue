<template>
  <!-- component -->
  <div class="bg-sky-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" class="object-cover w-full h-full">
    </div>
    <!-- Right: Login Form -->
    <div class= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <nu-form
          :form-state="formStateSignIn"
          @onFinish="onFinish"
      >
        <template v-slot:form-header>
          <h1 class="text-2xl font-semibold mb-4">Login</h1>
        </template>
        <template v-slot:form-body>
          <a-form-item
              class="custom-form-item"
              label="Email"
              name="email"
              :rules="[{ required: true, message: 'Email is required!' }]"
          >
            <a-input v-model:value="formStateSignIn.email" />
          </a-form-item>

          <a-form-item
              class="custom-form-item"
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formStateSignIn.password" />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Login</a-button>
          </a-form-item>
        </template>
        <template v-slot:form-footer>
          <!-- Sign up  Link -->
          <div class="mt-6 text-green-500 text-center">
            <a href="#" class="hover:underline">Sign up Here</a>
          </div>
        </template>
      </nu-form>
    </div>
  </div>
  <contextHolder />
</template>

<script lang="ts">
  import type {FormSignIn} from "~/types/form";
  import NuForm from "~/components/common/nu-form.vue";
  import {useNotification} from "~/composables/use-notification";

  export default defineNuxtComponent({
    props:{},
    components:{
      NuForm
    },
    setup(props) {

      const {
        accessToken,
        formStateSignIn,
        handleSignIn
      } = useAuth()

      const {openNotification} = useNotification()

      const onFinish = (values: FormSignIn) => {
        handleSignIn(values)
            .then((res : any) => {
              if (res?.status === 'OK') {
                accessToken.value = res?.accessToken;
                openNotification({
                  title: 'success',
                  description: res?.msg,
                  status: 'success'
                })
                navigateTo('/')
              } else {
                openNotification({
                  title: 'fail',
                  description: res?.msg,
                  status: 'error'
                })
              }
            })
      };

      return {
        formStateSignIn,
        onFinish,
      }
    }
  })
</script>

<style scoped lang="scss">

</style>