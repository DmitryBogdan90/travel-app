import cors from 'cors';
import express from 'express';
import formData from 'express-form-data';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(formData.parse());
app.use('/countries', require('./routes/app.routes'));
app.use('/users', require('./routes/user.routes'));
app.use('/avatar', require('./routes/avatar.routes'));
app.get('/', (req: any, res: any) => {
  res.send('Travel app backend')
});

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://travel-app:travel-app@cluster0.sicqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    );

    app.listen(PORT, () => global.console.log(`Server started on port ${PORT}`));
  } catch (error) {
    global.console.log(error);
  }
};

start();
