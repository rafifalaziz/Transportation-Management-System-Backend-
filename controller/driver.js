const models = require("../models");

const {DRIVER} = models.init;
const {authenticate} = require("../helper/auth-helper")

const addDriver = async (req, res) => {
    try {
        const driver = await DRIVER.create({...req.body});
        res.status(200).send({
            success: true,
            message: 'Berhasil membuat driver',
            code: 200,
            driver,
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Gagal membuat driver',
            code: 500,
            error,
        });
    }
}

const getDrivers = async (req, res) => {
    const token = req.cookies.token

    const user = await authenticate(token)

    return res.send(user)
}


const editDriver = async (req, res) => {
  try {
      const driver = await DRIVER.update({...req.body}, {where: {id: req.params.id}});
      res.status(200).send({
          success: true,
          message: 'Berhasil mengedit driver',
          code: 200,
          driver,
      }); 
  } catch (error) {
      console.log(error);
      res.status(500).send({
          success: false,
          message: 'Gagal mengedit deriver',
          code: 500,
          error,
      });
  }
}
module.exports = {
    addDriver,
    getDrivers,
    editDriver
}