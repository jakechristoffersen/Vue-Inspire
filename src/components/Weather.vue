<template>

    <div class="container">


        <div class="card">

            <div class="weather" v-if="weather.main">
                <div class="card-header">
                    <h3>Weather</h3>
                </div>
                <div class="card-body">
                    <p>{{weather.main.temp}}° Kelvin</p>
                    <p>{{weather.main.humidity}}% Humidity</p>
                    <p>{{weather.wind.speed}} Wind Speed</p>
                    <img :src="'http://openweathermap.org/img/w/' + weather.icon + '.png'" v-if="weather.icon" />
                </div>
            </div>
        </div>

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