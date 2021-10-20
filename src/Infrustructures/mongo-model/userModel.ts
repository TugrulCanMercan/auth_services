import { Schema } from "mongoose";

const userModel = new Schema({
    email: {
        type: String,
        match: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please add a valid email address.',
        ],
        required: [true, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
    
      },
      password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false,
      },

})

export default userModel