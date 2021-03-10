<template>
<div>
    <Navbar></Navbar>
    <Body></Body>
    <Footer></Footer>
</div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import Body from '../components/DetailPageBody/DetailBody.vue'
    import Footer from '../components/Footer.vue';


    export default {
        name: 'Detail',
        components: {
            Navbar,
            Body,
            Footer
        },
        created() {

        },
    }
</script>

<style scoped>

</style>
