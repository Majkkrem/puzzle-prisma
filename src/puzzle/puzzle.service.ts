import { Injectable } from '@nestjs/common';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { UpdatePuzzleDto } from './dto/update-puzzle.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PuzzleService {
  constructor(private readonly db: PrismaService) {}

  create(createPuzzleDto: CreatePuzzleDto) {
    return this.db.puzzle.create({
      data: createPuzzleDto,
    });
  }

  findAll() {
    return this.db.puzzle.findMany();
  }

  findOne(id: number) {
    return this.db.puzzle.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updatePuzzleDto: UpdatePuzzleDto) {
    return this.db.puzzle.update({
      where: {
        id: id,
      },
      data: updatePuzzleDto,
    });
  }

  remove(id: number) {
    return this.db.puzzle.delete({
      where: {
        id: id,
      },
    });
  }
}