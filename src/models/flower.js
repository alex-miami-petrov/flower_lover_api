import mongoose from 'mongoose';

const flowerSchema = new mongoose.Schema({
  name: { type: String, required: false },
  price: { Number, required: false },
  occasion: { type: String, required: false },
  style: { type: String, required: false },
  recipient: { type: String, required: false },
});

const Flower = mongoose.model('Flower', flowerSchema);
