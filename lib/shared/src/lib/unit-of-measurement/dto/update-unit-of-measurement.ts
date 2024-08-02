import { CreateUnitOfMeasurementInput } from './create-unit-of-measurement';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUnitOfMeasurementInput extends PartialType(CreateUnitOfMeasurementInput) {
    @Field(() => Number)
    id: number;
}
