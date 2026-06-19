import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("welcome");

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>

      <h1 style={{ color: "#4f46e5" }}>Delego</h1>

      {view === "welcome" && (
        <div>
          <h2>Welcome 👋</h2>
          <p>You have candidates ready to review</p>
          <button onClick={() => setView("list")}>
            View Candidates
          </button>
        </div>
      )}

      {view === "list" && (
        <div>
          <h2>Top Candidates</h2>

          <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
            <p><strong>Score:</strong> 88</p>
            <p>Strong communicator with great organisation</p>
            <button onClick={() => setView("detail")}>
              View
            </button>
          </div>
        </div>
      )}

      {view === "detail" && (
        <div>
          <button onClick={() => setView("list")}>← Back</button>

          <h2>Candidate Details</h2>

          <p><strong>Score:</strong> 88</p>

          <h3>Summary</h3>
          <p>Very professional, strong communication skills</p>

          <h3>Answers</h3>
          <pre>{JSON.stringify({ q1: "Example answer" }, null, 2)}</pre>

          <button>Shortlist</button>
          <button style={{ marginLeft: 10 }}>Reject</button>
        </div>
      )}

    </div>
  );
}