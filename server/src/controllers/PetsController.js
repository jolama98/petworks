import { Auth0Provider } from "@bcwdev/auth0provider";
import { petsService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class PetController extends BaseController {
  constructor() {
    super('api/pets')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPet)
  }

  async createPet(request, response, next) {
    try {
      const user = request.userInfo
      const petData = request.body
      petData.ownerId = user.id
      const newPet = await petsService.createPet(petData)
      response.send(newPet)
    }
    catch (error) {
      next(error);
      logger.log('Could not create pet', error)
    }
  }


}