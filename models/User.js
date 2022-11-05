module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const User = sequelize.define('User', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        defaultValue: "India"
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
      }
    });
    return User;
  };
  