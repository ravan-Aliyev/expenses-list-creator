import styles from "./ErrorModal.module.css";

const ErrorModal = function (props) {
  const clickHandler = () => {
    props.onCloseError();
  };
  return (
    <>
      <div className={styles.backdrop} onClick={clickHandler}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <main className={styles.content}>
          <p>{props.errorMessage}</p>
        </main>
        <footer className={styles.actions}>
          <button type="button" onClick={clickHandler}>
            Close
          </button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;
