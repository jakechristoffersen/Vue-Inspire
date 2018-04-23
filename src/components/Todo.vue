<template>
    <div class="todo">
        <div class="container text-light">
            <h4 class="text-light">New Honey Do</h4>
            <form @submit.prevent="addTodo">
                <div class="form-group">
                    <label for="todoName">Honey Do...</label>
                    <input class="form-control" type="text" id="todoName" v-model="todo.name" placeholder="Trash Cans">
                </div>
                <div class="form-group">
                    <label for="todoDesc">..And this is how To-Do</label>
                    <input class="form-control" type="text" id="todoDesc" v-model="todo.description" placeholder="Take them to the curb, and bring them back in on Friday">
                </div>
                <fieldset class="form-group text-light">
                    <legend>Have you Done it yet?</legend>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="optionsRadios" id="compRadio1" value="true" > Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="radio" class="form-check-input" name="optionsRadios" id="compRadio2" value="false" checked> No
                        </label>
                    </div>
                </fieldset>
                <div class="form-group">
                    <button class="btn btn-default" type="submit">Add this To-Do</button>
                </div>
            </form>
        </div>

        <div class="container text-light">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Update/Delete</th>
                    </tr>
                </thead>
                <tbody v-for="todo in todos">
                    <tr>
                        <th>{{todo.name}}</th>
                        <th>{{todo.description}}</th>
                        <th>{{todo.completed}}</th>
                        <th>
                            <button type="button" data-toggle="modal" :data-target="'#'+ todo._id" class="btn btn-default" @click="setTodo(todo)">U</button> /
                            <button class="btn btn-warning" @click="removeTodo(todo._id)">X</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="modal fade" :id="todo._id" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true"
            v-for="todo in todos">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">{{todo.name}} {{todo.description}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addTodo">
                            <div class="form-group">
                                <label for="todoName">Honey Do...</label>
                                <input class="form-control" type="text" id="todoName" v-model="todo.name" placeholder="Trash Cans">
                            </div>
                            <div class="form-group">
                                <label for="todoDesc">..And this is how To-Do</label>
                                <input class="form-control" type="text" id="todoDesc" v-model="todo.description" placeholder="Take them to the curb, and bring them back in on Friday">
                            </div>
                            <div class="form-group">
                                <label for="todoCompleted">You do?</label>
                                <input class="form-control" type="checkbox" id="todoCompleted" v-model="todo.completed">
                            </div>

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateTodo()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "todo",
        data() {
            return {
                todo: {

                },
                updatetodo: {

                }
            }
        },

        mounted() {
            this.$store.dispatch('getTodo')
        },
        methods: {
            setTodo(todo) {
                this.updateTodo = todo
            },
            addTodo() {
                this.$store.dispatch('addTodo', this.todo)
                this.todo = {}
            },
            removeTodo(id) {
                this.$store.dispatch('removeTodo', id)
            },
            updateTodo() {
                this.$store.dispatch('updateTodo', this.updateTodo)
            }
        },
        computed: {
            todos() {
                return this.$store.state.todo
            }
        }

    }
</script>

<style>
</style>