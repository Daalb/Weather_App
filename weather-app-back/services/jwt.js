const jwt = require("jwt-simple");

const SECRET_KEY = "23de2b9c9e2f3e9103f5cd19afbec268072fe4ee6efcf8639f3947de7fc69b6c";

exports.decodeToke = function(token){
    return jwt.decode(token,SECRET_KEY, true);
}