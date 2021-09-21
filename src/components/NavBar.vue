<script>
export default {
  name: "NavBar",
};
</script>

<script setup>
import { ref, computed } from "vue";
const menu = ref("home"); // menu 초깃값은 home. ref proxy이므로 템플릿에 반응성을 가짐.
const menus = [
  { key: "home", value: "홈", URL: "#", position: "left" },
  { key: "app", value: "애플리케이션", URL: "#", position: "left" },
  { key: "me", value: "Profile", URL: "#", position: "right" },
];

const left_menus = computed(() => menus.filter((i) => i.position == "left"));
const right_menus = computed(() => menus.filter((i) => i.position == "right"));

const onMovePage = (event, menu_object) => {
  // 메뉴 목록 중 하나가 눌리면 menu에 반영
  if (event) {
    event.preventDefault();
  }
  menu.value = menu_object.key;
};

const menu_category = [
  // 왼쪽, 오른쪽 메뉴바를 구분하여 template에서 사용 (v-for)
  {
    id: 1,
    me_auto: true,
    value: left_menus.value,
  },
  {
    id: 2,
    me_auto: false,
    value: right_menus.value,
  },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="/" class="navbar-brand">JLB</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          v-for="menu in menu_category"
          :key="menu.id"
          :class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }"
        >
          <li
            class="nav-item"
            v-for="menu_object in menu.value"
            :key="menu_object.key"
          >
            <a
              href="#"
              :class="{ 'nav-link': true, active: menu == menu_object.key }"
              @click="onMovePage($event, menu_object)"
              >{{ menu_object.value }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>