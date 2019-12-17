import React, { useState } from 'react';
import { func, objectOf, any } from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Documents from './profile/documents';
import Settings from './profile/settings';
import PROFILE from '../constants/profile';
import Loading from './loading';
import Error from './error';
import { authProps } from './commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(3)}px auto 0px`,
    maxWidth: theme.breakpoints.values.lg,
  },
  title: {
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 1, 2),
  },
  greeting: {
    margin: theme.spacing(3, 2, 0),
    padding: theme.spacing(1, 3),
    background: theme.palette.primary.lightRgba,
    borderRadius: theme.shape.borderRadius,
    textAlign: 'right',
  },
  content: {
    padding: theme.spacing(2, 2, 1),
  },
  left: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
  item: {
    padding: theme.spacing(1, 4),
  },
  itemText: {
    fontWeight: theme.typography.fontWeightBold,
  },
  right: {
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    width: 'calc(100% - 280px)',
  },
}));

const Profile = ({ dispatchLogout, userDetail, dispatchUpdate }) => {
  const s = useStyles();
  const { username, email } = userDetail;
  const [panel, setItem] = useState({ active: PROFILE.MENU[0].name });

  const handleSelectPanel = key => () => {
    setItem({ active: key });
  };

  return (
    <>
      <Loading />
      <Error />
      <Grid component="section" container direction="column" className={s.root}>
        <Grid component="div" item>
          <Typography variant="h5" color="primary" align="center" className={s.title}>
            {panel.active}
          </Typography>
        </Grid>
        <Grid component="div" item>
          <Typography variant="body1" color="textPrimary" className={s.greeting}>
            {PROFILE.GREETING} {username}
          </Typography>
        </Grid>
        <Grid component="div" item className={s.content}>
          <Grid
            component="section"
            container
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid component="aside" item className={s.left}>
              <List component="ul" disablePadding>
                {PROFILE.MENU.map(item => {
                  const action =
                    item.name === PROFILE.LABEL.SIGN_OUT
                      ? dispatchLogout
                      : handleSelectPanel(item.name);
                  return (
                    <ListItem
                      key={item.name}
                      divider
                      button={!!item.name}
                      component="li"
                      onClick={action}
                      selected={item.name === panel.active}
                      primary={item.name}
                      className={s.item}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText className={s.itemText}>{item.name}</ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid component="div" item className={s.right}>
              {panel.active === PROFILE.LABEL.DOCUMENTS && <Documents email={email} />}
              {panel.active === PROFILE.LABEL.SETTINGS && (
                <Settings userDetail={userDetail} onUpdateUser={dispatchUpdate} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

Profile.propTypes = {
  dispatchLogout: func.isRequired,
  dispatchUpdate: func.isRequired,
  userDetail: objectOf(any).isRequired,
};

export default connect(
  authProps.mapStateToProps,
  authProps.mapDispatchToProps,
)(Profile);
