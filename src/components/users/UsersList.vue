<template>

  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <button @click="navigateToTeams">To teams</button>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    navigateToTeams(){
      this.$router.push('/teams');
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
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