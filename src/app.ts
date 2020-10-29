import express, {Request, Response} from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import routes from './routes/route_todo'

const app = express()
const PORT = 8080

const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME
} = process.env

const url = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.pymgz.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

app.use(cors())

app.use(routes)

// mongoose connect
mongoose.set('useFindAndModify', true)
mongoose.connect(url, option).then(() => {
  app.listen(PORT, () => {
    console.info(`App is listening at http://localhost:${PORT}`)
  })
}).catch(error => { throw error })

