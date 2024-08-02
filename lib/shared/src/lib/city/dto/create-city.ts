import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
    @Field()
    nodeId: number;

    @Field()
    stateId: number;

    @Field()
    name: string;

    @Field()
    archived: boolean;
}