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
}, {

  toJSON: {
    virtuals: true  //colocar a variável virtuals junto com a requisição quando ela for feita
  }


});

HouseSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`; //criação de um campo virtual para acessar a url e não irá armazenar a imagem no banco
});

export default model('House', HouseSchema)
