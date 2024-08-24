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
    return await axios.post(`${apiUrl}/create`, data);
  } catch (error) {
    console.error("Error while creating user", error);
  }
};

export const updateUserData = async (ethereumId, data) => {
  try {
    await axios.put(`${apiUrl}/user/update/${ethereumId}`, data);
  } catch (error) {
    console.error("Error while updating user", error);
  }
};

export const handleClick = async (ethereumId) => {
  try {
    const response = await axios.post(`${apiUrl}/button-click`, { ethereumId });
    return { success: true, message: response.data.message };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return { success: false, message: error.response.data.message };
    } else {
      console.error("An error occurred:", error);
      return { success: false, message: "An unexpected error occurred" };
    }
  }
};
