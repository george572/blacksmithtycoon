<script setup lang='ts'>
import ResourceVein from '../resource-veins/ResourceVein.vue';
</script>

<template>
  <div class="w-full h-[300px] border bg-slate-400 flex items-center justify-center relative">
    <h2 class="text-4xl tracking-widest opacity-10 text-white">
      W O R K I N G A R E A 
    </h2>
    <slot />
    <ResourceVein id="ironVein#122" />
  </div>
</template>