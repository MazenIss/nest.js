import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstMiddleware } from './middlewares/first.middleware';
import { logger } from './middlewares/logger.middleware';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [PremierModule,
     TodoModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'nest',
      entities:["dist/**/*.entity{.ts,.js}"],
      synchronize:true,  
    })],
  controllers: [AppController, ],
  providers: [AppService,],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes('todo');
    consumer.apply(logger).forRoutes('todo');

  }
}
