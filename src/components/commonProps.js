import { resetError } from '../actions/common';
import { loginApi, registerApi, logoutAction, updateApi } from '../actions/auth';
import {
  fetchDocumentDetailApi,
  setSearchResultsAction,
  fetchDocumentsCountApi,
  cleanUpCompletedDocuments,
  ratingDocumentApi,
} from '../actions/document';
import {
  fetchStatisticsDocumentApi,
  createStatisticsDocumentApi,
  updateStatisticsDocumentApi,
  fetchStatisticsCountApi,
} from '../actions/statistics';
import { fetchCompleteDataApi, createCompleteDataApi } from '../actions/complete';
import { fetchCategoriesApi, fetchSubcategoriesApi } from '../actions/category';
import { sendmailApi } from '../actions/email';
import { downloadFileApi } from '../actions/files';

export const loadingProps = {
  mapStateToProps: ({ common }) => ({
    isLoading: common.isLoading,
  }),
};

export const errorProps = {
  mapStateToProps: ({ common }) => ({
    isError: common.isError,
    errMsg: common.errMsg,
  }),
  mapDispatchToProps: dispatch => ({
    dispatchResetError: () => dispatch(resetError()),
  }),
};

export const authProps = {
  mapStateToProps: ({ auth, category }) => ({
    isAuth: auth.isAuth,
    userDetail: auth.userDetail,
    subcategories: category.subcategories,
  }),
  mapDispatchToProps: dispatch => ({
    dispatchLogin: data => dispatch(loginApi(data)),
    dispatchRegister: data => dispatch(registerApi(data)),
    dispatchLogout: () => dispatch(logoutAction({})),
    dispatchUpdate: data => dispatch(updateApi(data)),
    dispatchSendEmailRegister: data => dispatch(sendmailApi(data)),
  }),
};

export const documentsProps = {
  mapStateToProps: ({ category, document, statistics }) => ({
    categories: category.categories,
    subcategories: category.subcategories,
    documentsCount: document.documentsCount,
    totalDownloadStatistics: statistics.totalDownloadStatistics,
  }),
  mapDispatchToProps: dispatch => ({
    dispatchFetchCategories: () => dispatch(fetchCategoriesApi()),
    dispatchFetchSubCategories: () => dispatch(fetchSubcategoriesApi()),
    dispatchFetchDocumentsCount: () => dispatch(fetchDocumentsCountApi()),
    dispatchFetchStatisticsCount: () => dispatch(fetchStatisticsCountApi()),
  }),
};

export const detailProps = {
  mapStateToProps: ({ document }) => ({
    documentDetail: document.documentDetail,
  }),
  mapDispatchToProps: dispatch => ({
    dispatchFetchDocumentDetail: id => dispatch(fetchDocumentDetailApi(id)),
    dispatchDownloadFile: id => dispatch(downloadFileApi(id)),
  }),
};

export const searchProps = {
  mapStateToProps: ({ document }) => ({
    searchResults: document.searchResults,
  }),
  mapDispatchToProps: dispatch => ({
    dispatchSetSearchResults: data => dispatch(setSearchResultsAction(data)),
  }),
};

export const docReadyProps = {
  mapStateToProps: ({ auth, document, statistics, complete }) => ({
    isAuth: auth.isAuth,
    userDetail: auth.userDetail,
    documentDetail: document.documentDetail,
    statistics: statistics.statistics,
    completeData: complete.completeData,
    createdCompleteData: complete.createdCompleteData,
  }),
  mapDispatchToProps: dispatch => ({
    dispatchFetchStatisticsDocument: id => dispatch(fetchStatisticsDocumentApi(id)),
    dispatchCreateStatisticsDocument: data =>
      dispatch(createStatisticsDocumentApi(data)),
    dispatchUpdateStatisticsDocument: data =>
      dispatch(updateStatisticsDocumentApi(data)),
    dispatchCreateCompleteData: data => dispatch(createCompleteDataApi(data)),
    dispatchFetchCompleteData: email => dispatch(fetchCompleteDataApi(email)),
    dispatchCleanUpCompletedDocuments: () => dispatch(cleanUpCompletedDocuments()),
    dispatchRatingDocument: data => dispatch(ratingDocumentApi(data)),
    dispatchSendingCompleteEmail: data => dispatch(sendmailApi(data)),
  }),
};

export default null;
