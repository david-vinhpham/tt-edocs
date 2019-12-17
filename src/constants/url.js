const URL = {
  HOST: process.env.GATSBY_API_URL,
  WEBSITE: process.env.GATSBY_WEBSITE,
  AUTH: '/auth/local',
  get REGISTER() {
    return `${this.AUTH}/register`;
  },
  get LOGIN() {
    return this.AUTH;
  },
  CATEGORIES: '/categories',
  SUBCATEGORIES: '/subcategories',
  DOCUMENTS: '/documents',
  get DOCUMENTS_COUNT() {
    return `${this.DOCUMENTS}/count`;
  },
  STATISTICS: {
    ROOT: '/statistics',
    get COUNT() {
      return `${this.ROOT}/count`;
    },
  },
  COMPLETE: {
    ROOT: '/userdata',
  },
  USERS: '/users',
  EMAIL: '/email',
  FILES: '/upload/files',
};

export default URL;
