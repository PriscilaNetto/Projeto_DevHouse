import User from '../models/House';

class HouseController{

  async store(req, res) {
    console.log(req.body);

    console.log(req.file);
    
    

    return res.json({message: 'ok'})
  }

}













export default new HouseController();