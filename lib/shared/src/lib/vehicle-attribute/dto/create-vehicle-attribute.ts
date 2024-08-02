import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehicleAttributeInput {
    @Field()
    nodeId: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    archived: boolean;
}