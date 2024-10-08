import { petsService } from "../services/PetsService.js"
import { postsService } from "../services/PostsService.js"
import { profileService } from '../services/ProfileService.js'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:profileId', this.getProfile)
      .get('/:profileId/posts', this.getProfilePosts)
      .get('/:ownerId/pets', this.getPetsByOwnerId)
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.profileId)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getProfilePosts(request, response, next) {
    try {
      const profileId = request.params.profileId
      const profilePosts = await postsService.getProfilePosts(profileId)
      response.send(profilePosts)
    } catch (error) {
      next(error)
    }
  }

  async getPetsByOwnerId(request, response, next) {
    try {
      const ownerId = request.params.ownerId
      const pets = await petsService.getPetsByOwnerId(ownerId)

      response.send(pets)
    } catch (error) {
      next(error)
    }
  }
}
