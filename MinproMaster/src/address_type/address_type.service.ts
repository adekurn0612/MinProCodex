import { Injectable } from '@nestjs/common';
import { CreateAddressTypeDto } from './dto/create-address_type.dto';
import { UpdateAddressTypeDto } from './dto/update-address_type.dto';

@Injectable()
export class AddressTypeService {
  create(createAddressTypeDto: CreateAddressTypeDto) {
    return 'This action adds a new addressType';
  }

  findAll() {
    return `This action returns all addressType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressType`;
  }

  update(id: number, updateAddressTypeDto: UpdateAddressTypeDto) {
    return `This action updates a #${id} addressType`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressType`;
  }
}
