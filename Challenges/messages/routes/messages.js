import express from 'express';
import cors from 'cors';

const router = express.Router();
router.use(cors());

const messagesLoss = [{
        comment: 'Pensavi eeeh'
    },
    {
        comment: 'Magari se gioco bendato vinci'
    },
    {
        comment: 'Ieri sera tua madre ha giocato meglio!'
    },
    {
        comment: 'Dai la prossima te la lascio'
    },
    {
        comment: 'Ero pronto a dire fortuna del principiante ma sei troppo scarso'
    }
];
const messagesDraw = [{
        comment: 'Non male'
    },
    {
        comment: 'Brava Bernharde'
    },
    {
        comment: 'Se non ti lascio un po di soddisfazione ti arrendi sicuro...'
    }, {
        comment: 'Stavo mangiando...'
    }, {
        comment: 'Mi facevo la doccia...'
    }, {
        comment: 'Bravo Fanyi'
    }, {
        comment: 'Brava Aldessantro '
    }
]
const messagesDuringMatch = [{
        comment: "Che mossa era?!"
    },
    {
        comment: "Stai facendo sul serio?!"
    },
    {
        comment: "Sei tu che hai scorreggiato?!"
    },
    {
        comment: "Ti spiezzo in due!!"
    },
    {
        comment: "Per me è no!"
    },
    {
        comment: "Oddio sto tremando!!"
    }
];

router.get('/messagesduringmatch', (req, res) => { // messages during the match!
    res.send(messagesDuringMatch)
});

router.get('/messagesdraw', (req, res) => {
    res.send(messagesDraw);
})
router.get('/messageslost', (req, res) => {
    res.send(messagesLoss);
})

export default router;