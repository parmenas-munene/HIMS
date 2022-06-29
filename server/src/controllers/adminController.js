const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models');

exports.login = async(req, res) => {
   try {
      //verifying username
      const admin = await Admin.findOne({
         username: req.body.username
      });
      if(!admin) return res.status(401).json('wrong username');
      //verfying password
      const decryptedPassword = CryptoJs.AES.decrypt(
         password,
         process.env.PASSWORD_SECRETE_KEY
      );
      if(decryptedPassword !== req.body.password) return res.status(401).json('wromg password');

      const token = jwt.sign({
         id: admin._id
      }, process.env.TOKEN_SECRETE_KEY);
      admin.password = undefined

      res.status(200).json({
         token,
         admin
      });

   } catch (error) {
      console.log(error);
      res.status(500).json(error)
   }
}