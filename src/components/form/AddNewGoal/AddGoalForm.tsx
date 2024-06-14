import React, { useState } from 'react';
import styles from './AddGoalForm.module.css';

interface AddGoalFormProps {
  onClose: () => void;
  onAddGoal: (goal: { title: string; description: string; tags: string; startDate: string; endDate: string }) => void;
}

const AddGoalForm = ({ onClose, onAddGoal }: AddGoalFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddGoal({ title, description, tags, startDate, endDate });
    onClose();
  };

  return (
    <form className={styles['addGoalForm']} onSubmit={handleSubmit}>
      <h2>Добавить новую цель</h2>
      <label>
        Название:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Описание:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Теги:
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
      </label>
      <label>
        Начало:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <label>
        Дедлайн:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddGoalForm;
