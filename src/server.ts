import * as model from './model.js';
import express from 'express';
import cors from 'cors';
import logger from './logger.js';
import * as config from './config.js';
import { INewFlashcard } from './interfaces.js';

const app = express();
app.use(cors());
app.use(logger);
app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(model.getApiInstructions());
});


app.get('/test', async (req: express.Request, res: express.Response) => {
	const result = await model.getTest();
	console.log(result)
	res.send(result);
});


app.listen(config.port, () => {
	console.log(`listening on port http://localhost:${config.port}`);
});