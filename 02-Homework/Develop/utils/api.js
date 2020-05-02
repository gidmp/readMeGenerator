const axios = require("axios");

const api = {
    getUser(userName){
        return axios
        .get("https://api.github.com/users/" + userName)
        .catch(err => {console.log("user not found")});
      
    }
}


module.exports = api;