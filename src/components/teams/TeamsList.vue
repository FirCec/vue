<template>
  <button @click="navigateToUsers">To users</button>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  methods: {
    navigateToUsers(){
      this.$router.push('/users');
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
button{
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 2px;
  margin-left: 40px;
}
</style>