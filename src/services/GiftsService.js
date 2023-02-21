import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
class GiftsService {
 
  async get_gifts(){
    const res = await api.get('')
    logger.log("GOTTEN GIFTS :)", res.data)
  }
}

export const giftsService = new GiftsService()