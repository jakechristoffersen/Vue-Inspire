<template>

    <div class="home">

        <div class="container">
            <div class="row">
              
                        <div class="col">
                            <div class="card">
                                <div class="quote" v-if="quote.quote">
                                    <div class="card-header">
                                        <h3>Quote</h3>
                                    </div>
                                    <div class="card-body">
                                        <p>{{quote.quote}}</p>
                                        <h3>
                                            <small class="text-muted">~{{quote.author}}</small>
                                        </h3>


                                    </div>
                                </div>
                           
                    </div>
                </div>
                <div class="col">
                        <weather class="weather"></weather>
                </div>

            </div>


        </div>
        <div style="margin:10px"></div>
        
        <todo class="todo"></todo>

    </div>
</template>

<script>

    import Weather from './Weather.vue'
    import Todo from './Todo.vue'


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
            Todo


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