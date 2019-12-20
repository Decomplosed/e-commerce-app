const fs = require('fs')
const crypto = require('crypto')
const util = require('util')

const scrypt = util.promisify(crypto.scrypt)

class UsersRepository {

  async create(attrs) {
    attrs.id = this.randomId()

    const salt = crypto.randomBytes(8).toString('hex')
    const buf = await scrypt(attrs.password, salt, 64)

    const records = await this.getAll()
    const record = {
      ...attrs,
      password: `${buf.toString('hex')}.${salt}`
    }
    records.push(record)

    await this.writeAll(records)

    return record
  }

  async comparePasswords(saved, supplied) {
    // const result = saved.split('.')
    // const hashed = result[0]
    // const salt = result[1]

    const [hashed, salt] = saved.split('.')
    const hashedSuppliedBuf = await scrypt(supplied, salt, 64)

    console.log(`hashedSuppliedBuf: ${hashedSuppliedBuf}`)

    return hashed === hashedSuppliedBuf.toString('hex')
  }

}

//TESTING
//
// const test = async () => {
//   const repo = new UsersRepository('users.json')

//   const user = await repo.getOneBy({ email: 'test@testing.com', password: 'password' })

//   console.log(user)
// }

// test()

module.exports = new UsersRepository('users.json')