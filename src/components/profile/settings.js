import React, { useState } from 'react';
import { objectOf, any, func } from 'prop-types';
import { Formik } from 'formik';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { updateSchemas } from '../../utils/schemas';
import FORM from '../../constants/form';
import LAYOUT from '../../constants/layout';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    width: '100%',
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  content: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2, 0),
    border: `${theme.spacing(0.125)}px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
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
  cta: {
    margin: theme.spacing(2, 0),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Settings = ({ userDetail, onUpdateUser }) => {
  const s = useStyles();
  const initialValues = {
    [FORM.FIELD_NAMES.USER_NAME]: userDetail[FORM.FIELD_NAMES.USER_NAME],
    [FORM.FIELD_NAMES.EMAIL]: userDetail[FORM.FIELD_NAMES.EMAIL],
    [FORM.FIELD_NAMES.PHONE]: userDetail[FORM.FIELD_NAMES.PHONE] || '',
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleUpdateInfo = values => {
    const id = get(userDetail, 'id') || get(userDetail, '_id');
    onUpdateUser({ id, ...values });
  };

  const handleFieldChange = setFieldValue => event => {
    if (event) event.preventDefault();
    const {
      target: { name, value },
    } = event;
    setFieldValue(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Grid component="section" container direction="column" className={s.root}>
      <Grid component="div" item>
        <Typography variant="h5" color="primary" className={s.title}>
          Information
        </Typography>
      </Grid>
      <Grid component="section" item className={s.content}>
        <Grid
          component="div"
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid component="div" item>
            <Formik
              initialValues={initialValues}
              onSubmit={handleUpdateInfo}
              initialErrors={false}
              initialTouched={false}
              validateOnBlur
              validationSchema={updateSchemas}
              enableReinitialize
            >
              {({
                values,
                isValid,
                errors,
                touched,
                handleSubmit,
                setFieldValue,
                handleBlur,
              }) => {
                const pristine =
                  JSON.stringify(initialValues) === JSON.stringify(formValues);
                return (
                  <form onSubmit={handleSubmit}>
                    <Grid
                      component="div"
                      container
                      direction="column"
                      alignItems="center"
                    >
                      {FORM.UPDATE.map(item => (
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
                            value={formValues[item.name] || values[item.name]}
                            onBlur={handleBlur}
                            disabled={item.disabled}
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
                    <Grid component="div" item className={s.cta}>
                      <Button
                        href=""
                        variant="outlined"
                        color="primary"
                        disabled={!isValid || pristine}
                        type="submit"
                      >
                        Save changes
                      </Button>
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Settings.propTypes = {
  userDetail: objectOf(any).isRequired,
  onUpdateUser: func.isRequired,
};

export default Settings;
