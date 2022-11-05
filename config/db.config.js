

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD:process.env.PASSWORD, // update the db password here
    DB:process.env.DB, //add database name here
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };