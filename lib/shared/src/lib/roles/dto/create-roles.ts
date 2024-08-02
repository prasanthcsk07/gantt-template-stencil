import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateRolesInput {
    @Field({ nullable: true })
    nodeId?: number;

    @Field({ nullable: true })
    businessUnitId?: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    archived?: boolean;
}