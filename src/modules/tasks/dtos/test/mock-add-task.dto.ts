import Faker from 'faker';
import { TaskPriority } from '../../data/protocols/task-priority.enum';
import { TaskStatus } from '../../data/protocols/task-status.enum';
import { IAddTaskDTO } from './../protocols/add-task.dto.interface';

export const mockAddTaskDTO = (): IAddTaskDTO => ({
  name: Faker.name.findName(),
  execDate: Faker.date.past().toISOString(),
  status: Faker.random.objectElement<TaskStatus>(TaskStatus),
  priority: Faker.random.objectElement<TaskPriority>(TaskPriority),
});