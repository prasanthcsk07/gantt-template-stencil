import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehicleBrandInput {
    @Field()
    nodeId: number;

    @Field()
    customerId: number;

    @Field()
    name: string;

    @Field()
    archived: boolean;
}