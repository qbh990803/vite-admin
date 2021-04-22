<template>
  <div>{{ text }}111</div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, onBeforeMount } from 'vue';
  import HomeApi from '@/apis/home';

  export default defineComponent({
    name: 'Home',
    setup() {
      const text = ref<String>('home');
      const condition = reactive({
        list: []
      });
      const getData = async () => {
        const { code, data } = await HomeApi.getData();
        if (code === 200) {
          condition.list = data as [];
        }
      };
      onBeforeMount(() => {
        getData();
      });
      return {
        text
      };
    }
  });
</script>

<style lang="less" scoped></style>
