const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const resident = require('../models/resident')
const staff = require('../models/staff')

