import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    tagline: { type: String, minlength: 1, maxlength: 50 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

AccountSchema.virtual('pets', {
  localField: '_id',
  ref: 'Pet',
  foreignField: 'ownerId'
})

