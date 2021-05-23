import { ITasksService } from './protocols/tasks.service.interface';
import { Injectable } from '@nestjs/common';
import { IAddTaskDTO } from './dtos/protocols/add-task.dto.interface';
import { ITaskDTO } from './dtos/protocols/task.dto.interface';

@Injectable()
export class TasksService implements ITasksService{
  add(dto: IAddTaskDTO): Promise<ITaskDTO> {
    throw new Error('Method not implemented.');
  }
}
