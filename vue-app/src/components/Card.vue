<template>
  <div class="container user">

    <h2>{{ user.name }}</h2>
    <hr>
    <ul v-if="detailVisible">
      <li>E-mail: {{user.email}}</li>
      <li>Phone: {{user.phone}}</li>
    </ul>
    <div class="btn-div">
      <button class="btn" @click="toggleDetail()">{{detailVisible ? 'Hide': 'Show' }} Details</button>
      <button class="btn" @click="$emit('remove-contact', id)">Delete Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  emits: ['remove-contact'],
  props: {
    user: {
      type: Object,
      required: true
      }
  },
  data() {
    return {
      detailVisible: false
    }
  },

  methods: {

    toggleDetail(){
      this.detailVisible = !this.detailVisible;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  text-align: center;
   margin: 0 auto;
   border-radius: 15px;
   box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 10px;
   padding: 20px;
   margin: 20px;
}
 ul li{
  display: block;
  text-align: center;
 
 }
 .btn-div{
 display: flex;
 align-items: center;
 justify-content: space-around;
 padding: 20px;
 }
</style>
