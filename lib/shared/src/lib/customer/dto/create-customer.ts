import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateCustomerInput {
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
    bucketId?: string;

    @Field({ nullable: true })
    bucketName?: string;

    @Field({nullable:true})
    fileBase64?: string;
}
