import mongoose, { 
  Schema 
} from 'mongoose';

const ItemSchema = new Schema({
  location: {
    type: String,
    required: "Please enter the item's location"
  },
  category: {
    type: String
  },
  contact: {
    name: {
      type: String,
      required: "Please enter the contact's name"
    },
    phone: {
      type: Number,
      required: "Please enter the contact's phone number"
    },
  },
  description: {
    type: String,
    required: "Please enter the item's description"
  },
  price: {
    type: Number,
    required: "Please enter the item's price"
  }
}, { versionKey: false });

export default mongoose.model('Items', ItemSchema);