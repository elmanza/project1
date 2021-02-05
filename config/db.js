const { Sequelize } = require('sequelize');
const { projectDBconn, config } = require('./index');
const debug = require('debug')('app:db');

const appDB = new Sequelize(projectDBconn.dbName, projectDBconn.dbUser, projectDBconn.dbPassword, {
    host: projectDBconn.dbHost,
    dialect: projectDBconn.dbDialect,
    logging: config.dev
  });

  class ProjectDB{
      constructor(){
          this.client = appDB;
      }
      connect(){
          if(!ProjectDB.connection){
            ProjectDB.connection = new Promise((resolve, reject) => {
                if(!this.client){
                    debug('We have a problem with the connection, please check your env');
                    console.log("We have a problem with the connection, please check your env");
                    reject('Error');
                }
                debug('Connected succesfully to Sequalize');
                console.log("Nos conectamos!")
                resolve(this.client);
            });
          }
          return this.client;
      }
  }

module.exports = new ProjectDB();