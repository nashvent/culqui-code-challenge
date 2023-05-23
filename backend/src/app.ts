import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middleware/errorHandler';
import token from './routes/token.routes';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: '*'
}))
app.use(helmet())
app.use(morgan('tiny'))

app.use('/token', token)

app.use('/', (req, res) => {
    res.send({
        message: 'Hello Culqui!'
    })
})

app.use(errorHandler)

export default app