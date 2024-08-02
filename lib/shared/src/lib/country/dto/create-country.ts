import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
    @Field()
    nodeId: number;

    @Field()
    name: string;

    @Field()
    abbreviation: string;

    @Field()
    archived: boolean;
}