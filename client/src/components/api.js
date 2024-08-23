const LOCALHOST = "mongodb+srv://DAVIDPIYUSH:Piyush251@cluster0.gmc88id.mongodb.net/"

export const getMongoIdByAddress = async (ethereumAddress) => {
  try {
    const response = await fetch(`${LOCALHOST}get-id-by-address/${ethereumAddress}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data.data._id, "this is coming from line 14");
    return data.data._id;
  } catch (error) {
    console.error("Error fetching MongoDB _id:", error);
    throw error;
  }
};

export const fetchDataAndSend = async (data) => {
  try {
    const { ethereumId } = data; // Extract ethereumId from data

    // Check if the user already exists
    const userResponse = await fetch(`${LOCALHOST}user/${ethereumId}`);
    if (userResponse.ok) {
      console.log("User already exists. No need to post data.");
      return; // Exit the function if user already exists
    }

    // Post the data if user does not exist
    const postResponse = await fetch(`${LOCALHOST}create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!postResponse.ok) {
      throw new Error('Network response was not ok');
    }

    console.log("You have been added to the system!");
  } catch (error) {
    if (error.message.includes('404')) {
      // Handle case where user is not found
      try {
        const postResponse = await fetch(`${LOCALHOST}create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!postResponse.ok) {
          throw new Error('Network response was not ok');
        }

        console.log("You have been added to the system!");
      } catch (postError) {
        console.error('Error sending data:', postError);
      }
    } else {
      console.error('Error checking user or sending data:', error);
    }
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${LOCALHOST}user/${id}`); // Assuming the endpoint is `/user/:id`
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Can't find user based on ID:", error);
    throw error;
  }
};

export const updateUser = async (id, updateData) => {
  try {
    const response = await fetch(`${LOCALHOST}update/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('User updated:', data);
  } catch (error) {
    console.error("Error updating user with ID:", error.message);
  }
};

