import { useState } from 'react';
import styles from './GoalsTitle.module.css';
import CreateGoal from '@/modal/CreateGoal/CreateGoal.tsx';
import AddGoalForm from '@components/form/AddNewGoal/AddGoalForm.tsx';
import axios from '@/axios.ts';

function GoalsTitle() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddGoal = async (goal: { title: string; description: string; tags: string; startDate: string; endDate: string }) => {
    console.log('New Goal:', goal);
    const { data } = await axios.post('/goals', goal);
    console.log(data);
  };

  return (
    <div className={styles['goals-header']}>
      <h1 className={styles['goals-header__title']}>
        Цели
      </h1>
      <button className={styles['goals-header__add-goal-button']} onClick={handleOpenModal}>
        Добавить цель
      </button>
      <CreateGoal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddGoalForm onClose={handleCloseModal} onAddGoal={handleAddGoal} />
      </CreateGoal>
    </div>
  );
}

export default GoalsTitle;
