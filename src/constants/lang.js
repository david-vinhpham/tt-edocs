import React from 'react';
import Vietnamese from '../images/vietnamese.svg';
import English from '../images/english.svg';

const icon = {
  width: '24px',
  height: '24px',
  marginRight: '12px',
};

const LANG = {
  VN: 'Vietnamese',
  EN: 'English',
  get LIST() {
    return [this.VN, this.EN];
  },
  get ICONS() {
    return {
      [this.VN]: <Vietnamese style={icon} />,
      [this.EN]: <English style={icon} />,
    };
  },
};

export default LANG;
