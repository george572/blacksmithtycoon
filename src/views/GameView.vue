<script setup lang="ts">
import BaseWorker from '@/components/BaseWorker.vue';
import BaseBuilding from '@/components/BaseBuilding.vue';
import ControlPanel from '@/components/ControlPanel.vue';
import WorkingArea from '@/components/areas/WorkingArea.vue';
import BuildingArea from '@/components/areas/BuildingArea.vue'
</script>

<template>
  <main>
    <WorkingArea>
      <BaseWorker :destination="'ironVein#12'" />
    </WorkingArea>
    <BuildingArea>
      <BaseBuilding /> 
    </BuildingArea>
    <ControlPanel />
  </main>
</template>
