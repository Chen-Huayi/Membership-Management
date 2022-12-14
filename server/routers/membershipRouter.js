const express = require('express')
const router = express.Router()
const validator = require('@escook/express-joi')
const {membership_schema, time_range_schema} = require('../schemas/membership')
const membership = require("../controllers/membershipController");

// Router start with:
// http://localhost:12138/membership
router.post('/record/activate', validator(membership_schema), membership.membershipActivateRecord)
router.post('/record/deactivate', validator(membership_schema), membership.membershipDeactivateRecord)
router.get('/record', membership.getMembershipAudit)

router.get('/registered/:range', validator(time_range_schema), membership.getNewRegisteredList)
router.get('/expired/:range', validator(time_range_schema), membership.getExpiredList)
router.get('/renewed/:range', validator(time_range_schema), membership.getRenewedList)

module.exports = router
