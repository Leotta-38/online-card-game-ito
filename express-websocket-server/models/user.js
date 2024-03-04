const db = require('../db')

async function findAll() {
  const sql = `SELECT * FROM users;`
  const result = await db.query(sql)
  return result.rows
}

async function create(username, uuid) {
  const sql = `
    INSERT INTO users (username, uuid) 
    VALUES ($1, $2) 
    RETURNING *;
  `
  const result = await db.query(sql, [username, uuid])
  return result.rows[0]
}

// function destroy(id) {
//   const sql = `
//     DELETE FROM dishes 
//     WHERE id = $1 
//     RETURNING *;
//   `
//   return db.query(sql, [id])
//     .then(result => result.rows[0])
// }

module.exports = {
  findAll,
  create,
  // destroy,
}