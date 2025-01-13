<template>
  <table class="custom-table">
    <thead>
      <tr>
        <th v-for="(col, index) in columns" :key="index">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in dataSource" :key="rowIndex">
        <td v-for="(col, colIndex) in columns" :key="colIndex">
          <!-- Agar col.render bo'lsa, uni ishlating, bo'lmasa oddiy qiymatni ko'rsating -->
          <span v-if="col.render">{{ col.render(row[col.dataIndex], row, rowIndex) }}</span>
          <span v-else>{{ row[col.dataIndex] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from "vue";

type ColumnType<T> = {
  title: string;
  dataIndex: keyof T;
  render?: (value: any, record: T, index: number) => string | any;
};

const props = defineProps({
  columns: {
    type: Array as PropType<ColumnType<any>[]>,
    required: true,
  },
  dataSource: {
    type: Array as PropType<any[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.custom-table {
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  .chat-btn {
    display: flex;
    align-items: center;
    background-color: #25c196;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .chat-icon {
    margin-left: 5px;
  }
}
</style>
