import styles from './Board.module.css';
import {Link} from 'react-router-dom';

function Board() {
  return (
    <div className={styles['board']}>
      <div className={styles['board__title']}>
        <h1>Достигай Своих Целей</h1>
      </div>
      <section className={styles['board__info']}>
        <div className={styles['board__info__card']}>
          <h2>Ставь Цели</h2>
          <p>Определите свои краткосрочные и долгосрочные цели, чтобы видеть прогресс и оставаться мотивированным.</p>
        </div>
        <div className={styles['board__info__card']}>
          <h2>Следуй За Мечтой</h2>
          <p>Создайте план действий и выполняйте его, чтобы достичь своих целей и сделать мечты реальностью.</p>
        </div>
        <div className={styles['board__info__card']}>
          <h2>Управляй Временем</h2>
          <p>Организуйте свои задачи и время для максимальной продуктивности и эффективности.</p>
        </div>
      </section>
      <section className={styles['call-to-action']}>
        <h2>Присоединяйтесь к Нам</h2>
        <p>Зарегистрируйтесь сейчас, чтобы начать свой путь к успеху и достичь всех своих целей.</p>
        <Link  className={styles['register-button']} to="/register">Зарегистрироваться</Link>
      </section>
    </div>
  );
}

export default Board;
