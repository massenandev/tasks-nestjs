import { IAddTaskDTO } from "../dtos/protocols/add-task.dto.interface";
import { ITaskDTO } from "../dtos/protocols/task.dto.interface";

export interface ITasksService {
  add(dto: IAddTaskDTO): Promise<ITaskDTO>
}