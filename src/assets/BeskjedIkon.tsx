import styles from "./Ikon.module.css";

const BeskjedIkon = () => {
  return (
    <svg
      className={styles.varselIkon}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Chat">
        <path
          id="shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 4.75C5.30964 4.75 4.75 5.30964 4.75 6V18.6754L8.61413 16.3569C8.73069 16.2869 8.86407 16.25 9 16.25H18C18.6904 16.25 19.25 15.6904 19.25 15V6C19.25 5.30964 18.6904 4.75 18 4.75H6ZM3.25 6C3.25 4.48122 4.48122 3.25 6 3.25H18C19.5188 3.25 20.75 4.48122 20.75 6V15C20.75 16.5188 19.5188 17.75 18 17.75H9.20774L4.38587 20.6431C4.15417 20.7821 3.86561 20.7858 3.63048 20.6527C3.39534 20.5195 3.25 20.2702 3.25 20V6Z"
          fill="#23262A"
        />
      </g>
    </svg>
  );
};

export default BeskjedIkon;
