<template>
  <section>
    <BaseCard>
      <h2>Submitted Experiences</h2>
      <div>
        <BaseButton @click="loadExperiences"
          >Load Submitted Experiences</BaseButton
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{error}}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some survey results first.</p>
      <ul v-else>
        <SurveyResult
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></SurveyResult>
      </ul>
    </BaseCard>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";
import BaseButton from "./UI/BaseButton.vue";
import BaseCard from "./UI/BaseCard.vue";

export default {
  //props: ['results'],
  components: {
    SurveyResult,
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        "https://vue-http-demo-32f6e-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        }).catch( (error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data. Please try again later...'
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0;
  font-weight: 500;
}
</style>
