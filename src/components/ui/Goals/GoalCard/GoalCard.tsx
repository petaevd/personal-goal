import styles from './GoalCard.module.css';
import { GoalCardProps } from '@components/ui/Goals/GoalCard/types.ts';

const GoalCard = ({ title, description, topic, startDate, endDate } : GoalCardProps) => {
  return (
    <div className={styles['goalCard']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Topic:</strong> {topic}</p>
      <p><strong>Start Date:</strong> {startDate}</p>
      <p><strong>End Date:</strong> {endDate}</p>
    </div>
  );
};

export default GoalCard;
