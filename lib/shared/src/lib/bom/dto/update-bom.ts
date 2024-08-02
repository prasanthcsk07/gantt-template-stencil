import { CreateBomInput } from './create-bom';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBomInput extends PartialType(CreateBomInput) {
  @Field(() => Number)
  id: number;
}