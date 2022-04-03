export const PRIORITY = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
};

export type Task = {
  id: number;
  title: string;
  priority: typeof PRIORITY[keyof typeof PRIORITY];
  completed: boolean;
};
