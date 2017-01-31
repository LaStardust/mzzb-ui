import React, {PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Ajax from "./components/Ajax";

class AppActionBar extends React.Component {

  static propTypes = {
    handleNeedLogin: PropTypes.func.isRequired,
  };

  static contextTypes = {
    isLogged: PropTypes.bool.isRequired,
    handleChangeLogin: PropTypes.func.isRequired,
    handleChangeAlert: PropTypes.func.isRequired,
  };

  render() {
    const {handleNeedLogin} = this.props;
    const {isLogged, handleChangeLogin, handleChangeAlert} = this.context;

    const loginElement = (
      <FlatButton
        label="Login"
        onTouchTap={handleNeedLogin}
      />
    );

    const handleLogout = () => {
      Ajax.session.logout()
        .then(() => {
          handleChangeLogin()
        })
    };
    const handleNotSupport = () => {
      handleChangeAlert(true, 'Operation not supported');
    };
    const iconButton = <IconButton><MoreVertIcon /></IconButton>;
    const origin = {horizontal: 'right', vertical: 'top'};
    const loggedElement = (
      <IconMenu
        iconButtonElement={iconButton}
        targetOrigin={origin}
        anchorOrigin={origin}
      >
        <MenuItem primaryText="Refresh" onTouchTap={handleNotSupport}/>
        <MenuItem primaryText="Help" onTouchTap={handleNotSupport}/>
        <MenuItem primaryText="Sign out" onTouchTap={handleLogout}/>
      </IconMenu>
    );
    return (
      <AppBar
        title="Home"
        iconElementRight={isLogged ? loggedElement : loginElement}
      />
    )
  }
}

export default AppActionBar;
