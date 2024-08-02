import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehiclePlatformInput {
    @Field()
    nodeId: number;

    @Field()
    customerId: number;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    archived: boolean;
}