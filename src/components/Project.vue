<script>
export default {
  name: "Project",
};
</script>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import ProjectCard from "/@components/ProjectCard.vue";
import useAxios from "/@app_modules/axios.js";

const store = useStore();
const { axiosGet } = useAxios();
const projects = computed(() => store.getters["projects/projects"]());
const projects_count = computed(() => store.getters["projects/projects_count"]);

onMounted(() => {
  if (!store.getters.projects_count) {
    axiosGet("/project/admin", (data) => {
      store.dispatch("projects/setProjects", data);
    });
  }
});
</script>

<template>
  <p class="m-2">
    총 {{ projects_count }} 개의 프로젝트 중 {{ projects.length }}개가
    보여집니다.
  </p>
  <hr />
  <div class="row row-cols-1 row-cols-sm-3 g-2 m-0">
    <div class="col" v-for="data in projects" :key="data.id">
      <project-card :data="data"></project-card>
    </div>
  </div>
</template>