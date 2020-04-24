const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 
// Goal: Pull JWT secret and database URL into env vars
// 
// 1. Create two new env vars: JWT_SECRET and MONGODB_URL
// 2. Setup values for each in the development env files
// 3. Swap out three hardcoded values
// 4. Test your work. Create new user and get their profile  

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

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}