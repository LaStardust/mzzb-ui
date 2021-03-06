import React from 'react'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

function LoginDialog({login, action}) {
  const {isOpened} = login
  const {doHideLogin, doSubmit} = action

  function handleSubmit() {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    doSubmit(username, password)
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <Dialog
      open={isOpened}
      onRequestClose={doHideLogin}
      title="Login Form"
      actions={[
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={doHideLogin}
        />,
        <FlatButton
          label="Login"
          primary={true}
          keyboardFocused={true}
          onTouchTap={handleSubmit}
        />,
      ]}
    >
      <TextField
        id="username"
        hintText="Enter Username"
        floatingLabelText="Username"
      /><br />
      <TextField
        id="password"
        type="password"
        hintText="Enter Password"
        floatingLabelText="Password"
        onKeyUp={handleEnter}
      /><br />
    </Dialog>
  )
}

export default LoginDialog
