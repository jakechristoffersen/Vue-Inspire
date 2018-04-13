<template>
    <div class="weather">
        <div class="container">
            <h3>Weather</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'weather',
        data() {
            return {
                weather: "",
            }
        },
        mounted() {
            this.$store.dispatch('getWeather')
        },
        methods: {
        
        },
        computed: {
            // getWeather() {
            //     return this.$store.state.weather
            // }
        }
    }
</script>

<style>
</style>