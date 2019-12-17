import React, { useState, useEffect } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import LAYOUT from '../constants/layout';
import FORM from '../constants/form';
import Loading from './loading';
import Error from './error';
import { registerSchemas } from '../utils/schemas';
import { register } from '../utils/email';
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

const Register = ({ dispatchRegister, dispatchSendEmailRegister, onLogin, isAuth }) => {
  const s = useStyles();

  const initialValues = {
    [FORM.FIELD_NAMES.USER_NAME]: '',
    [FORM.FIELD_NAMES.EMAIL]: '',
    [FORM.FIELD_NAMES.PASSWORD]: '',
    [FORM.FIELD_NAMES.CONFIRM_PASSWORD]: '',
    [FORM.FIELD_NAMES.TERMS_CONDITIONS]: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const handleSwitchLogin = () => {
    onLogin(true);
  };
  const handleFieldChange = setFieldValue => event => {
    if (event) event.preventDefault();
    const {
      target: { name, value },
    } = event;
    setFieldValue(name, value);
    setFormValues({ ...formValues, [name]: value });
  };
  const handleRegister = values => {
    const { username, email, password } = values;
    dispatchRegister({ username, email, password });
  };

  useEffect(() => {
    if (isAuth) {
      const { email } = formValues;
      const content = register(email);
      dispatchSendEmailRegister(content);
    }
  }, [isAuth]);

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
                  {FORM.LABEL.REGISTRATION}
                </Typography>
              </Grid>
              <Grid component="div" item className={s.item}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleRegister}
                  enableReinitialize
                  initialErrors={false}
                  initialTouched={false}
                  validateOnBlur
                  validationSchema={registerSchemas}
                >
                  {({
                    values,
                    isValid,
                    errors,
                    touched,
                    setFieldValue,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => {
                    return (
                      <form onSubmit={handleSubmit}>
                        <Grid
                          component="section"
                          direction="column"
                          container
                          alignItems="center"
                        >
                          {FORM.REGISTER.map(item => (
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
                                helperText={touched[item.name] && errors[item.name]}
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
                          <Grid component="div" item>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name={FORM.FIELD_NAMES.TERMS_CONDITIONS}
                                  color="primary"
                                  onChange={handleChange}
                                  value={values[FORM.FIELD_NAMES.TERMS_CONDITIONS]}
                                  checked={values[FORM.FIELD_NAMES.TERMS_CONDITIONS]}
                                />
                              }
                              label={FORM.LABEL.TERMS_CONDITIONS}
                            />
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
                              {FORM.LABEL.REGISTER}
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
            Already have an account?
          </Typography>
          <Button href="" onClick={handleSwitchLogin}>
            Login
          </Button>
        </Grid>
      </>
    </Fade>
  );
};

Register.propTypes = {
  dispatchRegister: func.isRequired,
  dispatchSendEmailRegister: func.isRequired,
  onLogin: func.isRequired,
  isAuth: bool,
};

Register.defaultProps = {
  isAuth: false,
};

export default connect(
  authProps.mapStateToProps,
  authProps.mapDispatchToProps,
)(Register);
