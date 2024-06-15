import { useState, ChangeEvent, FormEvent } from 'react';
import { EditGoalFormProps, GoalData } from '@components/form/EditGoalForm/types.ts';
import styles from './EditGoalForm.module.css';

const EditGoalForm = ({ initialData, onClose, onAddGoal }: EditGoalFormProps) => {
  const [formData, setFormData] = useState<GoalData>(initialData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddGoal(formData);
  };

  return (
    <form className={styles['edit-goal-form']} onSubmit={handleSubmit}>
      <h2>Редактировать цель</h2>
      <label>
        Название:
        <input type="text" name="title" value={formData.title} onChange={handleChange}/>
      </label>
      <label>
        Описание:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Теги:
        <input type="text" name="tags" value={formData.tags} onChange={handleChange} />
      </label>
      <label>
        Начало:
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
      </label>
      <label>
        Дедлайн:
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
      </label>
      <button type="submit" className={styles['edit-goal-form__save-button']}>Сохранить</button>
      <button type="button" onClick={onClose} className={styles['edit-goal-form__cancel-button']}>Отмена</button>
    </form>
  );
};

export default EditGoalForm;
