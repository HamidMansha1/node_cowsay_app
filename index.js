var cowsay = require("cowsay");
require('dotenv').config();

console.log(cowsay.say({
    text : `Hey ${process.env.friend}`,
    e : "y",
    T : "Kashif "
}));

// or cowsay.think()


// console.log(`friend_name : ${process.env.friend_name}`)
