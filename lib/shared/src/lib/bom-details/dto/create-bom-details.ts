import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateBomDetailsInput {
    @Field({ nullable: true })
    bomId?: number;

    @Field()
    partNumberId: number;

    @Field({ nullable: true })
    workPackageChildId?: number; //qBom

    @Field({ nullable: true })
    customerMilestoneId?: number;//qBom

    @Field(() => Float, { nullable: true })
    parent?: number;

    @Field({ nullable: true })
    quantityEbom?: number;

    @Field({ nullable: true })
    quantityQbom?: number;//qBom

    @Field({ nullable: true })
    childMsDate?: Date;//qBom

    @Field(() => Float, { nullable: true })
    gridId?: number;

    @Field({ nullable: true })
    orderRow?: number;//qBom

    @Field(() => String, { nullable: true })
    weeklyCapacityReq?: string;//qBom
}
