<template>
  <div class="container user">
    <h1>{{ user.name }}</h1>
    <ul>
      <li>E-mail: {{user.email}}</li>
      <li>Phone: {{user.phone}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    user: {
      type: Object,
      required: true
      }
  },
  data() {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  text-align: center;
   margin: 0 auto;
}
 ul li{
  display: block;
  text-align: center;
 
 }
</style>
