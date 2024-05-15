<script setup>
import { RouterView } from "vue-router";
import ProjectHeader from "@/components/common/ProjectHeader.vue";
import { useMemberStore } from "./stores/member";

const member = useMemberStore();
</script>

<template>
  <div>
    <!-- <header>
      <router-link :to="{ name: 'main' }">Main</router-link>
      <span> | </span>
      <router-link :to="{ name: 'map' }">Map</router-link>
      <span> | </span>
      <router-link :to="{ name: 'board-list' }">Board</router-link>
      <span> | </span>
      <router-link :to="{ name: 'member' }">Member</router-link>
      <span> | </span>
      <router-link to="#">Member</router-link>
    </header> -->
    <ProjectHeader :key="member.isLogin" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
