import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from 'src/schemas/post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Posts.name) private postModel: Model<Posts>) {}

  async createPost(username: string, community: string, title: string, body: string): Promise<{ message: string, data: string }> {
    const create_at = new Date();
    const newPost = new this.postModel({ username, community, title, body, create_at });
    await newPost.save();
    return { message: 'Success', data: username };
  }

  async findPostByusername(username: string): Promise<Posts[]> {
    return this.postModel.find({ username }).sort({ create_at: -1 }).lean().exec();
  }

  async findPostById(_id: string): Promise<Posts[]> {
    return this.postModel.find({ _id }).lean().exec();
  }

  async findAllPost(): Promise<Posts[]> {
    return this.postModel.find().sort({ create_at: -1 }).lean().exec();
  }

  async updatePostById(id: string, updatedPost: Partial<Posts>): Promise<{ message: string }> {
    try {
      const result = await this.postModel.findByIdAndUpdate(id, updatedPost, { new: true });
      if (result) {
        return { message: 'Post updated successfully' };
      } else {
        throw new Error('Post not found');
      }
    } catch (error) {
      throw new Error(`Failed to update post: ${error.message}`);
    }
  }

  async deletePostById(id: string): Promise<void> {
    try {
      await this.postModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new Error(`Failed to delete post with id ${id}: ${error.message}`);
    }
  }
}