import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSectionDto } from './dto/create-section.dto';
import { FilterSectionDto } from './dto/filter-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './section.model';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section) private section: typeof Section,

  ) { }
  create(data) {
    console.log(data)
    return this.section.create(data);
  }

  async findAll(query: FilterSectionDto) {
    return this.section.findAll(query);
  }

  findOne(id: string) {
    return `This action returns a #${id} section`;
  }

  // update(id: string, data: UpdateSectionDto) {
  //   return this.section.update(data,{
  //     where:{id}
  //   });
  // }

  remove(id: string) {
    return this.section.destroy({
      where: { id }
    });
  }
}
