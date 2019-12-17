import React, { useState } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import LAYOUT from '../constants/layout';
import FORM from '../constants/form';
import Loading from './loading';
import Error from './error';
import { loginSchemas } from '../utils/schemas';
import { authProps } from './commonProps';

const useStyles = makeStyles(theme => ({
  item: {
    margin: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    margin: theme.spacing(3, 0),
    textAlign: 'center',
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: 'uppercase',
  },
  input: {
    minWidth: theme.spacing(30),
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      minWidth: theme.spacing(45),
    },
    height: theme.spacing(7.2),
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0, 3),
    background: theme.palette.grey[50],
  },
  inputLabel: {
    transform: `translate(${theme.spacing(2)}px, ${theme.spacing(2)}px)`,
    color: theme.palette.primary.dark,
  },
}));

const Login = ({ dispatchLogin, onRegister }) => {
  const s = useStyles();
  const initialValues = {
    [FORM.FIELD_NAMES.EMAIL]: '',
    [FORM.FIELD_NAMES.PASSWORD]: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleSwitchRegister = () => {
    onRegister(false);
  };
  const login = values => {
    const { email: identifier, password } = values;
    dispatchLogin({ identifier, password });
  };

  const handleFieldChange = setFieldValue => evt => {
    if (evt) evt.preventDefault();
    const {
      target: { name, value },
    } = evt;
    setFieldValue(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Fade in timeout={800}>
      <>
        <Error />
        <Loading />
        <Grid component="section" container direction="column" alignItems="center">
          <Grid component="div" item>
            <Grid component="div" container direction="column" className={s.form}>
              <Grid component="div" item>
                <Typography variant="h5" color="inherit" className={s.title}>
                  {FORM.LABEL.LOGIN}
                </Typography>
              </Grid>
              <Grid component="div" item className={s.item}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={login}
                  initialErrors={false}
                  initialTouched={false}
                  validateOnBlur
                  validationSchema={loginSchemas}
                >
                  {({
                    values,
                    isValid,
                    errors,
                    touched,
                    setFieldValue,
                    handleBlur,
                    handleSubmit,
                  }) => {
                    return (
                      <form onSubmit={handleSubmit}>
                        <Grid
                          component="div"
                          direction="column"
                          container
                          alignItems="center"
                        >
                          <Grid component="div" item>
                            {FORM.LOGIN.map(item => (
                              <Grid component="div" item key={item.id}>
                                <TextField
                                  id={item.id}
                                  label={item.label}
                                  type={item.type}
                                  name={item.name}
                                  margin="normal"
                                  variant="outlined"
                                  color="primary"
                                  error={errors[item.name] && touched[item.name]}
                                  helperText={errors[item.name]}
                                  onChange={handleFieldChange(setFieldValue)}
                                  onBlur={handleBlur}
                                  value={formValues[item.name] || values[item.name]}
                                  InputProps={{
                                    className: s.input,
                                  }}
                                  InputLabelProps={{
                                    className: s.inputLabel,
                                  }}
                                />
                              </Grid>
                            ))}
                          </Grid>
                          <Grid component="div" item className={s.item}>
                            <Button
                              href=""
                              variant="outlined"
                              color="primary"
                              size="large"
                              disabled={!isValid}
                              type="submit"
                            >
                              {FORM.LABEL.LOGIN}
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    );
                  }}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid component="div" container justify="center" alignItems="center">
          <Typography variant="body1" color="inherit">
            Don&apos;t have an account?
          </Typography>
          <Button href="" onClick={handleSwitchRegister} disableRipple>
            {FORM.LABEL.REGISTER}
          </Button>
        </Grid>
      </>
    </Fade>
  );
};

Login.propTypes = {
  dispatchLogin: func.isRequired,
  onRegister: func.isRequired,
};

export default connect(authProps.mapStateToProps, authProps.mapDispatchToProps)(Login);
