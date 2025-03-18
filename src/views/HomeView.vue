<script setup>
import CKEdior from './CKEdior.vue';
import demoView from './demoView.vue';
</script>

<template>
   <div class="home">
      <div class="ck-editor"><CKEdior></CKEdior></div>
      <div class="demo-view">
         <demoView></demoView>
      </div>
   </div>
</template>
<style scoped>
.home {
   display: flex;
   height: 100%;
}
.ck-editor {
   flex: 1;
}
.demo-view {
   width: 30%;
}
</style>
