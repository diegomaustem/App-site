<template>

    <div class="container">
        <div class="row">
            <Header/>
            <Footer/>
            <Quad/>
        </div>
    </div>

</template>

<script>
    import Header from './Header/Header.vue'
    import Footer from './Footer/Footer.vue'
    import Quad   from './Quad/Quad.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            Quad,
            Footer
        }
    }
</script>





