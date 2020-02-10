import multer from 'multer';
import path from 'path';

// usado para armazenar a imagem

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // os '..' é para direcionar o caminho até uploads.
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};
