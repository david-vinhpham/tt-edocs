import React, { useEffect } from 'react';
import { string, objectOf, any, func } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { Link, navigate } from 'gatsby';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Create from '@material-ui/icons/Create';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import Version from '../../images/version.svg';
import Formats from '../../images/formats.svg';
import Price from '../../images/price.svg';
import Pages from '../../images/page.svg';
import Pdf from '../../images/pdf.svg';
import Word from '../../images/word.svg';
import NAVIGATION from '../../constants/navBar';
import TIME from '../../constants/time';
import URL from '../../constants/url';
import Rating from '../rating';
import { detailProps } from '../commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 4, 3),
  },
  noUnderline: {
    textDecoration: 'none',
  },
  link: {
    textTransform: 'capitalize',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '0%',
      left: 0,
      top: '100%',
      borderBottom: `${theme.spacing(0.5)}px solid ${theme.palette.primary.main}`,
      transition: `width ${TIME.CSS.TIMEOUT} ease-in`,
    },
    '&:hover::after': {
      width: '100%',
    },
  },
  content: {
    margin: `${theme.spacing(3)}px auto`,
    maxWidth: theme.breakpoints.values.md,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0, 4, 4),
    background: theme.palette.background.paper,
  },
  header: {
    width: '100%',
    margin: theme.spacing(1, 0, 2),
    padding: theme.spacing(0, 0, 2),
    borderBottom: `${theme.spacing(0.125)}px solid ${theme.palette.primary.light}`,
  },
  contentItem: {
    width: '100%',
    margin: theme.spacing(2, 0, 0),
    padding: theme.spacing(1, 5),
  },
  itemWrapped: {
    margin: theme.spacing(0, 0),
  },
  iconWrapped: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(0, 1.5),
  },
  icon: {
    fill: theme.palette.primary.dark,
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
  },
  itemTitle: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  iconButton: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  iconPdf: {
    fill: red[800],
  },
  iconWord: {
    fill: indigo[800],
  },
  iconDisabled: {
    fill: theme.palette.grey[400],
  },
  cta: {
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(2, 0, 0),
  },
  directTitle: {
    width: '100%',
    position: 'relative',
    margin: theme.spacing(2, 0),
    '&::before': {
      position: 'absolute',
      content: '""',
      height: theme.spacing(0.25),
      width: '30%',
      borderBottom: `${theme.spacing(0.125)}px dashed ${theme.palette.primary.light}`,
      top: '50%',
      left: '5%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      height: theme.spacing(0.25),
      width: '30%',
      borderBottom: `${theme.spacing(0.125)}px dashed ${theme.palette.primary.light}`,
      top: '50%',
      right: '5%',
    },
  },
  download: {
    width: '100%',
  },
}));

