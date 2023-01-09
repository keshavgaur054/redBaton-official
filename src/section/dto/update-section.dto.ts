import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateSectionDto } from './create-section.dto';

export class UpdateSectionDto extends PartialType(CreateSectionDto) {

    @IsString()
    updatedBy: string;
}
