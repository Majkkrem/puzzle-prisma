import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { PuzzleService } from './puzzle.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { UpdatePuzzleDto } from './dto/update-puzzle.dto';

@Controller('puzzles')
export class PuzzleController {
  constructor(private readonly puzzleService: PuzzleService) {}

  @Post()
  create(@Body() createPuzzleDto: CreatePuzzleDto) {
    if (!createPuzzleDto.pictureUrl || !createPuzzleDto.pieces || createPuzzleDto.pieces < 20) {
      throw new BadRequestException('Invalid input');
    }
    return this.puzzleService.create(createPuzzleDto);
  }

  @Get()
  findAll() {
    return this.puzzleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const puzzle = this.puzzleService.findOne(parseInt(id, 10));
    if (!puzzle) {
      throw new NotFoundException('Puzzle not found');
    }
    return puzzle;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuzzleDto: UpdatePuzzleDto) {
    const puzzle = this.puzzleService.findOne(parseInt(id, 10));
    if (!puzzle) {
      throw new NotFoundException('Puzzle not found');
    }
    if (updatePuzzleDto.pieces !== undefined && updatePuzzleDto.pieces < 20) {
      throw new BadRequestException('Invalid pieces count');
    }
    return this.puzzleService.update(parseInt(id, 10), updatePuzzleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const puzzle = this.puzzleService.findOne(parseInt(id, 10));
    if (!puzzle) {
      throw new NotFoundException('Puzzle not found');
    }
    return this.puzzleService.remove(parseInt(id, 10));
  }
}