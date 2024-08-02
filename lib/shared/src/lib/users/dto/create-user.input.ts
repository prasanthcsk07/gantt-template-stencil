import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field()
  name: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field({nullable: true})
  bucketId?: string;

  @Field({nullable: true})
  bucketName?: string;

  @Field({nullable: true})
  email?: string;
}
