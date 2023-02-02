import { Request, Response } from 'express'
import { ResultService } from '../services/ResultService'

const ResultsHandler = async (req: Request, res: Response) => {

/*     if(!req.params){
        throw new Error("params are missing")
    }
 */
    const serviceRes = await ResultService(res)

/*     if (!serviceRes) {
        throw new Error("service failed")
    } */

    return serviceRes
}

export { ResultsHandler }