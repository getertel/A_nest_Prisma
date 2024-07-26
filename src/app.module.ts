import { Module } from '@nestjs/common';
import { LivrosModule } from './modules/livros/livros.module';


@Module({
  imports: [LivrosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
