<template>
  <div class="home">
    <Menu msg="Pedidos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';

export default {
  name: 'Mesero',
  components: {
    Menu,
  },
};
</script>
