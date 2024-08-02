import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTypeItemInput {
    @Field()
    nodeId: number;

    @Field()
    name: string;

    @Field()
    abbreviation: string;

    @Field()
    description: string;

    @Field()
    archived: boolean;

    @Field({ nullable: true })
    endItem?: boolean;
}