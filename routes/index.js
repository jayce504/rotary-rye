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
             pass: 'Coolness5523'
         }
     });
     let mailOptions = {
         from: req.body.name, // sender address
         to: "shudson5523@gmail.com", // list of receivers
         subject: 'Rotary Youth Exchange Request for information', // Subject line
         html: '<b>'+req.body.name+'</b>'+' would like more information regarding the Rotary Youth Exchange. '+
          'Their information is below: <br>'+
              '<b>Name: </b>'+req.body.name+'<br>'+
              '<b>Address: </b>'+req.body.address+'<br>'+
              '<b>Phone Number: </b>'+req.body.phoneNumber+'<br> <br>'+
              'Please reach out to them for further information.'
     };

     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             return console.log(error);
         }
         console.log('Message %s sent: %s', info.messageId, info.response);
             res.render('index');
         });
      res.redirect('thanks')
     });



module.exports = router;
