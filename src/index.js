const {PORT}= require("./config/serverConfig")

const fastify = require('fastify')({
    logger:true
});

const app = require('./app');
fastify.register(app);

// console.log(PORT);
fastify.listen({port:PORT},(err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    // console.log(PORT);
    console.log(`Server is up on ${PORT}`);
});