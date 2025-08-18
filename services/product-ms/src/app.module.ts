import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsCategoryNameTranslationModule } from './products-category-name-translation/products-category-name-translation.module';
import { join } from 'path';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: join(__dirname, 'products.sqlite'),
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductsModule,
    ProductsCategoryNameTranslationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
