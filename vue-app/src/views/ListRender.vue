<template>
  <div class="about container">
    <h1>About My Goals</h1>
    <div class="description">
      <List></List>
    </div>
  </div>
</template>

<script>
import List from '../components/List.vue'

export default {
    name: "ListRender",
    components: { List }
}

</script>

<style>

</style>
