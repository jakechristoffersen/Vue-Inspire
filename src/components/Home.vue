<template>

    <div class="home">
        <div class="container">
            <div class="row justify-content-around height align-items-center">
                <div class="col-sm-3">
                    <div class="card">
                        <div class="quote" v-if="quote.quote">
                            <div class="card-header">
                                <h3>Quote</h3>
                            </div>
                            <div class="card-body">
                                <p>{{quote.quote}}</p>
                                <h3><small class="text-muted">~{{quote.author}}</small></h3>
                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <weather class="weather"></weather>
        <!-- <backImage class="backimage"></backImage> -->
    </div>
</template>

<script>
    //import .vue's
    import Weather from './Weather.vue'
    // import backImage from './backImage.vue'

    export default {
        name: 'home',
        data() {
            return {
            }
        },

        methods: {
        },
        mounted() {
            this.$store.dispatch('getQuote')

        },
        computed: {
            quote() {
                return this.$store.state.quote
            }
        },
        components: {
            Weather,
            // backImage,


        }
    }

</script>

<style>
    /* .backimage {
        margin-left: 10%;
        height: 800px;
        width: 1200px;
        
    } */
</style>