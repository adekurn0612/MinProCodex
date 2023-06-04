import { Module } from '@nestjs/common';
import { RouteActionsService } from './route_actions.service';
import { RouteActionsController } from './route_actions.controller';

@Module({
  controllers: [RouteActionsController],
  providers: [RouteActionsService]
})
export class RouteActionsModule {}
