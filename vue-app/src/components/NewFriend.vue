<template>
    <form action="" @submit.prevent="addNewContact">
        <div>
            <label for="">Name</label>
            <input type="text" placeholder="name" v-model="enteredName" >
        </div>
        <div>
            <label for="">E-mail</label>
            <input type="email" placeholder="email" v-model="enteredMail">
        </div>
        <div>
            <label for="">Phone</label>
            <input type="tel" placeholder="phone" v-model="enteredPhone">
        </div>
        
        <button class="btn">Add Contact</button>
    </form>
</template>
<script>
    export default {
        emits:['add-contact'],
        data(){
            return{
                enteredName: '',
                enteredMail: '',
                enteredPhone: ''
            }
        },
        methods: {
            addNewContact(){
                this.$emit('add-contact', this.enteredName, this.enteredMail, this.enteredPhone
                );
            }
        }
    }
</script>
<style scoped>
form div {
    margin: 10px;
}
form div input{
    border-radius: 5px;
    width: 60%;
    font-size: 1.2rem;
}
form div label{
    margin-right: 7px;
    font-size: larger;
    font-weight: 700;
}
</style>