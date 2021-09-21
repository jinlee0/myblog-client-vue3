<script>
export default {
  name: "ResumeCard",
};
</script>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  top: Boolean,
  resume: Object,
  show: Boolean,
});
const { top, resume, show } = toRefs(props);
</script>

<template>
  <div class="col-sm py-2" v-if="show">
    <div
      class="card"
      :class="{ 'border-primary bg-primary text-light': top, shadow: top }"
    >
      <div class="card-body">
        <h4 class="card-title" :class="[top ? 'text-light' : 'text-muted']">
          {{ resume.title }}
        </h4>
        <hr />
        <p class="card-text">{{ resume.content }}</p>
        <a
          :href="resume.URL"
          v-if="resume.URL != 'null'"
          target="_blank"
          :class="[top ? 'text-light' : 'text-primary']"
          >link</a
        >
      </div>
    </div>
  </div>
  <div class="col-sm" v-if="!show"></div>
</template>