import { useState } from "react";
import "../css/MCQTest.css";
import Navbar from "./Navbar";

import { generateMCQQuestions } from "../api";

function MCQTest() {
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(10);
  const [language, setLanguage] = useState("English");

  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const generateMCQ = async () => {
    if (!topic.trim()) {
      alert("Pehle topic likho.");
      return;
    }

    setLoading(true);
    setSubmitted(false);
    setSelected({});
    setQuestions([]);

    try {
      const data = await generateMCQQuestions({
        topic: topic.trim(),
        count: Number(count),
        language,
      });

      setQuestions((data.questions || []).slice(0, Number(count)));
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const selectOption = (qIndex, optionIndex) => {
    if (submitted) return;

    setSelected((prev) => ({
      ...prev,
      [qIndex]: optionIndex,
    }));
  };

  const submitTest = () => {
    if (Object.keys(selected).length < questions.length) {
      const ok = window.confirm("Kuch questions blank hain. Submit karna hai?");
      if (!ok) return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const total = questions.length;

  const correct = questions.filter(
    (q, i) => Number(selected[i]) === Number(q.correctIndex)
  ).length;

  const wrong = total - correct;

  return (

    <>  < Navbar/>
    <div className="mcq-page">
   

      <section className="mcq-hero">
       

<div className="mcq-image-box">
  <img
    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    alt="MCQ AI"
  />
</div>
        <div className="mcq-hero-left">
          <p className="mcq-tag">🚀 AI POWERED MCQ PRACTICE</p>

          <h1>
            Choose Topic.
            <br />
            Start MCQ Test.
          </h1>

          <p className="mcq-desc">
            Apna topic, question count aur language select karo. AI aapke liye
            selected language me MCQ test generate karega.
          </p>

          <div className="mcq-search"> type a subject name
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generateMCQ()}
              placeholder="Enter topic: React, JavaScript, GK..."
            />

            <select value={count} onChange={(e) => setCount(e.target.value)}>
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
              <option value="20">20 Questions</option>
              <option value="30">30 Questions</option>
              <option value="50">50 Questions</option>
            </select>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Marathi">Marathi</option>
            </select>

            <button onClick={generateMCQ} disabled={loading}>
              {loading ? "Generating..." : "Generate MCQ"}
            </button>
          </div>
        </div>

        <div className="mcq-hero-card">
          <h2>📚 Test Summary</h2>

          <div className="summary-row">
            <span>Total Questions</span>
            <b>{count}</b>
          </div>

          <div className="summary-row">
            <span>Language</span>
            <b>{language}</b>
          </div>

          <div className="summary-row">
            <span>Result</span>
            <b>Instant</b>
          </div>
        </div>
      </section>

      {questions.length > 0 && (
        <div className="mcq-result-box">
          <h2>
            {topic} MCQ Test ({language})
          </h2>

          {submitted && (
            <div className="mcq-score">
              <div>
                <b>{correct}/{total}</b>
                <span>Score</span>
              </div>

              <div>
                <b>{correct}</b>
                <span>Correct ✅</span>
              </div>

              <div>
                <b>{wrong}</b>
                <span>Wrong ❌</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mcq-list">
        {questions.map((q, qIndex) => {
          const userAns = selected[qIndex];
          const isCorrect = Number(userAns) === Number(q.correctIndex);

          return (
            <div
              className={`mcq-card ${
                submitted ? (isCorrect ? "correct-card" : "wrong-card") : ""
              }`}
              key={qIndex}
            >
              <h3>
                Q{qIndex + 1}. {q.question}
              </h3>

              <div className="mcq-options">
                {(q.options || []).map((op, opIndex) => {
                  let className = "mcq-option";

                  if (Number(selected[qIndex]) === Number(opIndex)) {
                    className += " selected";
                  }

                  if (submitted && Number(opIndex) === Number(q.correctIndex)) {
                    className += " true";
                  }

                  if (
                    submitted &&
                    Number(selected[qIndex]) === Number(opIndex) &&
                    Number(opIndex) !== Number(q.correctIndex)
                  ) {
                    className += " false";
                  }

                  return (
                    <button
                      key={opIndex}
                      className={className}
                      onClick={() => selectOption(qIndex, opIndex)}
                    >
                      <span>{String.fromCharCode(65 + opIndex)}</span>
                      {op}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mcq-feedback">
                  {isCorrect ? (
                    <p className="true-text">Correct Answer ✅</p>
                  ) : (
                    <p className="false-text">
                      Wrong ❌ Correct Answer:{" "}
                      <b>{q.options?.[q.correctIndex]}</b>
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {questions.length > 0 && !submitted && (
        <button className="submit-test" onClick={submitTest}>
          Submit Test →
        </button>
      )}
    </div>
    </>
  );
}

export default MCQTest;