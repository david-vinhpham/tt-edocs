import React, { useState } from 'react';
import { string, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import LAYOUT from '../constants/layout';
import LANG from '../constants/lang';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  title: {
    margin: theme.spacing(1, 0),
    textTransform: 'uppercase',
  },
  input: {
    minWidth: theme.spacing(20),
    display: 'flex',
    alignItems: 'center',
    outline: 'unset',
  },
  control: {
    background: theme.palette.grey[50],
    borderRadius: theme.shape.borderRadius,
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

const LanguageBox = ({ label, name, onChange }) => {
  const s = useStyles();
  const [item, setItem] = useState(LANG.LIST[1]);

  const handleChange = evt => {
    if (evt) evt.preventDefault();
    const {
      target: { value },
    } = evt;
    setItem(value);
    onChange(name, value);
  };

  return (
    <Grid component="section" container direction="column">
      <Grid component="div" item>
        <Typography variant="body2" color="textSecondary" className={s.title}>
          {label}
        </Typography>
      </Grid>
      <Grid component="div" item>
        <FormControl
          component="div"
          variant="outlined"
          color="primary"
          hiddenLabel
          className={s.control}
        >
          <Select
            id={`select-${label}`}
            labelId={label}
            value={item}
            margin="dense"
            onChange={handleChange}
            inputProps={{
              className: s.input,
            }}
          >
            {LANG.LIST.map(option => (
              <MenuItem
                key={option}
                button={!!option}
                value={option}
                component="li"
                className={s.item}
              >
                {LANG.ICONS[option]} {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

LanguageBox.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
};

export default LanguageBox;
