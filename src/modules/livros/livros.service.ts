import { Injectable } from '@nestjs/common';

import { LivrosDTO } from './livros.dto';
import { PrismaService } from 'src/database/PrismaService';
import { existsSync } from 'fs';

@Injectable()
export class LivrosService {

    constructor(private prisma: PrismaService) {}
  
    async create(data: LivrosDTO) {
       
       const livroExists = await this.prisma.livro.findFirst({
         where: {
            bar_code: data.bar_code
         } 
       })

       if(livroExists) {
        throw new Error("Livro já existe caramba");
       }
       
        const livro = await this.prisma.livro.create({
            data,
        })
    }
}
