import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProgramInput {
    @Field()
    name: string;

    @Field({nullable: true})
    businessUnitId?: number;

    @Field({nullable: true})
    description?: string;

    @Field({nullable: true})
    parent?: number;

    @Field({nullable: true})
    archived?: boolean;

    @Field({nullable : true})
    version?: string;

    @Field({nullable : true})
    status?: number;
}
