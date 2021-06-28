<template>
  <div class="app">
    <h1>Welcome to Wheel Decide Chess!</h1>
  </div>
  <RenderFunction :pieces="pieces" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Piece from "../types/Piece";
import RenderFunction from "./RenderFunction.tsx";

export default defineComponent({
  name: "App",
  components: { RenderFunction },
  setup() {
    const pieces = ref<Piece[]>([
      { name: "king", value: Infinity },
      { name: "queen", value: 9 },
      { name: "rook", value: 5 },
      { name: "bishop", value: 3 },
      { name: "knight", value: 3 },
      { name: "pawn", value: 1 },
    ]);
    return { pieces };
  },
});
</script>

<style scoped></style>
