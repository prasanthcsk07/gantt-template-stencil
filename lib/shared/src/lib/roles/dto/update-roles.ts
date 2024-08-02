import { CreateRolesInput } from './create-roles';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRolesInput extends PartialType(CreateRolesInput) {
    @Field(() => Number)
    id: number;
}
