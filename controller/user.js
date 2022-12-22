import { application } from "express";
import User from "../model/User.js";
const users = [];
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  if (!users) throw new Error("Not Found", 400);
  res.send({
    data: users,
  });
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  if (!user) throw new Error("Some fucking error", 400);

  res.send({
    data: user,
  });
};
export const getElementById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send({
      data: user,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
export const updataUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate({ _id: id }, req.body);
  if (!user) throw new Error("Input error", 400);
  res.send({
    data: user,
  });
};
export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove(id);
    res.send({
      data: id,
    });
  } catch (error) {}
};
