const express = require('express');
const dotenv=require("dotenv");
const {chats} = require("./data/data");
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const path = require("path");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());   //to accept json data


app.get("/", (req, res) => {
    res.send("API running successfully");
}); 

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);
app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//     //console.log(req.params.id);
//     const singleChat=chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

const PORT = process.env.PORT || 3001;

// app.listen(5000, console.log(`Server Started on Port ${PORT}`.yellow.bold));

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}` );
});
