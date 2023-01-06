import { Button } from "react-bootstrap";
import "./GitHubCard.css";

function GitHubCard() {
  return (
    <div className="GitHubCard">
      <header className="GitHubCard-header">
        <p>bendmcintyre</p>
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/11/27/cartoon-businessman-in-suit-portrait-in-circle-vector-17571127.jpg"
          className="GitHubCard-photo"
        />
        <p>I love food.</p>
      </header>
    </div>
  );
}

export default GitHubCard;
