import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerMartinreaMilestoneInput {
    @Field()
    customerId: number;

    @Field()
    customerMilestoneId: number;

    @Field()
    martinreaMilestoneId: number;
  
    @Field()
    customerDueDate: Date;

    @Field()
    martinreaDueDate: Date;

    @Field()
    archived: boolean;
}