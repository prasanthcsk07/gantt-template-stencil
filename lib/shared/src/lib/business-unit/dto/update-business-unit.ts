import { CreateBusinessUnitInput } from './create-business-unit';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBusinessUnitInput extends PartialType(CreateBusinessUnitInput) {
  @Field(() => Number)
  id: number;
}