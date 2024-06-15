export interface GoalData {
  title: string;
  description: string;
  tags: string;
  startDate: string;
  endDate: string;
}

export interface EditGoalFormProps {
  initialData: GoalData;
  onClose: () => void;
  onAddGoal: (goal: GoalData) => void;
}