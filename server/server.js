const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const pg = require('pg');

const app = express();
const PORT = 3032;

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'amiryakubu',
      password : '',
      database : 'to-do-list'
    }
  })

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    db('to-do-list').select('*').then(tasks => {
        console.log(tasks)
        res.json(tasks)
    })
})


app.delete('/del', (req, res) => {

    const { id } = req.body;

    db('to-do-list').where({id}).del().then(task => {
        console.log(task)
        const oneTask = task.task
        res.json(`Task with id ${id}: ${oneTask} is deleted`);
    })
})

app.post('/add', (req, res)=> {

const {task} = req.body;

db('to-do-list').returning('*').insert({
task
}).then(task => {
   console.log(task[0])
    res.json(task[0]);
})

})

app.listen(PORT, ()=> {
    console.log(`The server is listening at PORT ${PORT}`);
})