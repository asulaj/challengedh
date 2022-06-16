import express from 'express';
import bodyParser from 'body-parser';
import messageRoutes from './routes/messages.js';

const app = express();
const PORT = 5000;


const messaggioUno = { 
    message1: 'Hello this is not the message you are looking for!'
}
app.use(bodyParser.json()); // we are using JSON in our application

app.use('/messages', messageRoutes);

app.get('/', (req, res) => {
    res.send(messaggioUno.message1)
});

app.listen(PORT, ()=> console.log(`Listening on: http://localhost:${PORT}`));