import React, { useState, useEffect } from 'react';
import { arrayOf, any, func, string } from 'prop-types';
import get from 'lodash/get';
import moment from 'moment';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import FindInPage from '@material-ui/icons/FindInPage';
import NAVIGATION from '../../constants/navBar';
import { docReadyProps } from '../commonProps';
import Pdf from '../../images/pdf.svg';
import Word from '../../images/word.svg';
import PromptModal from '../promptModal';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    width: '100%',
  },
  content: {
    margin: theme.spacing(3, 0, 2),
    width: '100%',
    maxHeight: '100vh',
    overflow: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
  contentDocs: {
    border: `${theme.spacing(0.125)}px solid ${theme.palette.grey[300]}`,
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  listText: {
    flex: '1 !important',
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: 'justify',
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    cursor: 'pointer',
    margin: theme.spacing(0, 1),
  },
  iconWord: {
    fill: indigo[800],
  },
  iconPdf: {
    fill: red[800],
  },
}));

const Documents = ({ completeData, dispatchFetchCompleteData, email }) => {
  const s = useStyles();
  const [openPrompt, setOpenPrompt] = useState(false);

  useEffect(() => {
    dispatchFetchCompleteData(email);
  }, []);

  const openModal = () => {
    setOpenPrompt(true);
  };
  const closeModal = () => {
    setOpenPrompt(false);
  };
  const handleSelectDocuments = () => {
    navigate(NAVIGATION.URL.DOCUMENTS.ALL);
  };
  const docsCount = completeData.length;
  const title =
    docsCount > 0
      ? `${docsCount} document${docsCount > 1 ? 's' : ''} completed`
      : 'You do not yet have any completed documents.';
  const contentStyle = docsCount > 0 ? `${s.content} ${s.contentDocs}` : s.content;

  return (
    <>
      <PromptModal
        isOpen={openPrompt}
        onClose={closeModal}
        title="Download Document"
        message="Coming soon ..."
      />
      <Grid
        component="section"
        container
        direction="column"
        justify="flex-start"
        className={s.root}
      >
        <Grid component="div" item>
          <Typography variant="h5" color="textPrimary" className={s.title}>
            {title}
          </Typography>
        </Grid>
        <Grid component="div" item className={contentStyle}>
          {docsCount < 1 && (
            <Button
              href=""
              component="button"
              variant="outlined"
              color="primary"
              disableFocusRipple
              disableRipple
              size="small"
              startIcon={<FindInPage />}
              onClick={handleSelectDocuments}
            >
              Choose a document
            </Button>
          )}
          {docsCount > 0 && (
            <List component="ul" disablePadding>
              {completeData.map(item => {
                const created = get(item, 'createdAt');
                const docName = get(item, 'document_name');
                return (
                  <ListItem component="li" divider dense key={Math.random()}>
                    <ListItemText
                      primary={moment(created).format('DD/MM/YYYY')}
                      className={s.listText}
                    />
                    <ListItemText primary={docName} className={s.listText} />
                    <ListItemText />
                    <ListItemIcon onClick={openModal}>
                      <>
                        <Pdf className={`${s.icon} ${s.iconPdf}`} /> PDF
                      </>
                    </ListItemIcon>
                    <ListItemText />
                    <ListItemIcon onClick={openModal}>
                      <>
                        <Word className={`${s.icon} ${s.iconWord}`} /> Word
                      </>
                    </ListItemIcon>
                    <ListItemText />
                  </ListItem>
                );
              })}
            </List>
          )}
        </Grid>
      </Grid>
    </>
  );
};

Documents.propTypes = {
  completeData: arrayOf(any).isRequired,
  dispatchFetchCompleteData: func.isRequired,
  email: string.isRequired,
};

export default connect(
  docReadyProps.mapStateToProps,
  docReadyProps.mapDispatchToProps,
)(Documents);
