import User from '../models/House';
import House from '../models/House';
import User from '../models/User';

class HouseController{

  async index(req, res) {
    const { status } = req.query;

    const houses = await House.find({ status })
    return res.json(houses);

  }
   
  async store(req, res) {
    const { filename } = req.file;
    const { description, price, address, status } = req.body;
    const { user_id } = req.headers;

    const house = await House.create ({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      address,
      status,
    });
  
    return res.json({house})
  }

  async update(req, res) {
    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, address, status } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);
    
    if(String(user._id) !== String(houses.user)){
      return res.status(401).send('Não autorizado!');
    }



    const houses = await House.updateOne({ _id: house_id },{
      user: user_id,
      thumbnail: filename,
      description,
      price,
      address,
      status,
    })


    return res.send('Dados alterados com sucesso!');
  }

}

export default new HouseController();