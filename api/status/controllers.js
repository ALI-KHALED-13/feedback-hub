const { response } = require("express");
const Status = require("../../models/status");
const { DB404Error } = require("../utils/handleErrors");


const getAllStatuses = async (req, res)=> {
  const statuses = await Status.find({});
  res.status(200).json(statuses);
}

const createNewStatus = async (req, res)=> {
 await Status.create(req.body);
 res.status(200).json("new status created succefully") 
}

const modifyStatus = async(req, res)=> {
  const targetStatus = await Status.findById(req.params.id);

  if (!targetStatus) throw new DB404Error("Status could not be found");


  const modifiedDoc = Object.assign(targetStatus, req.body);

  await modifiedDoc.save();
  res.status(200).json(`status was updated succefully`);
}


module.exports = {getAllStatuses, createNewStatus, modifyStatus};