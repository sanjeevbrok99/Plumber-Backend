import crypto from "crypto";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: 'Your email is required',
        trim: true
    },

    username: {
        type: String,
        unique: true,
        required: false
        // required: 'Your username is required',
    },

    password: {
        type: String,
        required: 'Your password is required',
        max: 100
    },

    firstName: {
        type: String,
        required: 'First Name is required',
        max: 100
    },

    lastName: {
        type: String,
        required: 'Last Name is required',
        max: 100
    },

    profileImage: {
        type: String,
        required: false,
    },
    
    isVerified: {
        type: Boolean,
        default: false
    },
    
    resetPasswordToken: {
        type: String,
        required: false
    },

    resetPasswordExpires: {
        type: Date,
        required: false
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ["user", "moderator", "admin"]
    },
    isEnabled:{
        type:Boolean,
        default:true
    },
    mobile_number:{
        type:String,
        required:false
    },
    

}, {timestamps: true});

export default mongoose.model("User", UserSchema);