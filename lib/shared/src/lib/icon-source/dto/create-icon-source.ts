import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateIconSourceInput {
    @Field()
    name: string;

    @Field()
    iconName: string;
}