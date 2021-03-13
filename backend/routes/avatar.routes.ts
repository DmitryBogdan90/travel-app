import cloudinary from 'cloudinary';
import { Router, Request, Response } from 'express';

const router = Router();

export interface RequestFile {
  key: string;
  path: string;
  mimetype: string;
  originalname: string;
  size: number;
}

router.post('/create', async (req: Request & { files: RequestFile[] }, res: Response) => {
  try {
    cloudinary.v2.config({
      cloud_name: 'dvkursvph',
      api_key: '781446592633512',
      api_secret: 'awtZhfR_Kr287fBR_9d-y3Cg2ug',
    });

    const { path } = Object.values(req.files)[0];
    cloudinary.v2.uploader.upload(path).then((image) => res.json(image));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
