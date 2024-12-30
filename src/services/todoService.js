const fp = require('fastify-plugin');

class TodoService{
    constructor(todoRepository){
        this.todoRepository = todoRepository;
    }

    async insertOne(data){
        return this.todoRepository.insertOne(data);
    }

    async getTodo(id){
        return this.todoRepository.getTodo(id);
    }
    async getAll(){
        return this.todoRepository.getAll();
    }
    async deleteOne(id){
        return this.todoRepository.deleteOne(id);
    }
    async deleteAll(){
        return this.todoRepository.deleteAll();
    }
}

async function todoService(fastify,options){
    const {todoRepository} = fastify;
    const service = new TodoService(todoRepository);
    fastify.decorate('todoService',service);
}

module.exports = fp(todoService);