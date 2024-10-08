import { reactive } from 'vue'
import PetOfTheDay from "./components/PetOfTheDay.vue"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,

  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {import('./models/Post.js').Post[]} user info from the database*/
  posts: [],

  /** @type {import('./models/Post.js').Post[]} user info from the database*/
  activeProfilePosts: [],

  /** @type {import('./models/Profile.js').Profile} user info from the database*/
  activeProfile: null,

  /** @type {import('./models/Pet.js').Pet[]} user info from the database*/
  pets: [],

  /** @type {import('./models/Pet.js').Pet} user info from the database*/
  activePets: null,

  /** @type {import('./models/Pet.js').Pet[]} user info from the database*/
  activeProfilePets: [],

  /** @type {import('./models/Comment.js').Comment[]} user info from the database*/
  activePostComments: [],

  /** @type {import('./models/PetTag').TaggedPet[]} user info from the database*/
  activePostTaggedPets: [],

  /** @type {import('./models/Post.js').Post} user info from the database*/
  activePost: null,

  /** @type {import('./models/Pet.js').Pet} user info from the database*/
  petOfTheDay: null,

  /** @type {import('./models/Like.js').PostLikerProfile[]} user info from the database*/
  postLikeProfiles: [],

  searchingFor: null,

  /** @type {import('./models/PetTag.js').PetPost[]} an array of posts connected to a pet*/
  petPosts: []
})
