import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import Navbar from "./Navbar";

function Home() {
  const navigate = useNavigate();

  const topics = [
    "General Knowledge",
    "Current Affairs",
    "History",
    "Geography",
    "Science",
    "Mathematics",
    "English Grammar",
    "Reasoning",
    "Aptitude",
    "Computer Basics",
    "Economics",
    "Polity",
  ];

  return (
    <> <Navbar />
    <div className="interview-page">
      <main className="hero-box">
        <section className="left">
          <p className="tag">🚀 AI POWERED MCQ QUESTION PLATFORM</p>

          <h1 className="hero-title">
            Practice Smart
            <br />
            <span>MCQ Questions</span>
            <br />
            With AI
          </h1>

          <p className="desc">
            Generate subject-wise MCQ questions with options, answers and
            instant result. Improve your speed, accuracy and exam preparation
            with AI-based practice tests.
          </p>

          

          <button className="hero-btn" onClick={() => navigate("/mcq")}>
            Start Free Practice →
          </button>

          <p className="try">POPULAR SUBJECTS</p>

          <div className="cards">
            {topics.map((item) => (
              <button
                key={item}
                className="card"
                onClick={() => navigate("/mcq")}
              >
                📚 {item}
              </button>
            ))}
          </div>
        </section>

        <section className="right">
  <div className="image-card">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
      alt="AI Learning"
    />

    <h3>AI Based MCQ Practice</h3>
    <p>
      Select topic, generate questions, choose answers and check your result
      instantly.
    </p>
  </div>

  <div className="stats-card">
    <div className="top-badge">QUESTION PRACTICE</div>

    <h2>📚 Test Features</h2>

    <div className="stat">
      <span>Subjects Available</span>
      <strong>12+</strong>
    </div>

    <div className="stat">
      <span>Question Format</span>
      <strong>MCQ</strong>
    </div>

    <div className="stat">
      <span>Answer Check</span>
      <strong>Auto</strong>
    </div>

    <div className="stat">
      <span>Result</span>
      <strong>Instant</strong>
    </div>

    <button className="start-btn" onClick={() => navigate("/mcq")}>
      Start MCQ Test →
    </button>
  </div>
</section>
        
      </main>
    </div>
    </>
  );
}

export default Home;