const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User Schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Job Seeker', 'Employer'], required: true },
  profile: {
    name: String,
    contact: String,
    resume: String,
    skills: [String],
    education: String,
    experience: String,
    location: String
  },
  createdAt: { type: Date, default: Date.now }
});

// Define Job Schema
const jobSchema = new Schema({
  employerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  location: String,
  createdAt: { type: Date, default: Date.now }
});

// Define Application Schema
const applicationSchema = new Schema({
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  candidateId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

// Define Message Schema
const messageSchema = new Schema({
  threadId: { type: Schema.Types.ObjectId, ref: 'MessageThread', required: true },
  senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: String,
  createdAt: { type: Date, default: Date.now }
});

// Define MessageThread Schema
const messageThreadSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  messages: [{
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: String,
    createdAt: { type: Date, default: Date.now }
  }]
});

// Define Notification Schema
const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  content: String,
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Define models
const User = mongoose.model('User', userSchema);
const Job = mongoose.model('Job', jobSchema);
const Application = mongoose.model('Application', applicationSchema);
const Message = mongoose.model('Message', messageSchema);
const MessageThread = mongoose.model('MessageThread', messageThreadSchema);
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = { User, Job, Application, Message, MessageThread, Notification };
