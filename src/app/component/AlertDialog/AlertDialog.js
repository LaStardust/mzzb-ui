import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

function AlertDialog({alert, action}) {
  const {isOpened, message} = alert
  const {doHideAlert} = action

  return (
    <Dialog
      open={isOpened}
      style={{zIndex: 2000}}
      actions={[
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={doHideAlert}
        />,
        <FlatButton
          label="Discard"
          primary={true}
          onTouchTap={doHideAlert}
        />,
      ]}
      onRequestClose={doHideAlert}
    >
      {message}
    </Dialog>
  )
}

export default AlertDialog
