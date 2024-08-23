import User from "../models/userModel.js";


export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(res.json)
    res.json(users);
  } catch (error) {
    console.error("Error fetching users;", error);
  }
};



export const createUsers = async(req,res)=>{
try{
  const newUser = new User(req.body)
  console.log(newUser)
  await newUser.save()
  res.status(201).json(newUser)
}catch(error){
  console.error("Error saving data",error)
  res.status(500).json({
    message:"Failed to save data",
  })
}
}
export const getReferedUser = async(req,res)=>{
  try {
    // const { referralCode } = req.body;

    const newUser = await User.findOne()
    res.json(newUser)
  } catch (error) {
    console.error("Error saving data",error)
  res.status(500).json({
    message:"Failed to save data",
  })
  }
}

export const getUserById = async(req,res)=>{
  try {

   const user = await User.findOne()
    // console.log(user)
    res.json(user)
  } catch (error) {
    console.log("'CAN'T FIND USER BASED ON USERID", error)
  }
}

export const updateMe = async (req, res) => {
  try {
    const userId = req.params.id; // Get MongoDB _id from route parameters
    const { referBalance, todayClaim, totalEarnDay, ...otherFields } = req.body;

    // Construct the update object
    const update = { ...otherFields };
    if (referBalance !== undefined) {
      update.$inc = { referBalance }; // Increment referBalance if provided
    }
    if (todayClaim !== undefined) {
      update.todayClaim = todayClaim; // Update todayClaim if provided
    }
    if (totalEarnDay !== undefined) {
      update.totalEarnDay = totalEarnDay; // Update totalEarnDay if provided
    }

    const options = { new: true }; // Return the updated document

    // Find the user by MongoDB _id and update
    const updatedUser = await User.findByIdAndUpdate(
      userId,  // Filter by MongoDB _id
      update,  // Apply the updates
      options  // Options to return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }

    // Respond with the updated user
    res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser
      }
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error });
  }
};



// updateMe()

export const deleteUser = async(req,res)=>{
  try {
    // await User.findByIdAndUpdate(req.id, { active: false });
    const result = await User.deleteOne()
    console.log(result); 
    
  } catch (error) {
    console.log("ERROR WHILE DELETING THE USER TABLE",error)
  }
}

// Function to get MongoDB _id from Ethereum address
export const getMongoIdByEthereumAddress = async (req, res) => {
  try {
    const { ethereumAddress } = req.params; // Get Ethereum address from request parameters

    // Find the user by Ethereum address
    const user = await User.findOne({ ethereumId: ethereumAddress });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }

    // Respond with the MongoDB _id
    res.status(200).json({
      status: 'success',
      data: {
        _id: user._id.toString()
      }
    });
  } catch (error) {
    console.error('Error retrieving MongoDB _id:', error);
    res.status(500).json({ message: 'Error retrieving MongoDB _id', error });
  }
};