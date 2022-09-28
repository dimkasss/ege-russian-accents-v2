import express, { application } from 'express';
import cors from 'cors';
import { handleWords } from './controllers/words.js';
import { createDict } from './createDict.js'; 

const PORT = 3000;
const [dict, dict_length] = createDict();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/words', handleWords(dict, dict_length))

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
});