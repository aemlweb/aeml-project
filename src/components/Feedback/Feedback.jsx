import React, { useState } from "react";
import styles from "./FeedbackModal.module.css";

const Feedback = ({ isOpen, onClose }) => {
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
      onClose();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFeedback("");
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          disabled={isSubmitting}
          aria-label="Tutup modal"
        >
          <svg viewBox="0 0 24 24" className={styles.closeIcon}>
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className={styles.modalBody}>
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
                <div className={styles.charCount}>{feedback.length}/500</div>
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
      </div>
    </div>
  );
};

export default Feedback;
