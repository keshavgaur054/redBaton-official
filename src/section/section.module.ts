import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { Section } from './section.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Section])],
  controllers: [SectionController],
  providers: [SectionService]
})
export class SectionModule {}
