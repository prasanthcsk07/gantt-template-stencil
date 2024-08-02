import { CreateCityInput } from './create-city';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCityInput extends PartialType(CreateCityInput) {
  @Field(() => Number)
  id: number;
}