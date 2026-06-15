import { useState } from "react";
import { Link } from "react-router-dom";



function Certificates() {

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certificates-page">
      <Link to="/" className="back-btn">
        ← Back to Portfolio
      </Link>
      <h1>Certificates & Achievements</h1>

      <div className="cert-grid">

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./Screenshot 2026-06-15 165423.png")
          }
        >
          <h3>Python Certification</h3>
          <p>Click to View</p>
        </div>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./SQL.png")
          }
        >
          <h3>Data Science and SQL</h3>
          <p>Click to View</p>
        </div>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./Data Analysis with python.png")
          }
        >
          <h3>Data Analysis with python</h3>
          <p>Click to View</p>
        </div>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./Arduino and C programming.png")
          }
        >
          <h3>Arduino and C programming</h3>
          <p>Click to View</p>
        </div>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./Embedded System Design.png")
          }
        >
          <h3>Embedded System Design</h3>
          <p>Click to View</p>
        </div>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./BuildForBangalore.png")
          }
        >
          <h3>Promptathon</h3>
          <p>Click to View</p>
        </div>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./Hackathon_Certificate.jpeg")
          }
        >
          <h3>Promptathon</h3>
          <p>Click to View</p>
        </div>



      </div>

      {selectedCert && (
        <div
          className="modal"
          onClick={() => setSelectedCert(null)}
        >
          <button
            className="close-btn"
            onClick={() => setSelectedCert(null)}
          >
            ✕
          </button>

          <img
            src={selectedCert}
            alt="Certificate"
            className="modal-image"
          />
        </div>
      )}

      <div>
        <h1>Internships and Work Exprience </h1>

        <div
          className="cert-card"
          onClick={() =>
            setSelectedCert("./Internship Certifiacte.png")
          }
        >
          <h3>Full Stack Internship</h3>
          <p>Click to View</p>
        </div>

      </div>

      {selectedCert && (
        <div
          className="modal"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="Certificate"
            className="modal-image"
          />
        </div>
      )}

    </section>




  );
}

export default Certificates;