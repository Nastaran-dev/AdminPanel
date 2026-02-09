import axios from "axios";
export const Loginservice = async ({ username, password }) => {
  try {
    const res = await axios.post("https://69536ae3a319a928023b6064.mockapi.io/AdminPanel", {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("Loginservice error:", error.response?.data || error.message);
    throw error;
  }
};
