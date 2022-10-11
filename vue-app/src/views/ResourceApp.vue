<template>
    <section>
        <TheHeader title="RememberMe"></TheHeader>
        <TheResource></TheResource>
    </section>
</template>

<script>
import TheHeader from "../components/resourceApp/layouts/TheHeader.vue";
import TheResource from "../components/resourceApp/TheResource.vue";

export default{
    components: { TheHeader, TheResource }
}
</script>