import { CreateStateInput } from './create-state';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStateInput extends PartialType(CreateStateInput) {
  @Field(() => Number)
  id: number;
}