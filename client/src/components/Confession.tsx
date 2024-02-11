import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Confession: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: "",
    reason: "select",
    details: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const randomCitizenId = Math.floor(Math.random() * 10000);

  const handleInputChange = (e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "reason" && value === "select") {
      setErrorMessage("Please select a reason.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.message || "Something went wrong!");
      }

      const data = await response.json();

      if (data.success && !data.justTalked) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage((error as Error)?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const { subject, reason, details } = formData;
    if (!subject || !details || reason === "select") {
      setErrorMessage("Please fill out all required fields.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <p>
            It's very difficult to catch people committing misdemeanours so we
            appreciate it when citizens confess to us directly.
          </p>
          <p>
            However, if you're just having a hard day and need to vent then
            you're welcome to contact us here too. Up to you!
          </p>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="reason">Reason for Contact:</label>
              <br />
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
              >
                <option value="select">Select</option>
                <option value="rudeness">Mild Public Rudeness 🤪</option>
                <option value="lift">Speaking in a Lift 🗣</option>
                <option value="vegetables">Not Eating Your Vegetables 🥗</option>
                <option value="united">Supporting Manchester United 😈</option>
                <option value="just-talk">I just want to talk 💬</option>
              </select>
              <br />
              <textarea
                id="details"
                name="details"
                value={formData.details}
                rows={4}
                cols={50}
                onChange={handleInputChange}
              ></textarea>
              <br />
              <input
                type="submit"
                value={loading ? "Submitting..." : "Confess"}
                disabled={loading}
              />
              {errorMessage && <p>{errorMessage}</p>}
            </form>
          </div>
        </section>
      </main>
      {submitted && (
        <div>
          <h2>Thank you for your confession</h2>
          <p>
            <Link
              to={`/misdemeanours/${encodeURIComponent(
                JSON.stringify({
                  citizenId: randomCitizenId,
                  misdemeanour: formData.reason,
                  date: today.toLocaleDateString(),
                })
              )}`}
            >
              View your confession on the misdemeanour page
            </Link>
          </p>
          <p>Subject: {formData.subject}</p>
          <p>Reason: {formData.reason}</p>
          <p>Details: {formData.details}</p>
        </div>
      )}
    </div>
  );
};

export default Confession;
