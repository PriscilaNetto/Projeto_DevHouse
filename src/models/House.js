import { Schema, model } from 'mongoose';
import User from './User';

const HouseSchema = new Schema ({
  thumbnail: String, // aqui vai ficar o caminho de onde a imagem está
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user:{
    type: Schema.Types.ObjectId, //para buscar pelo id qual é o usuário 
    ref: 'User'
  }
});

export default model('House', HouseSchema)
