const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {formatDateString} = require('../controllers/memberFunctions')


const memberSchema = new Schema({
    member_id: {type: String, unique: true, required: true},
    user_role: {type: String, default: 'Club Member', required: true},
    firstname: {type: String, required: true},
    middle_name: {type: String, default: ''},
    lastname: {type: String, required: true},
    gender: {type: String, required: true},
    birthday_year: {type: String, required: true},
    birthday_month: {type: String, required: true},
    birthday_date: {type: String, required: true},
    address_line1: {type: String, required: true},
    address_line2: {type: String, default: ''},
    address_line3: {type: String, default: ''},
    address_city: {type: String, required: true},
    address_country: {type: String, required: true},
    address_postalcode: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    fail_login_count: {type: Number, default: 0},
    registered_date: {type: String, default: formatDateString(new Date()), required: true},  // The date the user is registered
    effective_date: {type: String, default: 'Never Effected', required: true},  // The membership becomes effective for the current or last period
    expire_date: {type: String, default: formatDateString(new Date()), required: true},  // The membership expires after this date
    membership_status: {type: Boolean, default: false, required: true},  // true for Active; false for Inactive
    recent_renewal_date: {type: String, default: 'Never renew', required: true},
    account_locked: {type: Boolean, default: false, required: true},  // password is wrong more than 5 times, lock immediately
    notifications: [],  // in-app email notification boxes
    has_card: {type: Boolean, default: false, required: true},  // true for members who have their member cards, false for who never have, or request a replacement of card
})

const memberModel = mongoose.model('members', memberSchema)

module.exports = {memberModel}
