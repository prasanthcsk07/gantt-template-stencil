import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBomInput {
    @Field()
    partNumberId: number;

    @Field()
    eBomStatusId: number;

    @Field()
    qBomStatusId: number;

    @Field()
    pBomStatusId: number;

    @Field()
    archived: boolean;
}
