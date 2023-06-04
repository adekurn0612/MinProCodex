import { Test, TestingModule } from '@nestjs/testing';
import { RouteActionsController } from './route_actions.controller';
import { RouteActionsService } from './route_actions.service';

describe('RouteActionsController', () => {
  let controller: RouteActionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RouteActionsController],
      providers: [RouteActionsService],
    }).compile();

    controller = module.get<RouteActionsController>(RouteActionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
