let Sequelize = require("sequelize");
let db = new Sequelize(
    'postgres://sgnswvlxovqxwq:2f9d82bb5e4b0da77368bc34a897311794301bdcbe1259f2e52ca025854985b6@ec2-34-230-167-186.compute-1.amazonaws.com:5432/da3c25bitgu0hc',
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    });
module.exports = db;
