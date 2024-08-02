import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTypeItemDetailInput {
    @Field()
    nodeId: number;

    @Field()
    typeItemId: number;

    @Field()
    name: string;

    @Field()
    abbreviation: string;

    @Field()
    description: string;

    @Field()
    archived: boolean;

    @Field({ nullable: true })
    finalPart?: boolean;
}