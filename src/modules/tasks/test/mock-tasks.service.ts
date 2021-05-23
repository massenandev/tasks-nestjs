import { IAddTaskDTO } from '../dtos/protocols/add-task.dto.interface';
import { ITaskDTO } from '../dtos/protocols/task.dto.interface';
import { mockTaskDTO } from '../dtos/test/mock-task.dto';
import { ITasksService } from './../protocols/tasks.service.interface';

export class TasksServiceSpy implements ITasksService {
  taskDTO = mockTaskDTO();

  async add(dto: IAddTaskDTO): Promise<ITaskDTO> {
    return this.taskDTO;
  }
}