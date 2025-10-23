interface Task {
  id: number;
  name: string;
  completed: boolean;
  isEditing?: boolean; 
  priority?: 'High' | 'Medium' | 'Low';
}