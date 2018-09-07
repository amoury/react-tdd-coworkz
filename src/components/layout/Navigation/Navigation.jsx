import React, { Component } from 'react';
import styled from 'styled-components';

import { Typography, Toolbar, Switch, IconButton, Tooltip, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const NavigationWrapper = styled.div`
  flex-grow: 1;
`;

const typographyStyle = {
  flexGrow: 1
};

const menuButtonStyle = {
  marginLeft: -12,
  marginRight: 20
};


class Navigation extends Component {
  state = {
    switchOn: false
  };

  handleSwitch = () => {
    this.setState({ switchOn: !this.state.switchOn });
    this.props.toggleMap();
  }

  render () {
    

    return (
      <NavigationWrapper>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={menuButtonStyle} color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" style={typographyStyle}>
              Home
            </Typography>
            
            <Tooltip title="Show Map" placement="left">
              <Switch checked={this.state.switchOn} value="switchOn" onChange={this.handleSwitch}/>
            </Tooltip>
            <AccountCircle />
          </Toolbar>
        </AppBar>
      </NavigationWrapper>
      // </div>
    );
  }
}

// Navigation.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Navigation;