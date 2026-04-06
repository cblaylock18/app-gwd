export const fetchGameData = async (date) => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}?date=${date}`);
  return response.json();
};

export const checkAnswer = async (questionId, userAnswer) => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/check-answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question_id: questionId, user_answer: userAnswer })
  });
  const data = await response.json();
  return data.correct;
};