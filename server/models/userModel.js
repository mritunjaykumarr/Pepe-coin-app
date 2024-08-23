import mongoose, { Schema } from 'mongoose';

const referedSchema = new mongoose.Schema({
  userId: String,
  referralDate: String,
  status: String,
  bonusAmount: Number,
});

const Referred = mongoose.model('Referred', referedSchema);

const UserSchema = new Schema({
  ethereumId: { 
    type: String, 
    unique: true ,
    required:true
  },
  referBalance: {
    type: Number,
    default: 0,
    min: [0, 'Balance cannot be negative'],
  },
  referralCode: { 
    type: String, 
    required: true, 
    unique: true 
  },
  todayClaim:{
    type:Number,
    default:0
  },
  totalEarnDay:{
    type:Number,
    default:0
  },
  referredUsers: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Referred' // Replace with the actual model name
  }],
}, {
  timestamps: true // This will automatically add createdAt and updatedAt fields
});

const User = mongoose.model('User', UserSchema, 'User');

console.log(User);
// let doc =  User.create({
//     "userId": "account_number2",
//   "referBalance": 35,
//   "referralCode": "avdefksjssjf",
//   "referredUsers": [
//     {
//       "userId": "account_number4",
//       "referralDate": "2024-008-24",
//       "status": "completed",
//       "bonusAmount": 10
//     }
//   ]

// });

export default User;
