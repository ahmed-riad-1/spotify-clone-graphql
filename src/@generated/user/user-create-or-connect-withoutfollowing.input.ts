import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';

@InputType()
export class UserCreateOrConnectWithoutfollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput;
}
