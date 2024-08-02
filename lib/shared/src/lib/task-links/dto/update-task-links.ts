import { CreateTaskLinksInput } from './create-task-links';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskLinksInput extends PartialType(CreateTaskLinksInput) {
  @Field(() => Number)
  id: number;
}