import { mockAddTaskDTO } from './dtos/test/mock-add-task.dto';
import { IAddTaskDTO } from './dtos/protocols/add-task.dto.interface';
import { TaskProvider } from './providers/task.provider.enum';
import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksServiceSpy } from './test/mock-tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let tasksService: TasksServiceSpy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TaskProvider.TASKS_SERVICE,
          useClass: TasksServiceSpy,
        },
      ]
    }).compile();

    controller = module.get<TasksController>(TasksController);
    tasksService = module.get<TasksServiceSpy>(
      TaskProvider.TASKS_SERVICE,
    );
  });

  describe('add()', () => {
    let dto: IAddTaskDTO;

    beforeEach(() => {
      dto = mockAddTaskDTO();
    });

    describe('TasksService dependency', () => {
      it('should call add() with correct params', async () => {
        const addSpy = jest.spyOn(tasksService, 'add');

        await controller.add(dto);

        expect(addSpy).toHaveBeenCalledTimes(1);
        expect(addSpy).toHaveBeenCalledWith(dto);
      });

      it('should throw if add() throws', async () => {
        const error = new Error('[TasksService] add() Error');
        jest.spyOn(tasksService, 'add').mockRejectedValueOnce(error);

        const promise = controller.add(dto);

        await expect(promise).rejects.toThrowError(error);
      });
    });

    it('should return TaskDTO on success', async () => {
      const result = await controller.add(dto);

      expect(result).toEqual(tasksService.taskDTO);
    });
  });
});
