const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const usersRepo = require('./repositories/users')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cookieSession({
    keys: ['djaddasdasdfdsf']
  })
)

app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" />
        <input name="passwordConfirmation" placeholder="Password Confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `)
})

app.post('/', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body

  const existingUser = await usersRepo.getOneBy({ email })

  if (existingUser) {
    return res.send('Email in use')
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords must match')
  }

  const user = await usersRepo.create({ email, password })

  req.session.userId = user.id

  res.send('Account created')
})



app.listen(3000, () => {
  console.log('Listening')
})