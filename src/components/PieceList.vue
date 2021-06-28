<template>
  <div class="job-list">test</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pieces: {
      required: true,
      type: Array,
    },
  },
});
</script>

<style scoped></style>
