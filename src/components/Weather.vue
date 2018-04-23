<template>
           
    <div class="weather" v-if="weather.main">
        <h3 class="text-light">Weather</h3>
        <p>{{weather.main.temp}}° Kelvin</p>
        <p>{{weather.main.humidity}}% Humidity</p>
        <p>{{weather.wind.speed}} Wind Speed</p>
    </div>
</template>

<script>
    export default {
        name: 'weather',
        data() {
            return {

            }
        },
        mounted() {
            this.$store.dispatch('getWeather')
        },
        methods: {

        },
        computed: {
            weather() {
                return this.$store.state.weather
            }
        }
    }
</script>

<style>
</style>