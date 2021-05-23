import Faker from 'faker';
import { TaskPriority } from './../../data/protocols/task-priority.enum';
import { TaskStatus } from './../../data/protocols/task-status.enum';
import { ITaskDTO } from './../protocols/task.dto.interface';

export const mockTaskDTO = (): ITaskDTO => ({
  id: Faker.datatype.uuid(),
  userId: Faker.datatype.uuid(),
  name: Faker.name.findName(),
  execDate: Faker.date.past().toISOString(),
  status: Faker.random.objectElement<TaskStatus>(TaskStatus),
  priority: Faker.random.objectElement<TaskPriority>(TaskPriority),
  endDate: Faker.date.recent().toISOString(),
});