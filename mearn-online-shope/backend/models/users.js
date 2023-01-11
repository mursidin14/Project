const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,`please enter your name`],
        maxlength: [30,`name have 30 characters`],
        minlength: [4, `name should have more then 4 character`]
    },
    email: {
        type: String,
        required: [true, `please enter your email`],
        unique: true,
        validate: [validator.isEmail, `please enter a valid email`]

    },
    password: {
        type: String,
        required: [true, `please enter your password`],
        minlength: [8, 'password should be greter than 8 characters'],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordEpire: Date
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    this.password = await bcryptjs.hash(this.password, 10);
})

// JWT Token
// userSchema.methods.getJWTToken = 

module.exports = userSchema;