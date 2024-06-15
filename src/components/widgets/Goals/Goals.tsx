import { useEffect, useState, useCallback } from 'react';
import styles from './Goals.module.css';
import GoalsTitle from '@components/ui/Goals/GoalsTitle/GoalsTitle.tsx';
import GoalCard from '@components/ui/Goals/GoalCard/GoalCard.tsx';
import { useDispatch, useSelector } from 'react-redux';
import {fetchGoals, fetchDeleteGoal, fetchEditGoal} from '@/redux/slices/goals.ts';
import CreateGoal from '@/modal/CreateGoal/CreateGoal.tsx';
import EditGoalForm from '@components/form/EditGoalForm/EditGoalForm.tsx';

function Goals() {
  const dispatch = useDispatch();
  const goals = useSelector(state => state.goals);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState(null);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const handleOpenModal = (goal) => {
    setCurrentGoal(goal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentGoal(null);
  };

  const handleEditGoal = async (goal) => {
    try {
      dispatch(fetchEditGoal(goal));
      handleCloseModal();
    } catch (error) {
      console.error('Error editing goal:', error);
    }
  };

  const handleDelete = useCallback((id) => {
    dispatch(fetchDeleteGoal(id));
  }, [dispatch]);

  return (
    <div className={styles['goals']}>
      <GoalsTitle />
      <div className={styles['goalList']}>
        {goals.items.map((obj, index : number) => (
          <GoalCard
            key={index}
            title={obj.title}
            description={obj.description}
            tags={obj.tags}
            startDate={obj.startDate}
            endDate={obj.endDate}
            onEdit={() => handleOpenModal(obj)}
            onDelete={() => handleDelete(obj.id)}
          />
        ))}
      </div>
      {currentGoal && (
        <CreateGoal isOpen={isModalOpen} onClose={handleCloseModal}>
          <EditGoalForm
            initialData={currentGoal}
            onClose={handleCloseModal}
            onAddGoal={handleEditGoal}
          />
        </CreateGoal>
      )}
    </div>
  );
}

export default Goals;
