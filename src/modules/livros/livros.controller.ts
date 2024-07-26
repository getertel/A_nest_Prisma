import { Body, Controller, Post } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { LivrosDTO } from './livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

@Post
async create(@Body() data: LivrosDTO) {
  return this.livrosService.create(data);
}

}
