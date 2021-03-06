import logger from 'winston';

export default {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Vris', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: false,
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: false,
      },
      choice: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: false,
      },
      response: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      weight: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      }
    }).catch(error => logger.error(error));
  },

  down(queryInterface) {
    return queryInterface.dropTable('Vris')
      .catch(error => logger.error(error));
  }
};
