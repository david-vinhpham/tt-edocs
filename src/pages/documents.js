import React, { useState, useEffect } from 'react';
import { func, objectOf, any } from 'prop-types';
import { Router } from '@reach/router';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Document from '../components/documents/document';
import Error from '../components/error';
import Details from '../components/documents/details';
import NAVIGATION from '../constants/navBar';
import { documentsProps } from '../components/commonProps';

const Documents = ({ categories, dispatchFetchCategories }) => {
  const [allCategory, setCategory] = useState({});
  useEffect(() => {
    dispatchFetchCategories();
  }, []);

  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  return (
    <>
      <Loading />
      <Error />
      <Layout>
        <Router>
          <Document path={NAVIGATION.URL.DOCUMENTS.ALL} categories={allCategory} />
          <Details path={NAVIGATION.URL.DOCUMENTS.DETAIL_ID} />
        </Router>
      </Layout>
    </>
  );
};

Documents.propTypes = {
  categories: objectOf(any),
  dispatchFetchCategories: func.isRequired,
};

Documents.defaultProps = {
  categories: {},
};

export default connect(
  documentsProps.mapStateToProps,
  documentsProps.mapDispatchToProps,
)(Documents);
