import { CreateCustomerMartinreaMilestoneInput } from './create-customer-martinrea-milestone';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerMartinreaMilestoneInput extends PartialType(CreateCustomerMartinreaMilestoneInput) {
  @Field(() => Number)
  id: number;
}