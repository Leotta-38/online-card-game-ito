require('dotenv').config()
const User = require('../models/user')
const Topic = require('../models/topic')

// async function addUser() {
//   const addedUser = await User.create('Leo2')
//   console.log(addedUser)
// }

// async function showUsers() {
//   const users = await User.findAll()
//   console.log(users)
// }

// addUser()
// showUsers()

async function showRandomTopic() {
  const randomTopic = await Topic.findRandom()
  console.log(randomTopic)
}

showRandomTopic()