const Details = ({ documentDetail, dispatchFetchDocumentDetail, docId }) => {
  const s = useStyles();
  const {
    categoryName,
    subcategoryName,
    name,
    updated,
    id,
    rate,
    pages,
    format,
    wordData,
    pdfData,
  } = documentDetail;
  useEffect(() => {
    dispatchFetchDocumentDetail(docId);
  }, [docId]);

  const pdfDownload = pdfData && !isEmpty(pdfData);
  const wordDownload = wordData && !isEmpty(wordData);
  const pdfUrl = pdfDownload && `${URL.HOST}${pdfData.url}`;
  const wordUrl = wordDownload && `${URL.HOST}${wordData.url}`;
  const iconPdfStyle = pdfDownload
    ? `${s.iconButton} ${s.iconPdf}`
    : `${s.iconButton} ${s.iconDisabled}`;
  const iconWordStyle = wordDownload
    ? `${s.iconButton} ${s.iconWord}`
    : `${s.iconButton} ${s.iconDisabled}`;

  const handleEditDocument = () => {
    navigate(NAVIGATION.URL.DOCUMENTS.READY);
  };

  return (
    <Grid component="section" container direction="column" className={s.root}>
      <Grid component="nav" item>
        <Breadcrumbs component="nav">
          <Link to={`/${NAVIGATION.URL.DOCUMENTS.ALL}`} className={s.noUnderline}>
            <Typography variant="body2" color="primary" className={s.link}>
              {NAVIGATION.URL.DOCUMENTS.ROOT}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary">
            {categoryName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {subcategoryName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid component="section" item>
        <Grid
          component="section"
          container
          justify="center"
          direction="column"
          alignItems="flex-start"
          className={s.content}
        >
          <Grid component="div" item className={s.header}>
            <Typography variant="h5" color="textPrimary" className={s.title}>
              {name}
            </Typography>
            <Rating id={id} userRating={rate} showOnly />
          </Grid>
          <Grid component="div" item className={s.contentItem}>
            <Grid component="div" container justify="space-evenly" alignItems="center">
              <Grid component="div" item className={s.itemWrapped}>
                <Grid component="div" container justify="center" alignItems="center">
                  <Grid component="div" item className={s.iconWrapped}>
                    <Version className={s.icon} />
                  </Grid>
                  <Grid component="div" item>
                    <Typography variant="body1" color="primary" className={s.itemTitle}>
                      Last Version
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {moment(updated).format('DD/MM/YYYY')}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid component="div" item className={s.itemWrapped}>
                <Grid component="div" container justify="center" alignItems="center">
                  <Grid component="div" item className={s.iconWrapped}>
                    <Formats className={s.icon} />
                  </Grid>
                  <Grid component="div" item>
                    <Typography variant="body1" color="primary" className={s.itemTitle}>
                      Formats
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {format}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid component="div" item className={s.itemWrapped}>
                <Grid component="div" container justify="center" alignItems="center">
                  <Grid component="div" item className={s.iconWrapped}>
                    <Price className={s.icon} />
                  </Grid>
                  <Grid component="div" item>
                    <Typography variant="body1" color="primary" className={s.itemTitle}>
                      Price
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Free
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid component="div" item className={s.itemWrapped}>
                <Grid component="div" container justify="center" alignItems="center">
                  <Grid component="div" item className={s.iconWrapped}>
                    <Pages className={s.icon} />
                  </Grid>
                  <Grid component="div" item>
                    <Typography variant="body1" color="primary" className={s.itemTitle}>
                      Size
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {pages} {pages > 1 ? 'pages' : 'page'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid component="div" item className={s.cta}>
            <Grid
              component="section"
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid component="div" item className={s.download}>
                <Grid
                  component="div"
                  container
                  justify="center"
                  alignItems="center"
                  className={s.directTitle}
                >
                  <Typography variant="body2" color="primary">
                    Direct download
                  </Typography>
                </Grid>
                <Grid
                  component="div"
                  container
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid component="div" item>
                    <Button
                      href={pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      color="primary"
                      startIcon={<Pdf className={iconPdfStyle} />}
                      disabled={!pdfDownload}
                    >
                      download
                    </Button>
                  </Grid>
                  <Grid component="div" item>
                    <Button
                      href={wordUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      color="primary"
                      startIcon={<Word className={iconWordStyle} />}
                      disabled={!wordDownload}
                    >
                      download
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid component="div" item className={s.download}>
                <Grid
                  component="div"
                  container
                  justify="center"
                  alignItems="center"
                  className={s.directTitle}
                >
                  <Typography variant="body2" color="primary">
                    Or
                  </Typography>
                </Grid>
                <Grid component="div" container justify="center" alignItems="center">
                  <Button
                    href=""
                    component="button"
                    variant="contained"
                    color="primary"
                    disableFocusRipple
                    disableRipple
                    size="large"
                    startIcon={<Create />}
                    onClick={handleEditDocument}
                    disabled={!wordDownload}
                  >
                    Fill out the template - 100% FREE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Details.propTypes = {
  documentDetail: objectOf(any).isRequired,
  dispatchFetchDocumentDetail: func.isRequired,
  docId: string.isRequired,
};

export default connect(
  detailProps.mapStateToProps,
  detailProps.mapDispatchToProps,
)(Details);
