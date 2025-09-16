import React, { useState } from "react";
import styles from "./FeedbackModalHome.module.css";

const FeedbackHome = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!feedback.trim()) return;

    setIsSubmitting(true);

    try {
      console.log("Feedback submitted:", feedback);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalContent}>
      <div className={styles.leftSection}>
        <h2 className={styles.hashtag}>#SharingEML</h2>
        <p className={styles.subtitle}>Jaring pendapat publik untuk AEML</p>
      </div>

      <div className={styles.rightSection}>
        <form onSubmit={handleSubmit} className={styles.feedbackForm}>
          <h3 className={styles.formTitle}>
            Apa pendapatmu tentang kendaraan listrik di Indonesia?
          </h3>

          <div className={styles.textareaContainer}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Ketik jawaban kamu disini..."
              className={styles.textarea}
              rows={5}
              maxLength={500}
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!feedback.trim() || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner}></div>
                Mengirim...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackHome;
