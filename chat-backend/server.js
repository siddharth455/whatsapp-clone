const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Endpoint to get messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: -1 });
  res.json(messages);
});

// Endpoint to save a message
app.post('/messages', async (req, res) => {
  const newMessage = new Message({ content: req.body.content });
  await newMessage.save();
  res.status(201).send('Message saved');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
