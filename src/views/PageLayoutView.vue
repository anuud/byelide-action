<script setup lang="ts">
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppRightPanel from '@/components/AppPreviewer/AppPreviewer.vue'
import AppRightPannel from '@/components/AppRightPannel/AppRightPannel.vue'
</script>
<template>
  <div class="layout-wrapper">
    <AppLeftPanel />
    <AppRightPanel />
    <AppRightPannel />
  </div>
</template>
<style scoped>
.layout-wrapper {
  display: flex;
  height: 100%;
}

.layout-setting {
  position: relative;
  z-index: 6;
  width: var(--panel-width);
  box-shadow: var(--color-gray-300) -1px 0 0;
}
</style>
