import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePartNumberInput {
    @Field()
    nodeId: number;

    @Field()
    typeItemId: number;

    @Field({ nullable: true })
    typeItemDetailId?: number;

    @Field()
    unitOfMeasurementId: number;

    @Field()
    customerPartNumber: string;

    @Field()
    customerEngLvl: string;

    @Field()
    customerDescription: string;

    @Field()
    partNumber: number;

    @Field()
    engLvl: string;

    @Field()
    description: string;

    @Field({ nullable: true })
    cadRelNbr?: string;

    @Field({ nullable: true })
    sapDocNbr?: string;

    @Field({ nullable: true })
    cmsNbr?: string;

    @Field()
    archived: boolean;

    @Field({ nullable: true })
    bucketId?: string;

    @Field({ nullable: true })
    bucketName?: string;

    @Field({nullable:true})
    fileBase64?: string;
}