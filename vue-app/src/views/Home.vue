<template>
  <div class="container">
    <Card :user="user" v-for="user in users" :key="user.name"></Card>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {

  name: 'Home',
  components: {
   Card
  },
  data() {
    return {
      form: {

        name: '',
        email: '',
        phone: '',
        adress:'',
        company: ''

        },
      users: [
        {
        name: 'Mio',
        email: 'mio@localhost.com',
        phone: '0176665555',
        adress: {
          street: 'Kurt-Schumacher-Straße',
          localisation: 'Germany'
        },
        company: {
          name: 'MMS',
          location: {
            street: 'Mainzer-Straße',
            geolocalisation: 'Dresden, Germany'
          }
        }
      },

       {
        name: 'FI',
        email: 'mio@localhost.com',
        phone: '0176665555',
        adress: {
          street: 'Kurt-Schumacher-Straße',
          localisation: 'Germany'
        },
        company: {
          name: 'MMS',
          location: {
            street: 'Mainzer-Straße',
            geolocalisation: 'Dresden, Germany'
          }
        }
      },

      ]
    }
  },

  methods: {
    submitted(){
     
    }
  }
}
</script>

<style>


</style>
