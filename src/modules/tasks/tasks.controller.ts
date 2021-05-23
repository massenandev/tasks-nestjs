import { ITasksService } from './protocols/tasks.service.interface';
import { 
  Body, 
  Controller, 
  HttpCode, 
  HttpStatus, 
  Inject, 
  Post 
} from '@nestjs/common';
import { TaskProvider } from './providers/task.provider.enum';
import { AddTaskDTO } from './dtos/add-task.dto';
import { TaskDTO } from './dtos/task.dto';

@Controller('tasks')
export class TasksController {
  constructor (
    @Inject(TaskProvider.TASKS_SERVICE)
    private readonly tasksService: ITasksService
  ) {}
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  add(@Body() dto: AddTaskDTO): Promise<TaskDTO> {
    return this.tasksService.add(dto);
  }
}
