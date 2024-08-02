import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProgramTimingTrackerUsersInput {
    @Field()
    programTimingTrackerId: number;

    @Field()
    userId: string;
}
