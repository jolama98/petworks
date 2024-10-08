import { dbContext } from "../db/DbContext"


class PetTagsService {


  async createPetTag(petTagData) {
    const petTag = await dbContext.PetTags.create(petTagData)
    return petTag
  }


  async getPetTagsByPetId(petId) {
    const petPosts = await dbContext.PetTags.find({ petId }).populate({ path: 'post', populate: { path: 'creator likes commentCount' } })
    return petPosts
  }

  async getPetTagsByPostId(postId) {
    const taggedPets = await dbContext.PetTags.find({ postId }).populate({ path: 'pet', populate: { path: 'owner' } })
    return taggedPets
  }
}

export const petTagsService = new PetTagsService