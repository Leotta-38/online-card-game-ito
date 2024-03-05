const db = require('../db')

async function findAllOrderById() {
  const sql = `SELECT * FROM users ORDER BY id;`
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

async function updateResponse(response, uuid) {
  const sql = `
    UPDATE users
    SET 
      response = $1 
    WHERE uuid = $2 
    RETURNING *;
  `

  const result = await db.query(sql, [response, uuid])
  return result.rows[0]
}

async function updateOrderid(orderid, id) {
  const sql = `
    UPDATE users
    SET 
      orderid = $1 
    WHERE id = $2 
    RETURNING *;
  `

  const result = await db.query(sql, [orderid, id])
  return result.rows[0]
}

async function destroyOrderid() {
  const sql = `
    UPDATE users
    SET 
      orderid = NULL 
    RETURNING *;
  `

  const result = await db.query(sql)
  return result.rows
}

async function changeNumber(number, id) {
  const sql = `
    UPDATE users
    SET 
      number = $1
    WHERE id = $2 
    RETURNING *;
  `

  const result = await db.query(sql, [number, id])
  return result.rows
}

async function destroyResponse() {
  const sql = `
    UPDATE users
    SET 
      response = NULL 
    RETURNING *;
  `

  const result = await db.query(sql)
  return result.rows
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
  findAllOrderById,
  create,
  updateResponse,
  updateOrderid,
  destroyOrderid,
  changeNumber,
  destroyResponse
  // destroy,
}