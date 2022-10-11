<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton mode="flat" @click="deleteResource(id)">Delete</BaseButton>
      </header>

      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
export default {
  props: ['id',"title", "description", "link"],
  inject: ['deleteResource'],
  components: { BaseCard, BaseButton },
};
</script>
<style scoped>
li {
  background: none;
  margin: auto;
  max-width: 40rem;
  font-size: 1.4rem;
  text-align: left;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  font-size: 1.9rem;
  margin: 0.5rem 0;
}
p {
  margin: 0.5rem 0;
}
a {
  color: #ce5c00;
  text-decoration: none;
}
a:hover,
a:active {
  color: #c89300;
}
</style>
