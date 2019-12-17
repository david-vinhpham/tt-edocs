import React from 'react';
import { node } from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0),
    padding: theme.spacing(20, 2, 0),
    opacity: '0.4',
  },
}));

const BackgroundSection = ({ children }) => {
  const s = useStyles();

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "tandtbackground.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor="#fff"
            className={s.root}
          >
            {children}
          </BackgroundImage>
        );
      }}
    />
  );
};

BackgroundSection.propTypes = {
  children: node.isRequired,
};

export default BackgroundSection;
