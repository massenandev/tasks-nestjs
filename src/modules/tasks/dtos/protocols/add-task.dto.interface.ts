import { TaskPriority } from "../../data/protocols/task-priority.enum";
import { TaskStatus } from "../../data/protocols/task-status.enum";

export interface IAddTaskDTO {
  name: string;
  execDate: string;
  status: TaskStatus;
  priority: TaskPriority;
}