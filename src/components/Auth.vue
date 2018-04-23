<template>
    <div class="auth">

        <div class="container">
            <div class="row justify-content-around height align-items-center">
                <div class="col-sm-5">


                    <div class="login" v-if="showLogin">
                        <div class="card">
                            <div class="card-header">
                                <h3>Login</h3>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" type="text" name="email" id="email" v-model="user.email">
                                    <small id="emailHelp" class="form-text text-muted">We don't Zuckerburg your Data</small>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" name="password" id="password" v-model="user.password">
                                </div>
                                <button class="btn btn-default" @click="login">Login</button>
                                <p>Not a user?
                                    <em @click="toggle">Register</em>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div class="register" v-if="!showLogin">
                        <div class="card">
                            <div class="card-header">
                                <h3>Register</h3>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input class="form-control" type="text" name="name" id="name" v-model="user.name">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" type="text" name="email" id="email" v-model="user.email">
                                    <small id="emailHelp" class="form-text text-muted">We don't Zuckerburg your Data</small>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" name="password" id="password" v-model="user.password">
                                </div>
                                <button class="btn btn-default" @click="register">Register</button>
                                <p>Already a user?
                                    <em @click="toggle">Login</em>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>


<script>
    export default {
        name: 'auth',
        data() {
            return {
                user: {},
                showLogin: true
            }
        },
        computed: {},
        methods: {
            //need some more methods here to login or register
            toggle() {
                this.showLogin = !this.showLogin
            },
            register() {
                this.$store.dispatch('register', this.user)
            },
            login() {
                this.$store.dispatch('login', this.user)
                this.user = {}
            }
        },
        components: {}
    }
</script>


<style scoped>
    .height {
        height: 100vh;
    }
</style>