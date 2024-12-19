import { IsString, IsInt, IsOptional, Min } from 'class-validator';

export class CreatePuzzleDto {
  @IsString()
  pictureUrl: string;

  @IsInt()
  @Min(20)
  pieces: number;

  @IsOptional()
  @IsString()
  beforeChristmas?: boolean;
}