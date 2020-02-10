// metodos: index, show, update, store, destroy
/*
index: listagem de sessões
store: criar uma nova sessão, um login
show: listar uma única sessão
update: alterar alguma sessão
destroy: deletar alguma sessão
*/

import * as Yup from 'yup';
import User from '../models/User';

class SessionControler {
  // chamamos a requisição store com o async porque é uma função assíncrona.
  // criamos o email é criado dentro da chave de forma desconstruída.
  // email criado no banco de dados o await indica que ele irá esperar até fazer e depois e irá para a próxima linha usando uma verificação se existe ou não.
  // retorna para o usuário o email criado

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send('Falha na validação.');
    }

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  }
}

export default new SessionControler();
