module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const Book = sequelize.define('Book', {
        isbnNo:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      publishedOn:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
      },
      addedOn:{
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
      },
      rentedBy:{
        type:DataTypes.INTEGER,
        defaultValue:0
      }
      
    });
    return Book;
  };
  