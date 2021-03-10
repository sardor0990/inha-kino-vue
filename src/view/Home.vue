<template>
    <Navbar></Navbar>
    <MainBody></MainBody>
    <Footer></Footer>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import MainBody from '../components/mainBody.vue';
    import Footer from '../components/Footer.vue';


    export default {
        name: 'Home',
        components: {
            Navbar,
            MainBody,
            Footer
        },
        created() {

        },
    }
</script>

<style>


</style>
