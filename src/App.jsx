import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.product}>
      <img
        className={styles["product-image"]}
        src="/image-product-desktop.jpg"
        alt="Chanel perfume"
      />
      <div className={styles["product-info"]}>
        <p className={styles.type}>Perfume</p>
        <h1 className={styles.name}>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.price}>
          <h2 className={styles.new}>$149.99</h2>
          <p className={styles.old}>$169.99</p>
        </div>
        <button className={styles.cta}>
          <img
            src="/icon-cart.svg"
            alt="Add to cart"
            className={styles["cta-icon"]}
          />
          Add to Cart
        </button>
      </div>
    </main>
  );
};
