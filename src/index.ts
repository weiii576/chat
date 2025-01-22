import { createExpressEndpoints } from '@ts-rest/express';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { mainContract } from './contracts';
import router from './router';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

createExpressEndpoints(mainContract, router, app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
