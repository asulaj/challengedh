import express from 'express';
import cors from 'cors';

const router = express.Router();
router.use(cors());
const messagesDuringMatch = [
    {
        comment :"Che mossa era?!" 
    },
     {
        comment :"Stai facendo sul serio?!" 
    },
    {
        comment :"Sei tu che hai scorreggiato?!" 
    },
    {
        comment :"Ti spiezzo in due!!" 
    },
      {
        comment :"Per me è no!"
    },
    {
        comment: "Oddio sto tremando!!"
    }  
];

router.get('/messagesdm',(req, res) => {   // messages during the match!
    res.send(messagesDuringMatch)
});

export default router;