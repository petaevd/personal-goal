export interface GoalCardProps {
  title: string;
  description: string;
  tags: string;
  startDate: string;
  endDate: string;
  onEdit: () => void;
  onDelete: () => void;
}