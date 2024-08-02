import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStateInput {
    @Field()
    nodeId: number;

    @Field()
    countryId: number;

    @Field()
    name: string;

    @Field()
    archived: boolean;
}