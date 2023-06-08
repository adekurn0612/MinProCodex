import { Injectable } from '@nestjs/common';
import { CreateAddressTypeDto } from './dto/create-address_type.dto';
import { UpdateAddressTypeDto } from './dto/update-address_type.dto';
import { address_type } from 'models';

@Injectable()
export class AddressTypeService {
  create(createAddressTypeDto: CreateAddressTypeDto) {
    return 'This action adds a new addressType';
  }

  async findAll() {
    try {
      const result = await address_type.findAll();
      return result;
    } catch (error) {
      return error.message
    }
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
