import { Router, Request, Response } from 'express';
import Country from '../model/Country';
import { authmiddleWaree } from '../middlewaree/authmiddlewaree';

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

router.patch('/:id', authmiddleWaree, async (req: Request, res: Response) => {
  try {
    const { rate, user, id } = req.body;
    const country = await Country.findById(req.params.id);
    const currentSightRates = country.sights.find((item) => item.id === id).rates;
    const userControl = currentSightRates.filter((element) => element.user === user);
    if (!userControl.length) {
      currentSightRates.rates.push({ rate, user });
    } else {
      currentSightRates.splice(
        currentSightRates.indexOf(currentSightRates.find((item) => item.user === user)),
        1,
        { rate, user },
      );
    }
    country.save();
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
