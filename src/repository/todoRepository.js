const fp = require('fastify-plugin');

class TodoRepository{
    constructor(db){
        this.db = db;
    }

    async insertOne(data){
        const todolist = this.db.todos;
        this.db.todos.push({
            text:data,
            id:todolist.length
        })
        return this.db.todos;
    }

    async getTodo(id){
        console.log(id);
        console.log(this.db);
        return this.db.todos.find(todo=>todo.id == id);
    }
    async getAll(){
        return this.db.todos;
    }
    async deleteOne(id){

    }
    async deleteAll(){

    }
}


async function todoRepository(fastify,options){
    const {db} = fastify;
    const repo = new TodoRepository(db);
    fastify.decorate('todoRepository',repo);
}

module.exports = fp(todoRepository);