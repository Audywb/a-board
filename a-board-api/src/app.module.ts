import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/auth/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://audywork1208:NYqkX5TUKI6G8B1d@cluster0.esrhtoj.mongodb.net',{dbName:'test'}),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
