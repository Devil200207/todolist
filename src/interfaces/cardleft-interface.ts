import { ITaskType } from "./task-interface";

export interface ICardLeftProps {
  onDelete: (id: number) => void;
  storeTasksInLocalStorage: (tasks: ITaskType[]) => void;
}
