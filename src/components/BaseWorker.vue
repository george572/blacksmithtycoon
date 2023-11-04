<script setup lang='ts'>
import { onMounted } from 'vue';
import { UseGoToDestination } from '@/composables/UseGoToDestination';

const props = defineProps({
  destination: {
    type: String,
    required: true
  }
});

const { goToDestination } = UseGoToDestination();


// const startResourceGathering = () => {

// }

// const submitGatheredResources = () => {
  
// }

onMounted(() => {
  goToDestination('me', 'ironVein#122');
});
</script>

<template>
  <div
    id="me"
    class="w-[20px] h-[30px] rounded-xl bg-amber-400 absolute border border-white shadow-xl z-50"
  />
</template>