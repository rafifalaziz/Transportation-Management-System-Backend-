import express from "express";
const app = express();

//app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/', routes);
app.all('*', (req, res) => res.status(404).send({
  success: false,
  message: 'route tidak ditemukan',
  code: 404,
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});