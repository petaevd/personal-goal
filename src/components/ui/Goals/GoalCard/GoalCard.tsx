import styles from './GoalCard.module.css';
import { GoalCardProps } from '@components/ui/Goals/GoalCard/types.ts';

const GoalCard = ({ title, description, tags, startDate, endDate, onEdit, onDelete }: GoalCardProps) => {
  return (
    <div className={styles['goalCard']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Тег:</strong> {tags}</p>
      <p><strong>Начало:</strong> {startDate}</p>
      <p><strong>Дедлайн:</strong> {endDate}</p>
      <button onClick={onEdit} className={styles['edit']}>Редактировать</button>
      <button onClick={onDelete} className={styles['delete']}>Удалить</button>
    </div>
  );
};

export default GoalCard;
