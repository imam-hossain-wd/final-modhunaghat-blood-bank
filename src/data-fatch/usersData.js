

// export const allUsers = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`)
//     const users = await res.json()
//     return users
// }



export const allUsers = async () => {
  try {
    const response = await axiosInstance.get('/user'); // Make the request using Axios instance
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error to handle it further up the chain
  }
};
