import { Controller, Get, Post, Body, Patch, Query, Param, Delete } from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { FilterSectionDto } from './dto/filter-section.dto';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) { }

  @Post()
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Get()
  findAll(@Query() filterSectionDto: FilterSectionDto) {
    return this.sectionService.findAll(filterSectionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSectionDto: UpdateSectionDto) {
  //   return this.sectionService.update(id, updateSectionDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionService.remove(id);
  }
}
