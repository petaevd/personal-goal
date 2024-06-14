import styles from './GoalCard.module.css';
import { GoalCardProps } from '@components/ui/Goals/GoalCard/types.ts';

const GoalCard = ({ title, description, tags, startDate, endDate } : GoalCardProps) => {
  return (
    <div className={styles['goalCard']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Тег:</strong> {tags}</p>
      <p><strong>Начало:</strong> {startDate}</p>
      <p><strong>Дедлайн:</strong> {endDate}</p>
    </div>
  );
};

export default GoalCard;
