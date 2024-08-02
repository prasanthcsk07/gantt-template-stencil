import { CreateTaskInput } from './create-task';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
    @Field(() => Number)
    id: number;
}
