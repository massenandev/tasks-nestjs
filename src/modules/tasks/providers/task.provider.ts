import { TasksService } from './../tasks.service';
import { TaskProvider } from './task.provider.enum';
import { Provider } from "@nestjs/common";

export const tasksServices: Provider[] = [
  {
    provide: TaskProvider.TASKS_SERVICE,
    useClass: TasksService
  }
];

export const tasksProviders: Provider[] = [
  ...tasksServices
]