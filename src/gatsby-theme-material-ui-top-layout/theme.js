import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import COLORS from '../constants/colors';

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      'Roboto Condensed',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
    ].join(','),
    fontSize: 16,
    h6: {
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      default: COLORS.PAPER,
      paper: '#FFFFF4',
    },
    primary: {
      light: COLORS.PRIMARY.LIGHT,
      lightRgba: COLORS.PRIMARY.LIGHT_RGB,
      main: COLORS.PRIMARY.MAIN,
      dark: COLORS.PRIMARY.DARK,
      darkRgba: COLORS.PRIMARY.DARK_RGB,
      contrastText: COLORS.PRIMARY.CONTRAST,
    },
    secondary: {
      lighter: '#FFE674',
      main: '#FFE262',
      dark: '#F3C700',
      contrastText: '#93874E',
    },
    text: {
      disabled: grey[300],
      primary: COLORS.PRIMARY.DARK,
      secondary: grey[500],
    },
    action: {
      active: COLORS.PRIMARY.DARK_RGB,
      selected: COLORS.PRIMARY.MAIN_RGB,
      hover: COLORS.PRIMARY.LIGHT_RGB,
    },
  },
  shape: {
    borderRadius: '5px',
  },
});

const responsiveFontTheme = responsiveFontSizes(theme, {
  factor: 1.5,
});

export default responsiveFontTheme;
