import React from 'react';
import Person from '@material-ui/icons/Person';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import SignOut from '@material-ui/icons/ExitToApp';
import COLORS from './colors';

const iconStyle = {
  fill: COLORS.PRIMARY.MAIN,
};

const PROFILE = {
  TITLE: 'ACCOUNT',
  LABEL: {
    DOCUMENTS: 'Documents',
    SETTINGS: 'Account Settings',
    SIGN_OUT: 'Sign Out',
  },
  GREETING: 'Welcome!',
  get MENU() {
    return [
      { name: this.LABEL.DOCUMENTS, icon: <BusinessCenter style={iconStyle} /> },
      { name: this.LABEL.SETTINGS, icon: <Person style={iconStyle} /> },
      { name: this.LABEL.SIGN_OUT, icon: <SignOut style={iconStyle} /> },
    ];
  },
};

export default PROFILE;
