const jwt = require('../services/jwt');
const moment  = require('moment');
const User = require('../models/user');

function willExpireToken(token){
    const { exp } = jwt.decodeToke(token);
    const currentDate = moment().unix();

    if (currentDate> exp) {
        return true;//Caducó 
    }
    return false;
}