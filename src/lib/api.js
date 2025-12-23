const BASE_URL = "https://project002-backend.vercel.app/api"; // Your backend URL

// Fetch contact info
export const fetchContact = async () => {
  try {
    const res = await fetch(`${BASE_URL}/contact`);
    if (!res.ok) throw new Error("Failed to fetch contact info");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Fetch users (example)
export const fetchUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Add more API calls here as your backend grows
