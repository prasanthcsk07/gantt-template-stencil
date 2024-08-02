import { CreateIconSourceInput } from './create-icon-source';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIconSourceInput extends PartialType(CreateIconSourceInput) {
  @Field(() => Number)
  id: number;
}