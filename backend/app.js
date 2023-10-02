import express from 'express';
import taskRouter from './routes/tasks.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/tasks',taskRouter);

app.listen(PORT, () => {
   console.log(`server running http://127.0.0.1:${PORT}`)
})
