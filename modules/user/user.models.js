 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const jwt = require('jsonwebtoken');
 const validator = require('validator');
 const bcrypt = require('bcrypt');
 const dotenv = require('dotenv').config();
 const { passwordReg } = require('./user.validation');

 const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email!',
        },
    },
    firstName: {
        type: String,
        required: [true, 'Firstname is required!'],
    },
    lastName: {
        type: String,
        required: [true, 'Lastname is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [6, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password!',
        },
    },
});

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    return next();
});

UserSchema.methods = {
    _hashPassword(password) {
       let salt = bcrypt.genSaltSync(10);
       let hash = bcrypt.hashSync(password,salt);
       return hash;
    },
    authenticateUser(password) {
        return bcrypt.compareSync(password, this.password);
    },
    createToken() {
      return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
      );
    },
    toAuthJSON(){
       return {
         _id: this._id,
         firstName: this.firstName,
         email:this.email,
         token: `Bearer ${this.createToken()}`,
       }
    },
    toJSON() {
      return {
        _id: this._id,
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email
      };
    },
};

let User = mongoose.model('User', UserSchema);
 module.exports = User;
