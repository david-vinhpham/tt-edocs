const NAVIGATION = {
  BRAND: {
    SUBTITLE: 'E-DOCUMENTS',
  },
  URL: {
    HOME: 'home',
    DOCUMENTS: {
      ROOT: 'documents',
      get ALL() {
        return `${this.ROOT}/`;
      },
      get DETAIL() {
        return `${this.ROOT}/detail`;
      },
      get DETAIL_ID() {
        return `${this.ROOT}/detail/:docId`;
      },
      READY: 'document-ready',
      DOWNLOAD: 'document-download',
    },
    FAQ: 'faq',
    ACCOUNT: {
      ROOT: 'account',
      get AUTH() {
        return `${this.ROOT}/auth`;
      },
      get PROFILE() {
        return `${this.ROOT}/profile`;
      },
    },
  },
  get MENU() {
    return [
      { name: 'HOME', url: this.URL.HOME, child: null },
      {
        name: 'DOCUMENTS',
        url: this.URL.DOCUMENTS.ALL,
        child: [
          { name: 'Business', child: null },
          { name: 'Personal', child: null },
          { name: 'All documents', child: null },
        ],
      },
      { name: 'FAQ', url: this.URL.FAQ, child: null },
      { name: 'MY ACCOUNT', url: this.URL.ACCOUNT.AUTH, child: null },
    ];
  },
};

export default NAVIGATION;
