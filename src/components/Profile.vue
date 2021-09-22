<script>
export default {
  name: "Profile",
};
</script>

<script setup>
import ResumeCard from "/@components/ResumeCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import useAxios from "/@app_modules/axios.js";

const store = useStore();
const { axiosGet } = useAxios();

const onSuccess = (data) => {
  store.dispatch("about_me/setAboutMeData", data.data);
};
axiosGet("/resume/admin", onSuccess);

const user_data = computed(() => store.getters["about_me/user_data"]);
</script>

<template>
  <div class="container pt-5">
    <div>
      <p class="fs-1 mb-0">{{ user_data.name }}</p>
    </div>
    <div>
      <p class="fs-4">{{ user_data.email }}</p>
    </div>

    <div
      class="row no-gutters"
      v-for="(d, index) in user_data.resume"
      :key="index"
    >
      <resume-card :top="!index" :resume="d" :show="index % 2 == 1" />
      <div class="col-sm-2 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col" :class="[index ? 'border-end' : '']" />
          <div class="col" />
        </div>
        <h1>
          <span
            class="badge rounded-pill border"
            :class="[!index ? 'bg-primary text-light' : 'bg-light text-dark']"
            >{{ new Date(d.date).getFullYear() }}</span
          >
        </h1>
        <div class="row h-50">
          <div
            class="col"
            :class="[index != user_data.resume.length - 1 ? 'border-end' : '']"
          />
          <div class="col" />
        </div>
      </div>
      <resume-card :top="!index" :resume="d" :show="index % 2 == 0" />
    </div>
  </div>
</template>