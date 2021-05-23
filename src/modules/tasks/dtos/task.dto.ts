import { TaskPriority } from "../data/protocols/task-priority.enum";
import { TaskStatus } from "../data/protocols/task-status.enum";

export class TaskDTO {
  name: string;
  execDate: string;
  status: TaskStatus;
  priority: TaskPriority;
} 