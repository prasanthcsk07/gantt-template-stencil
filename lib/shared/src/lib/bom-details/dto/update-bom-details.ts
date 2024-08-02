import { CreateBomDetailsInput } from './create-bom-details';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBomDetailsInput extends PartialType(CreateBomDetailsInput) {
  @Field(() => Number)
  id: number;
}