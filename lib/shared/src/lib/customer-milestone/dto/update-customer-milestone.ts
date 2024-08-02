import { CreateCustomerMilestoneInput } from './create-customer-milestone';
import { InputType, Field,  PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerMilestoneInput extends PartialType(CreateCustomerMilestoneInput) {
  @Field(() => Number)
  id: number;
}