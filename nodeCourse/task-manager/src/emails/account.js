const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';


sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'lalit.khatri83@yahoo.co.in',
    from: 'lalit.khatri83@yahoo.co.in',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
}).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body);
})