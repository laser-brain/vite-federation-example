<script setup lang="ts">
import RemoteButton from "button/Button";
import RemoteLabel from "label/Label";
import { defineAsyncComponent } from "vue";
const AsyncRemoteButton = defineAsyncComponent(() => import("button/Button"));
const AsyncRemoteLabel = defineAsyncComponent(() => import("label/Label"));
</script>

<template>
  <RemoteButton />
  <AsyncRemoteButton />
  <RemoteLabel />
  <AsyncRemoteLabel />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
