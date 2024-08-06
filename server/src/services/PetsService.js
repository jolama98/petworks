import { dbContext } from "../db/DbContext.js";
import { Forbidden, NotFound } from "../utils/Errors.js";

class PetsService {

  async createPet(petData) {
    const pet = await dbContext.Pets.create(petData)
    await pet.populate('owner')
    return pet
  }

  async getPetsByOwnerId(ownerId) {
    const pets = await dbContext.Pets.find({ ownerId: ownerId })
    if (ownerId == null) throw new NotFound(`The owner with this id ${ownerId} has no pets`)
    return pets
  }

  async getRandomPet() {
    const pets = await dbContext.Pets.find().populate('owner')
    const randomPetIndex = Math.floor(Math.random() * pets.length)
    const randomPet = pets[randomPetIndex]
    return randomPet
  }
}

export const petsService = new PetsService()
