import { InputType,Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerMilestoneInput {
    @Field()
    nodeId: number;

    @Field()
    customerId: number;

    @Field()
    martinreaMilestoneId: number;
  
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    abbreviation: string;

    @Field()
    archived: boolean;
}