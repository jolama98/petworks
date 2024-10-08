import { Pet } from "./Pet"


export class Account {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    /** @type {Pet[]} */
    this.pets = data.pets
    this.tagline = data.tagline
  }
}
