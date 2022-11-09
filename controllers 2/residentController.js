const Resident = require("../models/resident");
const DbUtils = require("./dbUtils");


// Display dashboard of current resident //

const dashboard = async (req, res) => {
  const residentId = req.params.id;
  const resident = await DbUtils.getResidentById(residentId);

  //redirect to login if no resident found 
  if (!resident) {
    return res.redirect("/");
  }

  // define what's to be displayed
  //const clinicianMessage = resident.supportMessage;
  //const residentaddress = resident.adrress;


  // display
  /*
  if (residentId) {
    res.render("resident/dashboard.hbs", {
      layout: "resident.hbs",
      residentId: residentId,
      clinicianMessage: clinicianMessage,
      notYetRecorded: notYetRecorded,
      numToRecord: numToRecord,
      isEngaged: isEngaged,
    });
  } else {
    res.send("No id");
  }
  */
};





// Update resident profile //

const updateprofile = async(req, res) => {
    const residentId = req.params.id;
    
    const address = req.body.address;
    const dob = req.body.dob;
    const bio = req.body.bio;
    const password = req.body.password;
  
    if(!address){
    }else{
      Resident.findByIdAndUpdate({_id: residentId}, {address: address}, function(err, res){})
    };

    if(!dob){
    }else{
      Resident.findByIdAndUpdate({_id: residentId}, {dateOfBirth: dob}, function(err, res){})
    };
  
    if(!bio){
    }else{
      Resident.findByIdAndUpdate({_id: residentId}, {bio: bio}, function(err, res){})
    };
  
    if(!password){
    }else{
      Resident.findOneAndUpdate({_id: residentId}, {password: password}, function(err, res){})
    };
  
    res.redirect("/resident/" + residentId + "/dashboard");
};


// View other resident profile //

const residentView = async (req, res) => {
    const residentId = req.params.residentId;
    const thisResident = await DbUtils.getResidentById(residentId);
  
    const firstName = thisResident.firstName;
    const lastName = thisResident.lastName;
    
    /*
    res.render("clinician/patientView.hbs", {
      layout: "clinician.hbs",
      patientId: patientId,
      clinicianId: clinicianId,
      data: data,
      firstName: firstName,
      lastName: lastName,
    });
    */
};


  module.exports = {
    dashboard,
    updateprofile,
    residentView
};
