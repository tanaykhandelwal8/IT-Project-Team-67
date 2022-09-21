const Resident = require("../models/resident");
const DbUtils = require("./dbUtils");

const dashboard = async (req, res) => {
  const residentId = req.params.id;
  const resident = await DbUtils.getResidentById(residentId);

  if (!resident) {
    return res.redirect("/");
  }

  //const clinicianMessage = patient.supportMessage;
  const fName = resident.firstName;
  const lname = resident.lastName;
  const location = resident.address;
  //image to be pulled
  //favourites schema of all different types

  if (residentId) {
    res.render("patient/resident-dashboard.html", {
      //layout: "patient.hbs",
      FirstName: fName,
      LastName:lname,
    });
  } else {
    res.send("No id");
  }
}

module.exports = {
    dashboard
}