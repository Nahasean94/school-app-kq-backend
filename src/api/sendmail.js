const nodemailer = require("nodemailer");


module.exports={
    sendConfirmationEmail:async (token,recipient)=>{
const link='http://68.183.29.191:8080/confirm/'+token
    let transporter =nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'ncubed940@gmail.com',
            pass: 'stockmann2'
        }
    });
    let mailOptions = {
        from: 'ncubed940@gmail.com',
        to: recipient,
        subject: "Confirm your credentials",
        html: `<style>
a{
       background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: Helvetica,sans-serif;
}
</style><div><b>Thank you for creating an account on the school management system. Kindly click confirm to activate your account</b><br><br>
<a href=${link}>Confirm</a>
</div>`

    };

    // send mail with defined transport object
    return await transporter.sendMail(mailOptions)


}
}

