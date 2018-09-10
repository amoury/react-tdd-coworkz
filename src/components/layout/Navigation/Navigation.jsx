import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const navLinkStyle = {
  textDecoration: "none",
  color: "inherit"
}


class Navigation extends Component {
  state = {
    switchOn: false
  };

  static propTypes = {
    toggleMap: PropTypes.func
  };

  handleSwitch = () => {
    this.setState({ switchOn: !this.state.switchOn });
    this.props.toggleMap();
  }

  render () {
    
    return (
      <NavigationWrapper style={{ position: 'sticky', top: "0", zIndex: '10' }}> 
        <AppBar position="static">
          <Toolbar>
            <IconButton style={menuButtonStyle} color="inherit" aria-label="Menu">
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" style={typographyStyle}>
              <NavLink to="/" style={navLinkStyle}>Home</NavLink>
            </Typography>
            
            <Tooltip title="Show Map" placement="left">
              <Switch checked={this.state.switchOn} value="switchOn" onChange={this.handleSwitch}/>
            </Tooltip>
            <AccountCircle />
          </Toolbar>
        </AppBar>
      </NavigationWrapper>
    );
  }
}

// Navigation.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Navigation;