const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models');

exports.login = async (req, res) => {
   try{
      const { username, passwd } = req.body; 
      if(!username || !passwd) return res.status(400).json('username and password required!');

      const admin = await Admin.findOne({
         username: username,
      });
      if(!admin) return res.status(401).json('wrong username');

      const decryptedPassword = CryptoJs.AES.decrypt(
         admin.password,
         process.env.PASSWORD_SECRETE_KEY
      ).toString(CryptoJs.enc.utf8);
      if(decryptedPassword !== passwd) return res.status(401).json('wrong password');
      
      const token = jwt.sign(
         {
            id: admin._id,
         },
         process.env.TOKEN_SECRETE_KEY,
         { expiresIn: '10s' }
      );
      admin.password = undefined
      
      res.status(200).json({
         token,
         admin
      });
      
   }catch(error){
      console.error(error)
      res.status(500).json(error);
   }
}