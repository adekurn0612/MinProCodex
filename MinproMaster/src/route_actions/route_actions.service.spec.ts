import { Test, TestingModule } from '@nestjs/testing';
import { RouteActionsService } from './route_actions.service';

describe('RouteActionsService', () => {
  let service: RouteActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouteActionsService],
    }).compile();

    service = module.get<RouteActionsService>(RouteActionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
