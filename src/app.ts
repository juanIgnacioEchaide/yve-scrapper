import express, { Request, Response } from 'express'
import http from 'http'
import { ResultsHandler } from './handlers/ResultsHandler'
import { Route } from './utils/constants'

const app = express()
const port = 8000
const server = http.createServer(app)

app.get(Route.results, (req: Request, res: Response) => {
    ResultsHandler(req, res)
})

server.listen(port, () => { console.log('hello world!') })
