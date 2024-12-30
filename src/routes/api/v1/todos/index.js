const {getAllTodos, getTodo} = require("../../../../controllers/todoController");
const {createTodo } = require("../../../../controllers/todoController");
async function todoRouter(fastify,options){
    fastify.get('/',getAllTodos);
    fastify.post('/',createTodo);
    fastify.get('/:id',getTodo)
}

module.exports = todoRouter;