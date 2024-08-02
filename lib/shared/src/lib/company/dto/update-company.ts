import { CreateCompanyInput } from './create-company';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @Field(() => Number)
  id: number;
}