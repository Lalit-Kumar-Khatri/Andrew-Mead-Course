const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';


sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lalit.khatri83@yahoo.co.in',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`

    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lalit.khatri83@yahoo.co.in',
        subject: 'Sorry to see you go',
        text: `'Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

//
// Goal: Send email to user on cancellation
// 
// 1. Set up a new function for sending an email on cancelation
    // - send email and name as args
// 2. Include their name in the email and ask why they canceled
// 3. Call it just after the account is removed
// 4. Run the request and check your inbox!

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}