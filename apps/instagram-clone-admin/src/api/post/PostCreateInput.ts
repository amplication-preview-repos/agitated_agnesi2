import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  imageUrl?: InputJsonValue;
  likes?: LikeCreateNestedManyWithoutPostsInput;
};
