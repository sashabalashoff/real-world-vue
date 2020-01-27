<template>
  <div>
    {{ user.name }}
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['user', 'categories']),
};
</script>

<style scoped>

</style>
