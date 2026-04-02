export const fetchGameData = async (date) => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}?date=${date}`);
  return response.json();
};