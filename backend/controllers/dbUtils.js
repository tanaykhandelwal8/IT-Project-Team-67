const Resident = require("../models/resident");
const Staff = require("../models/staff");
// Searches db for patient with residentId
const getResidentById = async (residentId) => {
  const resident = await Resident.findOne({ _id: residentId }).lean();

  if (resident) {
    return resident;
  }
};

const getStaffById = async (staffId) => {
  const staff = await Staff.findOne({
    _id: staffId,
  }).lean();

  if (staff) {
    return staff;
  }
};

const getAllResidents = async (next) => {
  try {
    const residents = await Resident.find().lean();
    return residents;
  } catch (err) {
    return next(err);
  }
};

module.exports = {
    getResidentById,
    getStaffById,
    getAllResidents,
};