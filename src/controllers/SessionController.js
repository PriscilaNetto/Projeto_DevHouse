
//metodos: index, show, update, store, destroy 
/*
index: listagem de sessões
store: criar uma nova sessão, um login
show: listar uma única sessão
update: alterar alguma sessão
destroy: deletar alguma sessão
*/

import User from '../models/User';

class SessionControler {

  async store(req, res){ // chamamos a requisição store com o async porque é uma função assíncrona.
    const { email } = req.body; //criamos o email é criado dentro da chave de forma desconstruída. 

    let user = await User.findOne({ email })
      if (!user){
        user = await User.create({ email }) //email criado no banco de dados o await indica que ele irá esperar até fazer e depois e irá para a próxima linha 
      }
       // retorna para o usuário o email criado
      return res.json(user);

  }

}

export default new SessionControler();

