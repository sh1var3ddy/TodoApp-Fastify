async function getAllTodos(req,res){
    // console.log(this);
    const {todoService} = this;
    const response = await todoService.getAll();
    
    return res.status(200).send({response});
}

async function createTodo(req,res){
    const {todoService} = this;
    const response  = await todoService.insertOne(req.body.todotext)
    return res.status(201).send({response});

}

async function getTodo(req,res){
    const {todoService} = this;
    const response = await todoService.getTodo(req.params.id);
    return res.status(200).send({response});
}

module.exports = {
    getAllTodos,
    createTodo,
    getTodo
};
