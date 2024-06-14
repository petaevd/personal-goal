import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['container__about']}>
          <h2>О нас</h2>
          <p>Мы помогаем вам достигать ваших целей и управлять временем эффективно.</p>
        </div>
        <div className={styles['container__links']}>
          <h2>Полезные ссылки</h2>
          <ul>
            <li><a href="#goals">Мои цели</a></li>
            <li><a href="#plan">План действий</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div>
        <div className={styles['container__contact']}>
          <h2>Контакты</h2>
          <p>Email: info@example.com</p>
          <p>Телефон: +123 456 7890</p>
        </div>
        <div className={styles['container__social']}>
          <h2>Мы в соцсетях</h2>
          <div className={styles['icons']}>
            <a href="#facebook">FB</a>
            <a href="#twitter">TW</a>
            <a href="#instagram">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
