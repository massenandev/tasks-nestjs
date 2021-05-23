import { TaskPriority } from "../../data/protocols/task-priority.enum";
import { TaskStatus } from "../../data/protocols/task-status.enum";

export interface ITaskDTO {
  id: string;
  userId: string;
  name: string;
  execDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  endDate: string;
}
