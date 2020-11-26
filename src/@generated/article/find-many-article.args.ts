import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleDistinctFieldEnum } from './article-distinct-field.enum';

@ArgsType()
export class FindManyArticleArgs {
    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<ArticleOrderByInput> | ArticleOrderByInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [ArticleDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<ArticleDistinctFieldEnum>;
}
