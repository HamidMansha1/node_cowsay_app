var cowsay = require("cowsay");
require('dotenv').config();

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// or cowsay.think()


console.log(`friend_name : ${process.env.friend_name}`)
