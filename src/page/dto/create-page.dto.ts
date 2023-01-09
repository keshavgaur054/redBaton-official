import {IsObject, IsString } from 'class-validator';

export class CreatePageDto {
    @IsString()
    id: string;

    // @IsString()
    // header: string;

    // @IsString()
    // logo: string;

    // @IsString()
    // title: string;

    // @IsString()
    // description: string;

    // @IsString()
    // image: string;

    // @IsString()
    // slug: string;

    // @IsString()
    // category: string;

    @IsObject()
    contents:[string]

}
