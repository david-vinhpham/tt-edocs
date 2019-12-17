import URL from './url';

const EMAIL = {
  REGISTER: {
    SUBJECT: 'Create an Account at T&T E-DOCUMENTS',
    CONTENT1: 'Your account has been created.',
    CONTENT2: 'You can log into your account here',
    CONTENT3: 'Email address',
    FOOTER: 'All the best',
    SIGNED: 'T&T E-DOCUMENTS - YOUR ASSISTANT',
  },
  COMPLETE: {
    SUBJECT: 'Your document from T&T E-DOCUMENTS',
    CONTENT1: 'Congratulations on successfully using T&T E-DOCUMENTS',
    CONTENT2: 'Document',
    CONTENT3: 'Attached are',
    WORD: 'Your document in Word format, which you can modify',
    PDF: 'Your document in PDF format, which you can use right away',
  },
  GREETING: 'Hello',
  FROM: 'tandt.edocuments@legalandme.com.vn',
  // FROM: 'tandt.edocuments@gmail.com',
  CONFIRM_URL: `${URL.WEBSITE}/auth`,
};

export default EMAIL;
