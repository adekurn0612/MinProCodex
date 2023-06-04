import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteActionDto } from './create-route_action.dto';

export class UpdateRouteActionDto extends PartialType(CreateRouteActionDto) {}
