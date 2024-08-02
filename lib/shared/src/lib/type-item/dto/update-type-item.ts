import { CreateTypeItemInput } from './create-type-item';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTypeItemInput extends PartialType(CreateTypeItemInput) {
  @Field(() => Number)
  id: number;
}