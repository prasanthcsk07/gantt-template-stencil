import { CreateVehiclePlatformInput } from './create-vehicle-platform';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehiclePlatformInput extends PartialType(CreateVehiclePlatformInput) {
  @Field(() => Number)
  id: number;
}