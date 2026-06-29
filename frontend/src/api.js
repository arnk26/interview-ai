const MCQ_API = "https://backend-cxet.onrender.com/api/mcq";

export const generateMCQQuestions = async ({ topic, count, language }) => {
  const res = await fetch(`${MCQ_API}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: topic.trim(),
      count: Number(count),
      language,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.log("Backend Error:", data);
    throw new Error(data.error || data.message || "MCQ generate failed");
  }

  return data;
};