import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

vue.use(vuex)

let auth = axios.create({
    baseURL: '//night-class-server.herokuapp.com/auth',
    timeout: 2000,
    withCredentials: true
})

let api = axios.create({
    baseURL: '//night-class-server.herokuapp.com/api',
    timeout: 5000,
    withCredentials: true
})

let image = axios.create({
    baseURL: 'http://www.splashbase.co/api/v1/images/random',
    timeout: 2000,
    withCredentials: true
})

let quote = axios.create({
    baseURL: 'https://night-class-server.herokuapp.com/api/quotes',
    timeout: 2000,
    withCredentials: true
})

let weather = axios.create({
    baseURL: 'https://night-class-server.herokuapp.com/api/',
    timeout: 2000,
    withCredentials: true
})

var store = new vuex.Store({
    state: {
        user: {},
        todo: [],
        image: [],
        quote: [],
        weather: [],
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setTodo(state, todo) {
            state.todo = todo
        },
        setImage(state, image) {
            state.image = image
        },
        setQuote(state, quote) {
            state.quote = quote
        },
        setWeather(state, weather) {
            state.weather = weather
        }
    },
    actions: {
        //User Auth

        login({ commit, dispatch }, user) {
            //make a post request to the login location on the auth server with the user
            auth.post('login', user)
                .then(res => {
                    console.log(res.data.message)
                    commit('setUser', res.data.user)
                    router.push('/home')
                })
                .catch(err => {
                    console.error(err)
                })
        },
        register({ commit, dispatch }, user) {
            //make a post request to the register location on the auth server
            //with the user from the auth component
            auth.post('register', user)
                .then(res => {
                    console.log(res.data.message)
                    //add the user to our store
                    commit('setUser', res.data.user)
                    router.push('/home')
                })
                .catch(err => {
                    console.error(err)
                })
        },
        authenticate({ dispatch, commit }) {
            auth.get('authenticate')
                .then(res => {
                    console.log(res.data.message)
                    commit('setUser', res.data)
                    router.push('/home')
                })
                .catch(err => {
                    console.error(err)
                    router.push('/')
                })
        },
        logout({ dispatch, commit }) {
            auth.delete('logout')
                .then(res => {
                    console.log(res.data.message)
                    commit('setUser', {})
                    router.push('/')
                })
                .catch(err => {
                    console.error(err)
                })
        },

        //todo actions


        //image actions
        getImage({ commit, dispatch }, image) {
            image.get('large_url').then(res => {
                console.log(res)
                commit('setImage', res.data.data)
            })
                .catch(err => {
                    console.error(err)
                })
        },

        //quote actions
        getQuote({ commit, dispatch }, quote) {
            quote.get('quote').then(res => {
                console.log(res)
                commit('setQuote', res.data.data)
            })
                .catch(err => {
                    console.error(err)
                })
        },

        //weather actions
        getWeather({ commit, dispatch }) {
            weather.get('weather').then(res => {
                console.log(res)
                commit('setWeather', res.data.data)
            })
                .catch(err => {
                    console.error(err)
                })
        },

    }
})

export default store