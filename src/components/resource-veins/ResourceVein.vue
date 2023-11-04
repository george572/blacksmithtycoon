<script setup lang='ts'>
import {ref} from 'vue';

const resourceAmount = ref(2000);
</script>

<template>
  <div class="w-[100px] h-[50px] bg-lime-800 absolute rounded-xl flex items-center justify-center right-10">
    <h2 class="text-white text-center">
      Iron - {{ resourceAmount }}
    </h2>
  </div>
</template>