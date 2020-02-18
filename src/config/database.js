require('../bootstrap.js');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_URL || 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  storage: './src/__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
