<script setup lang='ts'>
import { onMounted, watch } from 'vue';
import { UseGoToDestination } from '@/composables/UseGoToDestination';

const props = defineProps({
  destination: {
    type: String,
    required: true
  }
});

const { goToDestination, arrivedAtDestination } = UseGoToDestination();


const startResourceGathering = () => {
  console.log('Starting to gather resources!')
}

// const submitGatheredResources = () => {
  
// }

onMounted(async () => {
  goToDestination('me', props.destination);
});

watch(arrivedAtDestination, () => {
  if(arrivedAtDestination.value === true) {
    startResourceGathering();
  }
})

</script>

<template>
  <div
    id="me"
    class="w-[20px] h-[30px] rounded-xl bg-amber-400 absolute border border-white shadow-xl z-50"
  />
</template>