<template>
  <form @submit.prevent="submittForm">
    <div class="form-control" :class="validatorClass">
      <label for="user-name">Your Name</label>
      <input id="user-name" 
      name="user-name" 
      type="text" 
      v-model.trim="userName"
      @blur="validateInput" />
      <p v-if="userInputValidity === 'invalid'">
        This field muss be filled!
      </p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" 
      name="age" 
      type="number" 
      v-model="userAge" />
    </div>

    <div class="form-control">
      <label for="referre">How did you hear about us?</label>
      <select name="referrer" id="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input name="interest" 
        value="news"
        type="checkbox" 
        id="interest-news"
        v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input type="checkbox" 
        value="tutorials"
        id="interest-tutorials" 
        name="interest" 
        v-model="interest"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input type="checkbox" 
        value="nothing"
        id="interest-nothing" 
        name="interest"
        v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input name="how"
        value="video"
         type="radio" 
         id="how-video"
         v-model="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input type="radio" 
        id="how-blogs"
        name="how"
        value="blogs"
        v-model="how" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input type="radio" 
        id="how-other" 
        name="how"
        value="other"
        v-model="how" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input type="checkbox" 
      id="confirm-terms" 
      name="confirm-terms"
      v-model="conditionsTerm"/>
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>

    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userAge: null,
      referrer: "google",
      interest: [],
      how: null,
      conditionsTerm: false,
      inputInvalid: false,
      userInputValidity: 'pending',
    };
  },
  computed: {
    validatorClass(){
        return {invalid: this.userInputValidity === 'invalid'};
        
    }
  },
  methods: {
     submittForm() {
      console.log("Username: " + this.userName);
      this.userName = "";
      console.log("Userage: " + this.userAge);
      this.userAge = null;
      console.log("Select-value: " + this.referrer);
      this.referrer = "google";
      console.log('Userinterest: ' + this.interest);
      console.log('Userinterest on index 0: ' + this.interest[0]);
      this.interest = [];
      console.log('User-resources: ' + this.how);
      this.how = null;
      console.log('Terms: ' + this.conditionsTerm);
      this.conditionsTerm = false;
    },
    validateInput(){
        if(this.userName === ''){
            this.userInputValidity = 'invalid';
        }else {
            this.userInputValidity = 'valid';
        }
    },

  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
  text-align: left;
}
.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid input {
    border-color: red;
}
label {
  font-weight: bold;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: black;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}
button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
