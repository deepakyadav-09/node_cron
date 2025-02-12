const cron = require('node-cron');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config()
console.log(process.env.EMAIL_ID, process.env.PASS_KEY)


const data = (req, res) => {
    console.log('testing of node-cron and sending email');

    function emailSenderFunction() {
        const transportEmail = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: process.env.EMAIL_ID,
                pass: process.env.PASS_KEY
            }
        })
        const user = {
            from: 'Deeapk yadav <dy627511@gmail.com',
            to: 'keyur.navadiya@elookinto.org',
            subject: 'testing of node-cron',
            text: 'Ignore this Email. This is only for testing purpose. thank you'
        }
        return new Promise((resolve, reject) => {
            transportEmail.sendMail(user, (err, sended) => {
                if (err) console.error(err)
                resolve(sended)
                reject(err)
            })
        })
    }
   

    cron.schedule("1 * * * * *",  emailSenderFunction()
    .then(value => console.log('email sended sucessfully', value),
        (err => console.log('something wrong'))))
    res.send({
        data: res.locals.userData
    })
}

module.exports = {
    data
}