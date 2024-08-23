import express from 'express';
import {
  getAllUsers,
  createUsers,
  getReferedUser,
  getUserById,
  updateMe,
  deleteUser,
  getMongoIdByEthereumAddress,
} from '../controllers/userController.js';

const router = express.Router();

// GETTING DATA FROM USERS

router.get('/', getAllUsers);
router.post('/create', createUsers);
router.route('/user/:ethereumId').get(getUserById);

// router.get("/referral/",getReferedUser)
router.route('/referral/:referralCode').get(getReferedUser);
// router.get("/",setCookie)

router
  .route('/update/user/:id') // Change to use _id
  .get(getUserById)
  .put(updateMe)
  .delete(deleteUser);

router
  .route('/get-id-by-address/:ethereumAddress')
  .get(getMongoIdByEthereumAddress);

export default router;
