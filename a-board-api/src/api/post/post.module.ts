import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostSchema } from 'src/schemas/post.schema';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }]),
    ],
    providers: [PostService],
    controllers: [PostController],
  })
  export class PostModule {}