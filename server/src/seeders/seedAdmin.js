const CryptoJs = require('crypto-js');
const { Admin } = require('../models');

exports.createAdmin = async() => {
    const username = process.env.DEAULT_ADMIN_USERNAME;
    const password = process.env.DEAULT_ADMIN_PASSWORD;

    try {
        const admin = await Admin.findOne({username: username});
        if(admin !== null){
            return true
        }
        const newAdmin = newAdmin({
            username: username,
            password: CryptoJs.AES.encrypt(
                password,
                process.env.PASSWORD_SECRETE_KEY
            )
        });
        await newAdmin();
        console.log('----------------------');
        console.log('Admin created with');
        console.log(`username => ${username}`);
        console.log(`password => ${password}`);
        console.log('----------------------');
        
    } catch (error) {
        console.log(error)
        return false
    }
}