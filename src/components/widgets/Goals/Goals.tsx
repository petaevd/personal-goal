import { useState } from 'react';
import styles from './Goals.module.css';
import GoalsTitle from '@components/ui/Goals/GoalsTitle/GoalsTitle.tsx';
import GoalCard from '@components/ui/Goals/GoalCard/GoalCard.tsx';
import { Goal} from '@components/widgets/Goals/types.ts';


function Board() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      title: 'Learn React',
      description: 'Understand the basics of React.js',
      topic: 'Programming',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
    },
    {
      title: 'Learn React dvde',
      description: 'Understand the basics of React.js Картина компьютер молоко кефир',
      topic: 'Programming',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
    },
    {
      title: 'Полететь в Китай',
      description: 'Полет в китай на отдых на 2 недели',
      topic: 'Отдых',
      startDate: '2024-01-01',
      endDate: '2024-01-15',
    },
    {
      title: 'Learn React dvde',
      description: 'Understand the basics of React.js Картина компьютер молоко кефир',
      topic: 'Programming',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
    }
  ]);

  return (
    <div className={styles['goals']}>
      <GoalsTitle />
      <div className={styles['goalList']}>
        {goals.map((goal, index) => (
          <GoalCard
            key={index}
            title={goal.title}
            description={goal.description}
            topic={goal.topic}
            startDate={goal.startDate}
            endDate={goal.endDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
