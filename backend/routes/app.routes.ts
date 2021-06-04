import { Router, Request, Response } from 'express';
import Country from '../model/Country';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const country = await Country.findById(req.params.id);
    res.json(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, capital, sights } = req.body;
    const country = new Country({ name, capital, sights });
    await country.save();
    res.status(201).json({ message: 'Added' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
