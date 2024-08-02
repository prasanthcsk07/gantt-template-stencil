import { CreateTaskFilesInput } from './create-task-files';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskFilesInput extends PartialType(CreateTaskFilesInput) {
  @Field(() => Number)
  id: number;
} 