require("dotenv").config({ path: `${__dirname}/../dev.env` });
const { timeStamp } = require("console");
const confirmation = require("../models/confirmation_models.js");
const comment = require("../models/comments_models.js");
const consultation = require("../models/consultation_models.js");
const doctor = require("../models/doctor_models.js");
const patient = require("../models/patients_models.js");
const relationship = require("../models/relationships_models.js");
const section = require("../models/section_models.js");
const email = require("../../email.js");

email.email();
// let doctorId = 2;
// let code = 92112037;
// let done = "doc";

// section.sectionCreate(2, "Life must go on", "You're surely fine");
