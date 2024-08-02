import { CreateTypeItemDetailInput } from './create-type-item-detail';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTypeItemDetailInput extends PartialType(CreateTypeItemDetailInput) {
  @Field(() => Number)
  id: number;
}