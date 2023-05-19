module.exports = (sequelize, Sequelize) => {
  const data_Diri = sequelize.define("data_diri", {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tempat_lahir: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: Sequelize.DATEONLY,
    },
    alamat: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true
  });

  return data_Diri;
};
