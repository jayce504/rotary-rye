var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/host-family', function(req, res, next) {
  res.render('host', { title: 'Express' });
});

router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Express' });
});

router.get('/programs', function(req, res, next) {
  res.render('programs', { title: 'Express' });
});

router.get('/more-info', function(req, res, next) {
  res.render('more-info', { title: 'Express' });
});

router.post('/send-email', function (req, res) {
     let transporter = nodeMailer.createTransport({
         host: 'smtp.gmail.com',
         port: 465,
         secure: true,
         auth: {
             user: 'shudson5523@gmail.com',
             pass: 'Scottn3rin'
         }
     });
     let mailOptions = {
         from: req.body.email, // sender address
         to: "shudson5523@gmail.com", // list of receivers
         subject: "Someone Has Expressed Interest in the Program", // Subject line
         text: req.body.body, // plain text body
         html: '<b>NodeJS Email Tutorial</b>' // html body
     };

     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Message %s sent: %s', info.messageId, info.response);
             res.render('index');
         });
     });



module.exports = router;
