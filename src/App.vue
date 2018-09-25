<template>
  <div id="app">
    <template>
      <el-select v-model="value" placeholder="请选择" @change="selectValue">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </template>

    <el-table :data="tableData" border style="width: 100%;">
      <template v-for="(item, index) in tableHeaders">
        <el-table-column :key="index" :prop="item.key" :label="item.label" header-align="center">
        </el-table-column>
      </template>
    </el-table>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options: [
        {
          value: "1",
          label: "文保行业"
        },
        {
          value: "2",
          label: "办公场所"
        },
        {
          value: "3",
          label: "街道"
        }
      ],
      value: "",
      tableData: [
        { 1: "a", 2: "男", 3: 134567756554 },
        { 1: "a", 2: "男", 3: 134567756554 },
        { 1: "a", 2: "男", 3: 134567756554 },
        { 1: "a", 2: "男", 3: 134567756554 },
        { 1: "a", 2: "男", 3: 134567756554 }
      ],
      tableHeaders: [
        {
          key: "1",
          label: "名字"
        },
        {
          key: "2",
          label: "性别"
        },
        {
          key: "3",
          label: "手机号"
        },
        {
          key: "4",
          label: "地址"
        }
      ]
    };
  },
  methods: {
    selectValue() {
      if (this.value === "1") {
        this.tableData = [
          { 1: "a", 2: "男", 3: 134567756554 },
          { 1: "a", 2: "男", 3: 134567756554 },
          { 1: "a", 2: "男", 3: 134567756554 },
          { 1: "a", 2: "男", 3: 134567756554 },
          { 1: "a", 2: "男", 3: 134567756554 }
        ];
      } else {
        this.tableData = [
          {
            1: "a",
            2: "男",
            3: 134567756554,
            4: "ResizeObserver(entries => { for (let entry of entries) { if (entry.target === target) ."
          },
          {
            1: "b",
            2: "男",
            3: 134567756554,
            4: "ResizeObserver(entries => { for (let entry of entries) { if (entry.target === target) ."
          },
          {
            1: "c",
            2: "男",
            3: 134567756554,
            4: "ResizeObserver(entries => { for (let entry of entries) { if (entry.target === target) ."
          },
          {
            1: "d",
            2: "男",
            3: 134567756554,
            4: "ResizeObserver(entries => { for (let entry of entries) { if (entry.target === target) ."
          },
          {
            1: "e",
            2: "男",
            3: 134567756554,
            4: "ResizeObserver(entries => { for (let entry of entries) { if (entry.target === target) ."
          }
        ];
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
