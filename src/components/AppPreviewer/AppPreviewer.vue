<script setup lang="ts">
import { ref } from 'vue'
import type { PreviewType } from './type'
import LaptopPreviewer from './LaptopPreviewer.vue'
import MobilePreviewer from './MobilePreviewer.vue'
const previewMode = ref<PreviewType>('laptop')

const handleModeChange = (mode: PreviewType) => {
  previewMode.value = mode
}
</script>
<template>
  <div class="layout-content">
    <LaptopPreviewer
      v-if="previewMode === 'laptop'"
      :key="'laptop'"
      :preview-mode="previewMode"
      @preview-mode-change="handleModeChange"
    />
    <MobilePreviewer
      v-if="previewMode === 'mobile'"
      :key="'mobile'"
      :preview-mode="previewMode"
      @preview-mode-change="handleModeChange"
    />
  </div>
</template>
<style scoped>
.layout-content {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  flex: 1;
  background-color: var(--color-gray-100);
}
</style>
