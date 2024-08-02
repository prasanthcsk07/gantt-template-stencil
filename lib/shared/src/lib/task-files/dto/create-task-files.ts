import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateTaskFilesInput {
    @Field()
    taskId: number;

    @Field({ nullable: true })
    bucketId?: string;

    @Field({ nullable: true })
    bucketName?: string;

    @Field({nullable:true})
    fileBase64?: string;

    @Field({nullable:true})
    action?: number

    @Field({nullable:true})
    taskFileId?: number
}