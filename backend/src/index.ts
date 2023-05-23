import app from './app'
import config from './config'
import mongoose from 'mongoose' 

mongoose
	.connect(config.databaseUrl)
	.then(async() => {
        app.listen(config.port, ()=>{
            console.log(`Listening on localhost:${config.port}`)
        })
	})