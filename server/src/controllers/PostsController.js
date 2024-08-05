import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import { commentsService } from "../services/CommentsService.js";


export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .get('/:postId/comments', this.getCommentsByPostId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)

  }

  async createPost(request, response, next) {
    try {
      const user = request.userInfo
      const postData = request.body
      postData.creatorId = user.id
      const newPost = await postsService.createPost(postData)
      response.send(newPost)
    }
    catch (error) {
      next(error);
      logger.log('Could not create post', error)
    }
  }

  async getAllPosts(request, response, next) {
    try {
      const posts = await postsService.getAllPosts()
      response.send(posts)
    } catch (error) {
      next(error)
    }
  }
  // async getPostByProfileId(request, response, next) {
  //   try {
  //     const postProfileId = request.params.profileId
  //     const posts = await postsService.getPostByProfileId(postProfileId)
  //     response.send(posts)
  //   } catch (error) {
  //     next(error)
  //   }

  // }
  async getCommentsByPostId(request, response, next) {
    try {
      const postId = request.query.postId
      const comments = await commentsService.getCommentsByPostId(postId)
      response.send(comments)
    } catch (error) {
      next(error)
    }
  }

}
