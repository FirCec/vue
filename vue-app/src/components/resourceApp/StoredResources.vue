<template>
   <ul>
        <ResourceItem 
        v-for="res in resources" 
        :key="res.id"
        :id="res.id"
        :title="res.title"
        :description="
        res.description"
        :link="res.link"
        ></ResourceItem>
    </ul> 
</template>

<script>
import ResourceItem from "./ResourceItem.vue";
    export default{
        inject: ['resources'],
        components: {
            ResourceItem
        }
    }
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>