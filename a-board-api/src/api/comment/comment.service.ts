import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from '../../schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const { username, comment, postId } = createCommentDto;
    const create_at = new Date();
    console.log(username, comment, postId, create_at)
    const newComment = new this.commentModel({ username, comment, postId, create_at });
    return newComment.save();
  }

  async findCommentsByPostId(postId: string): Promise<Comment[]> {
    return this.commentModel.find({ postId }).sort({ create_at: -1 }).exec();
  }
}
