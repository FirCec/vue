<template>
<section>
  <BaseCard>
    <BaseButton @click="setSelectedTab('stored-resources')" :mode="storedResButtonmode">Stored Resource</BaseButton>
    <BaseButton @click="setSelectedTab('add-resource')" :mode="addResButtonmode">Add Resource</BaseButton>
  </BaseCard>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</section>
</template>

<script>
import AddResource from "./AddResource.vue"
import StoredResources from "./StoredResources.vue";
import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
export default {
  components: {
    BaseCard,
    BaseButton,
    StoredResources,
    AddResource
  },
  data(){
    return {
        selectedTab: 'stored-resources',
        storedResources: [
                { id: "official-guide", title: "Official Guide", description: "The official Vue.js Documentation.", link: "https://vuejs.org"
                },
                { id: "google", title: "Google", description: "Learn to google...", link: "https://google.org"
                }
            ]
    }
  },
  computed: {
    storedResButtonmode(){
        return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonmode(){
        return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab){
        this.selectedTab = tab
    },
    addResource(title, description,url){
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.push(newResource);
      this.selectedTab = 'stored-resources';

    },
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
  provide() {
    return {
        resources: this.storedResources,
        addResource: this.addResource,
        deleteResource: this.removeResource,
    }
  }
};
</script>
