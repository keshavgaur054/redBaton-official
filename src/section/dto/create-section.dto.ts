import { IsObject, IsString } from "class-validator";

export class CreateSectionDto {
    @IsString()
    id: string;

    @IsString()
    page_id: string;

    @IsObject()
    contents:[string]
    
    @IsObject()
    children: [string]
}
