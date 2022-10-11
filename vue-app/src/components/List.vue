<template>
    <div>
        <section class="container section">
            <h2>My course Goals</h2>
           <form action="" @submit.prevent="addGoal">
            <input type="text" 
            placeholder="Add Goal" 
            v-model="addedGoal">
            <button class="btn" 
            >Add Goal</button>
           </form>
            <p v-if="goals.length === 0">No goals have been added yet! Please start adding</p>
            <ul v-else>
                <li v-for="(goal,index) in goals" :key="goal" @click="removeGoal(index)">{{goal}}
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        namme: 'List',

        data() {
            return {
                goals: [],
                addedGoal: ''
            }
        },
        methods: {
            addGoal(){
                this.goals.push(this.addedGoal);
                this.addedGoal = '';
            },
            removeGoal(id){
                this.goals.splice(id,1);
            }
        }
    }
</script>
<style scoped>
.section{
    max-width: 80%;
    text-align: center;
}

.section form{
    display: flex;


}
form input{
    width: 80%;
    font-size: 1.2rem;
    border-radius: 5px;
}
form button{
    width: 20%;
}

</style>