import { useState, useEffect, useRef } from 'react';
import styles from "./AgeGateModal.module.css";

const AgeGateModal = ({ isOpen, onClose, onConfirm }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const generateRangeReverse = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => end - index);
  };

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const currentYear = new Date().getFullYear();
  const years = generateRangeReverse(currentYear - 100, currentYear);

  const modalRef = useRef(null);

  const handleConfirm = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 

    if (parseInt(selectedYear) < currentYear - 18) {
      onConfirm();
    } else if (parseInt(selectedYear) === currentYear - 18 && parseInt(selectedMonth) <= currentMonth) {
      onConfirm();
    } else {
		
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current.focus();
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      } else if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    }
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay} onKeyDown={handleKeyDown} tabIndex={0}>
        <div className={styles.modal} ref={modalRef} tabIndex={-1}>
          <h2 className={styles.title}>ZYN</h2>
          <h3 className={styles.subtitle}>Please enter your date of birth to confirm you are an adult user of nicotine or tobacco products.</h3>
          <div className={styles.selectWrapper}>
            <select className={styles.ageSelect} value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="">Month</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
            </select>
            <select className={styles.ageSelect} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <button className={styles.btn} onClick={handleConfirm}>Confirm</button>

          <p>This website is restricted to adults in United Kingdom who would otherwise continue to smoke or use nicotine products. Our Nicotine products are not an alternative to quitting and are not designed as cessation aids. They are not risk-free. They contain nicotine which is addictive. Only for use by adults. Please visit important information page for further risk information.</p>
        </div>
      </div>
    )
  );
};

export default AgeGateModal;
