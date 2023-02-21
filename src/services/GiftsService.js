import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"
class GiftsService {
 
  async get_gifts(){
    try {
      const res = await api.get('')
      logger.log("GOTTEN GIFTS :)", res.data)
      AppState.gifts = res.data.map(g => new Gift(g))
      logger.log(AppState.gifts, "TRANSFORMED GIFTS I HOPE")
    } catch (error) {
      Pop.error(error)
    }
   
  }
}

export const giftsService = new GiftsService()