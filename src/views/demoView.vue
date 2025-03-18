<template>
   <div class="about">
      <el-table :data="tableData" style="width: 100%">
         <el-table-column prop="date" label="Date" width="180" />
         <el-table-column prop="name" label="Name" width="180" />
         <el-table-column prop="address" label="Address" />
      </el-table>
      <el-divider />
      <el-image :src="src" />
      <el-divider />
      <el-text class="mx-1">Default</el-text>
      <el-text class="mx-1" type="primary">Primary</el-text>
      <el-text class="mx-1" type="success">Success</el-text>
      <el-text class="mx-1" type="info">Info</el-text>
      <el-text class="mx-1" type="warning">Warning</el-text>
      <el-text class="mx-1" type="danger">Danger</el-text>
      <el-divider />
      <h1>
         自定义模自定义模板自定义模板自定义模板自定义模板自定义模板自定义模板自定义模板自定义模板自定义模板自定义模板自定义模板板
      </h1>
      <h5>自定义模板</h5>
   </div>
</template>
<script setup>
const src =
   'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg';
const tableData = [
   {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
   },
   {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
   },
   {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
   },
   {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
   },
];
</script>
<style>
.about {
   height: 100%;
   border: 1px solid red;
   padding: 10px;
   overflow-y: auto;
}
</style>
