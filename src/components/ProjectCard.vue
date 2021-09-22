<script>
export default {
  name: "ProjectCard",
};
</script>

<script setup>
import { ref } from "vue";
const props = defineProps({
  data: Object,
});

const data = props.data;
const selected_project_id = ref(-1);

const onClickProject = (one_data) => {
  selected_project_id.value = one_data.id;
};
</script>

<template>
  <div
    class="card h-100 border-2"
    :class="{ 'border-primary': selected_project_id == data.id }"
  >
    <img :src="data.image" alt="project img" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <p class="card-text">{{ data.content }}</p>
      <p class="card-text" v-if="data.url != 'null'">
        <a :href="data.url" @click="onClickProject(data)" target="_blank"
          >클릭</a
        >
      </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{ data.date }}에 등록 됨</small>
    </div>
  </div>
</template>