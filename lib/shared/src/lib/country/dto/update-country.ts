import { CreateCountryInput } from './create-country';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCountryInput extends PartialType(CreateCountryInput) {
  @Field(() => Number)
  id: number;
}