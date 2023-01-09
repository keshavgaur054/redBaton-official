import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilterPageDto } from './dto/filter-Page.dto';
import { UpdatePageDto } from './dto/update-Page.dto';
import { Page } from './page.model';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page) private page: typeof Page,
  ) { }

  create(data) {
    return this.page.create(data);
  }

  async findAll(query: FilterPageDto) {
    return this.page.findAll();
  }

  findOne(id: string) {
    return this.page.findByPk(id);
  }

  update(id: string, data: UpdatePageDto) {
    return this.page.update(data,
      {
        where: { id }
      }
    );
  }

  remove(id: string) {
    return this.page.destroy(
      {
        where: { id }

      }
    );
  }
}
