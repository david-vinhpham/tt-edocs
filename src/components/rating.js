import React, { useState, useEffect } from 'react';
import { number, func, string, bool } from 'prop-types';
import noop from 'lodash/noop';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import yellow from '@material-ui/core/colors/yellow';
import Stars from '@material-ui/icons/Stars';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0),
    borderTop: `${theme.spacing(0.25)}px dashed ${theme.palette.primary.lightRgba}`,
    borderBottom: `${theme.spacing(0.25)}px dashed ${theme.palette.primary.lightRgba}`,
    padding: theme.spacing(2, 0),
    width: '100%',
  },
  showOnly: {
    margin: theme.spacing(0),
  },
  stars: {
    margin: theme.spacing(2, 0),
  },
  starsShow: {
    margin: theme.spacing(1, 1, 0),
  },
  icon: {
    fill: theme.palette.grey[300],
    '&:hover': {
      fill: yellow[800],
      cursor: 'pointer',
    },
  },
  iconActive: {
    fill: yellow[800],
  },
  iconSm: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    '&:hover': {
      cursor: 'unset',
    },
  },
}));

const Rating = ({ userRating, id, onRating, showOnly }) => {
  const s = useStyles();
  const [rated, setRated] = useState(userRating);
  const [rating, setRating] = useState(userRating);

  useEffect(() => {
    setRating(userRating);
  }, [userRating]);

  const handleRated = rate => () => {
    const updateRating = userRating > -1 ? Math.ceil((userRating + rate) / 2) : rate;
    setRated(rate);
    onRating({ id, rate: updateRating });
  };
  const handleEnterRating = rate => () => {
    setRating(rate);
  };
  const handleLeaveRating = () => {
    setRating(rated);
  };
  const [dir, rootStyle, title, starsStyle] = showOnly
    ? ['row', s.showOnly, 'Rating:', s.starsShow]
    : ['column', s.root, 'Rate this document', s.stars];

  return (
    <Grid
      component="section"
      container
      direction={dir}
      alignItems="center"
      className={rootStyle}
    >
      <Grid component="div" item>
        <Typography variant="body2" color="textPrimary">
          {title}
        </Typography>
      </Grid>
      <Grid component="div" item className={starsStyle}>
        <Grid component="div" container justify="center" alignItems="center">
          {Array.from({ length: 5 }, (_, index) => {
            const starStyle = index <= rating ? `${s.icon} ${s.iconActive}` : s.icon;
            const resolveStarStyle = showOnly ? `${starStyle} ${s.iconSm}` : starStyle;

            return (
              // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
              <Grid
                key={index}
                component="div"
                item
                onClick={showOnly ? noop : handleRated(index)}
                onMouseEnter={showOnly ? noop : handleEnterRating(index)}
                onMouseLeave={showOnly ? noop : handleLeaveRating}
              >
                <Stars className={resolveStarStyle} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

Rating.propTypes = {
  id: string.isRequired,
  userRating: number,
  onRating: func,
  showOnly: bool,
};

Rating.defaultProps = {
  userRating: -1,
  onRating: noop,
  showOnly: false,
};

export default Rating;
