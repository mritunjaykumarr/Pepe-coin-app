import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// console.log(apiUrl, "this from apiurl");

export const fetchData = async () => {
  try {
     await axios.get(`${apiUrl}/`);
    // console.log(response.data, "this from fetchData");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchDataUser = async (ethereumId) => {
  try {
    return await axios.get(`${apiUrl}/user/${ethereumId}`);
    // console.log(res.data.data.user,"this from fetchDataUser")
  } catch (error) {
    console.error("Error Fetching data from user :", error);
  }
};

export const postDataFromUser = async (data) => {
  try {
    console.log(data, "this from line 28");
    await axios.post(`${apiUrl}/create`, data);
  } catch (error) {
    console.error("Error while creating user", error);
  }
};

export const updateUserData = async (ethereumId, data) => {
  try {
    console.log(ethereumId, data);
    await axios.put(`${apiUrl}/user/update/${ethereumId}`, data);

  } catch (error) {
    console.error("Error while updating user", error);
  }
};

export const fetchUserByReferId = async( referralCode)=>{
  try {
    return await axios.get(`${apiUrl}/refer/code/${referralCode}`)
    
  } catch (error) {
    console.log("Error while fetching user based on referralCode",error)
  }
}
