import React from 'react';
import { objectOf, any } from 'prop-types';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import NAVIGATION from '../../constants/navBar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: theme.breakpoints.values.md,
    margin: `${theme.spacing(4)}px auto`,
    background: theme.palette.background.paper,
    padding: theme.spacing(4, 2),
    borderRadius: theme.shape.borderRadius,
  },
  labelHeader: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.spacing(0.25),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  labelSubHead: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: theme.spacing(0.25),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  labelContent: {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.spacing(0.25),
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    '&:hover': {
      color: theme.palette.primary.light,
      cursor: 'pointer',
    },
  },
  iconActive: {
    fill: theme.palette.primary.light,
  },
  itemIcon: {
    margin: theme.spacing(0, 1),
  },
  itemContent: {
    background: 'none !important',
    padding: theme.spacing(0, 2),
    borderRadius: theme.spacing(4),
    width: '100%',
  },
  itemDocument: {
    marginLeft: theme.spacing(1.25),
    paddingLeft: theme.spacing(4.75),
    borderLeft: `2px dashed ${theme.palette.primary.lightRgba}`,
    borderRadius: 'unset',
    borderTopRightRadius: theme.spacing(4),
    borderBottomRightRadius: theme.spacing(4),
    '&:hover': {
      background: `${theme.palette.primary.lightRgba} !important`,
    },
  },
}));

const DocumentTree = ({ categories }) => {
  const s = useStyles();
  const handleDocumentDetail = id => () => {
    navigate(`${NAVIGATION.URL.DOCUMENTS.DETAIL}/${id}`);
  };
  const defaultItems = Object.keys(categories);

  return (
    <Grid component="section" container className={s.root}>
      <TreeView
        defaultCollapseIcon={<RemoveCircle className={`${s.icon} ${s.iconActive}`} />}
        defaultExpandIcon={<AddCircle className={s.icon} />}
        onNodeToggle={handleDocumentDetail}
        defaultExpanded={defaultItems}
      >
        {Object.keys(categories).map(id => {
          const catName = categories[id].name;
          const subCats = categories[id].subcategories;

          return (
            <TreeItem
              key={id}
              nodeId={id}
              label={catName}
              classes={{
                label: s.labelHeader,
                content: s.itemContent,
                iconContainer: s.itemIcon,
              }}
            >
              {Object.keys(subCats).map(sId => {
                const subName = subCats[sId].name;
                const docs = subCats[sId].documents;
                return (
                  <TreeItem
                    key={sId}
                    nodeId={sId}
                    label={subName}
                    classes={{
                      label: s.labelSubHead,
                      content: s.itemContent,
                      iconContainer: s.itemIcon,
                    }}
                  >
                    {Object.keys(docs).map(dId => {
                      const docName = docs[dId].name;
                      return (
                        <TreeItem
                          key={dId}
                          nodeId={dId}
                          label={docName}
                          onClick={handleDocumentDetail(dId)}
                          classes={{
                            label: s.labelContent,
                            content: `${s.itemContent} ${s.itemDocument}`,
                            iconContainer: s.itemIcon,
                          }}
                        />
                      );
                    })}
                  </TreeItem>
                );
              })}
            </TreeItem>
          );
        })}
      </TreeView>
    </Grid>
  );
};

DocumentTree.propTypes = {
  categories: objectOf(any).isRequired,
};

export default DocumentTree;
