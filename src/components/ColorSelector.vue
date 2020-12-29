<template>
  <div class="color flex justify-between items-center">
    <label class="text-sm font-semibold" for="color">Couleur:</label>
    <div id="selector" class="relative w-1/2">
      <select
        id="selector"
        class="block w-full p-2 appearance-none bg-transparent border-b"
        name="color"
      >
        <option v-for="color in colors" :key="color" v-bind:value="color">
          {{ color }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorSelector",
  props: ["colors"],
};
</script>

<style>
#selector::after {
  content: "\FE40";
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-30%);
  pointer-events: none;
}
</style>