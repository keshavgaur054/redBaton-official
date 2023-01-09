import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePageDto } from './create-page.dto';

export class UpdatePageDto extends PartialType(CreatePageDto) {
    @IsString()
    updatedBy: string;
}
