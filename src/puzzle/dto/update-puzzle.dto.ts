import { PartialType } from '@nestjs/mapped-types';
import { CreatePuzzleDto } from './create-puzzle.dto';
import { IsBoolean, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdatePuzzleDto extends PartialType(CreatePuzzleDto) {

    @IsOptional()
    @IsString()
    picutreURL?: string;

    @IsOptional()
    @IsNumber()
    @Min(20)
    pieces?: number;

    @IsOptional()
    @IsBoolean()
    beforeChristmas?: boolean;
}
