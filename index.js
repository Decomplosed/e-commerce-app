const express = require('express')

const app = express()

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

const bodyParser = (req, res, next) => {
  if (req.method === 'POST') {
    req.on('data', data => {
      const parsed = data.toString('utf8').split('&')
      const formData = {}
      for (let pair of parsed) {
        const [key, value] = pair.split('=')
        formData[key] = value
      }
      req.body = formData
    })
  } else {
    next()
  }
}

app.post('/', (req, res) => {
  console.log(req)
  res.send('Account created')
})

app.listen(3000, () => {
  console.log('Listening')
})