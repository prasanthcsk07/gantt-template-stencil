import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateNodeInput {
    @Field()
    node: string;

    @Field()
    abbreviation: string;

    @Field()
    description: string;

    @Field()
    archived: boolean;

    @Field()
    iconSourceId: number;
}