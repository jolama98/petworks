import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { likesService } from "../services/LikesService.js";
import { logger } from "../utils/Logger.js";


export class LikesController extends BaseController {
  constructor() {
    super('api/likes')
    this.router
      .get('', this.getLikesByPostId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.likePost)
      .delete('/:likeId', this.unlikePost)
  }

  async likePost(request, response, next) {
    try {
      const user = request.userInfo
      request.body.isLike = true
      const likeData = request.body
      console.log(likeData)
      likeData.accountId = user.id
      const newTicket = await likesService.likePost(likeData)
      response.send(newTicket)
    } catch (error) {
      next(error)
    }
  }

  async unlikePost(request, response, next) {
    try {
      const user = request.userInfo
      request.body.isLike = false
      request.body.likeId = request.params.likeId
      const likeData = request.body
      likeData.accountId = user.id
      const likeToDelete = await likesService.unlikePost(likeData)
      response.send(likeToDelete)
    } catch (error) {
      next(error)
    }
  }

  async getLikesByPostId(request, response, next) {
    try {
      const postId = request.body
      const postLikes = await likesService.getLikesByPostId(postId)
      response.send(postLikes)
    } catch (error) {
      next(error)
    }
  }
}
