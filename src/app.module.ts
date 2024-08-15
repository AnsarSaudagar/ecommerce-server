import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionManager } from 'typeorm';
require('dotenv').config();

const connectionManager = getConnectionManager();
console.log(connectionManager);


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
    }
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
