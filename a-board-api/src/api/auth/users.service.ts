import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from '../../schemas/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  async createUser(username: string): Promise<{ message: string, data: Object }> {
    const existingUser = await this.userModel.findOne({ username }).exec();
    if (existingUser) {
      return { message: 'Success', data: {id: existingUser._id, name: existingUser.username} };
    }
    const newUser = new this.userModel({ username });
    await newUser.save();
    return { message: 'Success', data: {id: existingUser._id, name: existingUser.username} };
  }

  async findUserByUsername(username: string): Promise<Users> {
    return this.userModel.findOne({ username }).exec();
  }
}