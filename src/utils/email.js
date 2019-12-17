import EMAIL from '../constants/email';

export const register = email => ({
  to: email,
  from: EMAIL.FROM,
  subject: EMAIL.REGISTER.SUBJECT,
  html: `
    ${EMAIL.GREETING}<br/><br/>
    ${EMAIL.REGISTER.CONTENT1}<br/>
    ${EMAIL.REGISTER.CONTENT2}: ${EMAIL.CONFIRM_URL}<br/>
    ${EMAIL.REGISTER.CONTENT3}: ${email}<br/><br/>
    ${EMAIL.REGISTER.FOOTER}<br/>
    ${EMAIL.REGISTER.SIGNED}<br/><br/>
  `,
});

export const complete = (email, document) => ({
  to: email,
  from: EMAIL.FROM,
  subject: EMAIL.COMPLETE.SUBJECT,
  html: `
    ${EMAIL.GREETING}<br/><br/>
    ${EMAIL.COMPLETE.CONTENT1}<br/>
    ${EMAIL.COMPLETE.CONTENT2}: <strong>${document}</strong><br/><br/>
    ${EMAIL.COMPLETE.CONTENT3}:<br/>
    <ul>
        <li>${EMAIL.COMPLETE.WORD}</li>
        <li>${EMAIL.COMPLETE.PDF}</li>
    </ul>
  `,
});
