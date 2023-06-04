import { Module } from '@nestjs/common';
import { AddressTypeService } from './address_type.service';
import { AddressTypeController } from './address_type.controller';

@Module({
  controllers: [AddressTypeController],
  providers: [AddressTypeService]
})
export class AddressTypeModule {}
