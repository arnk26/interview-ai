import { Link } from "react-router-dom";
import "../css/Result.css";
import Navbar from "./Navbar";

function Result() {
  return (
    <>
      

      <div className="result-page">
        <section className="result-box">
          <p className="result-tag">🎉 TEST COMPLETED</p>

          <h1>Your MCQ Result</h1>
          <p className="result-desc">
            Great job! Check your score, accuracy and performance summary below.
          </p>

          <div className="score-circle">
            <h2>42/50</h2>
            <span>Score</span>
          </div>

          <div className="result-cards">
            <div className="result-card">
              <h3>✅ Correct</h3>
              <b>42</b>
            </div>

            <div className="result-card">
              <h3>❌ Wrong</h3>
              <b>8</b>
            </div>

            <div className="result-card">
              <h3>🎯 Accuracy</h3>
              <b>84%</b>
            </div>

            <div className="result-card">
              <h3>📚 Total Questions</h3>
              <b>50</b>
            </div>
          </div>

          <div className="result-actions">
            <Link to="/mcq" className="primary-btn">
              Try Again
            </Link>

            <Link to="/" className="secondary-btn">
              Back Home
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Result;