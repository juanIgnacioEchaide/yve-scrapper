import cheerio from 'cheerio'
import { client } from "../client"
import { Sites } from "./constants"


const selector = 'div'
const scrapData = async (site: Sites) => {
    await client.get(site)
        .then((response: any) => {
            const $ = cheerio.load(response.data)
            const itemDescriptions = $(selector) 
            console.log(itemDescriptions.text())
        })
        .catch(err => console.log(err))
}

export { scrapData }