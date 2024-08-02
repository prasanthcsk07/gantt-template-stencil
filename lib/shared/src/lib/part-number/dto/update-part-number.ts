import { CreatePartNumberInput } from './create-part-number';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePartNumberInput extends PartialType(CreatePartNumberInput) {
  @Field(() => Number)
  id: number;
}