import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  postId: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  username: string;

  @Prop({ default: Date.now })
  create_at: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
