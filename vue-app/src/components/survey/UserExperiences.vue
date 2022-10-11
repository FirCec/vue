<template>
    <section>
      <BaseCard>
        <h2>Submitted Experiences</h2>
        <div>
          <BaseButton>Load Submitted Experiences</BaseButton>
        </div>
        <ul>
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
  import SurveyResult from './SurveyResult.vue';
  import BaseButton from './UI/BaseButton.vue';
  import BaseCard from './UI/BaseCard.vue';
  
  export default {
    props: ['results'],
    components: {
      SurveyResult,
      BaseButton,
      BaseCard
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  </style>