import UserModel from "../models/user.js";

export const customer = async (req, res) => {
  try {
    const { data } = req.body;

    data.timestamp = new Date();
    const result = await UserModel.create(data);

    res.status(200).send({
      success: true,
      message: "Customer data saved ",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

// fetch all user data
export const UserData = async (req, res) => {
  try {
    const data = await UserModel.find();

    res
      .status(200)
      .send({ success: true, message: "Fetch all Transaction", data });
  } catch (error) {
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

//delete User

export const DeleteUser = async (req, res) => {
  try {
    const { Id } = req.body;
    const result = await UserModel.findByIdAndDelete(Id);

    if (result != null) {
      return res.status(200).send({
        success: true,
        message: "Delete Data",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

//update user data

export const UpdateUser = async (req, res) => {
  const { id, data } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(id, data);
    if (user) {
      return res.status(200).send({
        success: true,
        message: "User Updated",
      });
    }

    res.status(400).send({
      success: false,
      message: "User not updated",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error updating user",
    });
  }
};
