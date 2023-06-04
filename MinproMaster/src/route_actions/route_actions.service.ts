import { Injectable } from '@nestjs/common';
import { CreateRouteActionDto } from './dto/create-route_action.dto';
import { UpdateRouteActionDto } from './dto/update-route_action.dto';

@Injectable()
export class RouteActionsService {
  create(createRouteActionDto: CreateRouteActionDto) {
    return 'This action adds a new routeAction';
  }

  findAll() {
    return `This action returns all routeActions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routeAction`;
  }

  update(id: number, updateRouteActionDto: UpdateRouteActionDto) {
    return `This action updates a #${id} routeAction`;
  }

  remove(id: number) {
    return `This action removes a #${id} routeAction`;
  }
}
