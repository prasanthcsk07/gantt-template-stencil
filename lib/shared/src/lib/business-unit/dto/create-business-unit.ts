import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBusinessUnitInput {
    @Field()
    nodeId: number;

    @Field()
    name: string;

    @Field()
    alias: string;

    @Field()
    abbreviation: string;

    @Field()
    description: string;

    @Field()
    archived: boolean;
}
