import { TaskPriority } from '../data/protocols/task-priority.enum';
import { TaskStatus } from '../data/protocols/task-status.enum';
import { IAddTaskDTO } from './protocols/add-task.dto.interface';

export class AddTaskDTO implements IAddTaskDTO {
  name: string;
  execDate: string;
  status: TaskStatus;
  priority: TaskPriority;
}