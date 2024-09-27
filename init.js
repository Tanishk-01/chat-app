const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "sachin",
        to: "tanishk",
        msg: "ok as you say",
        created_at: new Date(),
    },
    {
        from: "tanishk",
        to: "bhawna",
        msg: "Let's fix this",
        created_at: new Date(),
    },
    {
        from: "bhawna",
        to: "tanishk",
        msg: "Yes! Let's fix this",
        created_at: new Date(),
    },
    {
        from: "shubham",
        to: "Ram",
        msg: "Jai shree Ram",
        created_at: new Date(),
    },
    {
        from: "Tony",
        to: "Hulk",
        msg: "Smashhh!",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
 