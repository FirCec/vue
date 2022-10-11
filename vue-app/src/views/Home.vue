<template>
  <div class="container">
    <h1>FriendList</h1>
    <NewFriend @add-contact="AddContact"></NewFriend>
    <ErrorAlert v-if="inputInvalid">
      <h2>Form is Invalid !</h2>
      <p>Please, Fill in The Form !</p>
      <button class="btn-alert" @click="confirmError">Okay</button>
    </ErrorAlert>

    <Card
      :user="user"
      v-for="user in users"
      :key="user.id"
      @remove-contact="removeContact(user.id)"
    ></Card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import NewFriend from "../components/NewFriend.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
export default {
  name: "Home",
  components: {
    Card,
    NewFriend,
    ErrorAlert,
  },
  data() {
    return {
      users: [],
      inputInvalid: false,
    };
  },

  methods: {
    AddContact(name, email, phone) {
      const friendContact = {
        id: new Date().toISOString(),
        name: name,
        email: email,
        phone: phone,
      };
      if ((friendContact.name !== "") & (friendContact.email !== "")& (friendContact.phone !== "")) {
        this.users.push(friendContact);
      } else {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },

    removeContact(friendId) {
      this.users = this.users.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style scoped>
.btn-alert {
  background-color: rgb(76, 230, 76);
  color: rgb(29, 24, 24);
  font-size: 1rem;
  border-radius: 10px;
  padding: 3px 10px;
  border: 1px solid greenyellow;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
}
</style>
