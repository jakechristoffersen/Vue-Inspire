<template>
    
        <img :src="image.url">
    
</template>

<script>
   

    export default {
        name: 'backimage',
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('getImage')
        },
        methods: {

        },
        computed: {
            image() {
                return this.$store.state.image
            }
        }
    }
</script>

<style>
</style>