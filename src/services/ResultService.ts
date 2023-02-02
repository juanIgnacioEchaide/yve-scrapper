import { Response } from 'express'
import { Sites } from '../utils/constants'
import { scrapData } from '../utils/helpers'

const ResultService = (res: Response) => {
    const data = scrapData(Sites.markovaPantalones)
    return res.send(data.toString())
}

export { ResultService }