import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '.';
import { PageModule } from './page/page.module';
import { SectionModule } from './section/section.module';


@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    PageModule,
    SectionModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
