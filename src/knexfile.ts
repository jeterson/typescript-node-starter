// Update with your config settings.

export default {
    client: "pg",
    connection: {
      database: "finance",
      user: "postgres",
      password: "123456"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  

};
