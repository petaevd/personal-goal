import { useEffect } from 'react';
import styles from './Goals.module.css';
import GoalsTitle from '@components/ui/Goals/GoalsTitle/GoalsTitle.tsx';
import GoalCard from '@components/ui/Goals/GoalCard/GoalCard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoals } from '@/redux/slices/goals.ts';

function Board() {
  const dispatch = useDispatch();
  const goals = useSelector(state => state.goals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, []);


  return (
    <div className={styles['goals']}>
      <GoalsTitle />
      <div className={styles['goalList']}>
        {goals.items.map((obj, index) => (
          <GoalCard
            key={index}
            title={obj.title}
            description={obj.description}
            tags={obj.tags}
            startDate={obj.startDate}
            endDate={obj.endDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
