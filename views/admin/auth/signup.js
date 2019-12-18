module.exports = ({ req }) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div>
        Your id is: ${req.session.userId}
        <form method="POST">
          <input name="email" placeholder="Email" />
          <input name="password" placeholder="Password" />
          <input name="passwordConfirmation" placeholder="Password Confirmation" />
          <button>Sign Up</button>
        </form>
      </div>
    </body>
  </html>
  `
}