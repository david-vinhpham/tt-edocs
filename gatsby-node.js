/* eslint-disable no-param-reassign */
const DOCUMENT_PAGE = process.env.DOCUMENT_PAGE_LINK;
const ACCOUNT_PAGE = process.env.ACCOUNT_PAGE_LINK;

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(new RegExp(`/${ACCOUNT_PAGE}`))) {
    page.matchPath = `${ACCOUNT_PAGE}/*`;
    createPage(page);
  }
  if (page.path.match(new RegExp(`/${DOCUMENT_PAGE}`))) {
    page.matchPath = `${DOCUMENT_PAGE}/*`;
    createPage(page);
  }
};
