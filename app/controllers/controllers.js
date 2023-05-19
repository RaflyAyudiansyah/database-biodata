const db = require('../models/index.js');
const Data_diri = db.data_diri;
const Op = db.Sequelize.Op;
// Create bio method
exports.create = (req, res) => {};
// Retrieve all  bio from the database.
exports.findAll = (req, res) => {};
// Find a single  bio with an id
exports.findOne = (req, res) => {};
// Delete a bio with an id
exports.delete = (req, res) => {};

// Create bio method
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nama) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create bio object
  const data_diri = {
    nama: req.body.nama,
    tempat_lahir: req.body.tempat,
    tanggal_lahir: req.body.tanggal,
    alamat: req.body.alamat,
  };

  console.log(data_diri);
  // Save bio to database
  Data_diri.create(data_diri)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error occurred while inserting bio.",
      });
    });
};

// Retrieve all data from the database.
exports.findAll = (req, res) => {
     Data_diri.findAll()
          .then(data => {
             res.send(data);
         })
          .catch(err => {
             res.status(500).send({
                 message: err.message || "Error while retrieving books."
             });
         });
};

// Find a data with an id
exports.findOne = (req, res) => {
  Data_diri.findOne({
         where: {
              id: req.params. id
          }
      })
      .then( data => {
          res. send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Error while finding book."
          });
      });
};

exports.delete = (req, res) => {
  Data_diri.destroy ({
    where: {
      id: req.params.id
    }
  })
  .then (
    res.send({
      message: "Success deleted data with id= " + req.params.id + '!',
    })
  )
  .catch(err => {
    res.status(500).send({
      message: "Could not delete data with id= " + req.params.id + '!'
    });
  });
};

exports.update = (req, res) => {
  db.sequelize.query (`UPDATE data_diri
  SET nama= '${req.body.nama}', tempat_lahir='${req.body.tempat}', tanggal_lahir='${req.body.tanggal}', alamat='${req.body.alamat}'
  WHERE id = ${req.params.id};`, {
          type: db.sequelize.QueryTypes.UPDATE
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Error update data"
    });
  });
};