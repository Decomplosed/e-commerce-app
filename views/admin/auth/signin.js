const layout = require('../layout')

const getError = (errors, prop) => {

}

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div>
        <form method="POST">
          <input name="email" placeholder="Email" />
          <input name="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    `
  })
}