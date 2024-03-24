import express from 'express';
import config from './config/environmentVariables';
import ApplicationRouter from './routes/applicationRouter';

const app = express();
const port = config.port;
const apiVersion = config.apiVersion;

app.get('/', (req, res) => {
	res.send('Audere est facere');
});

app.use(`/boilerplate/api/${apiVersion}`, ApplicationRouter);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
