import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutUserInput } from './article-create-without-user.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOrConnectWithoutUserInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutUserInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutUserInput;
}
