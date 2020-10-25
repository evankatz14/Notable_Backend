const db = require("../data/dbConfig.js");
const Appointments = require("./appointments-module.js")

module.exports={
    find,
    findById
}

async function find() {
  const physicians = await db("physicians")
  const physicianWithName = await Promise.all(physicians.map(physician => findById(physician.id)))
  return physicianWithName;
}
async function findById(id) {
  const physician = await db("physicians").where({id}).first();  
  const appointments = await db("appointments").where({"physician_id": id})
  const hydratedAppointments = await Promise.all(appointments.map(appointment => Appointments.findById(appointment.id)))
  return {...physician, appointments: hydratedAppointments}
}