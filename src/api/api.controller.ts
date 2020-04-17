import {
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseInterceptors,
} from '@nestjs/common';
import { AuthorizationToken } from 'app_modules/nestjs-authorization-token';

import { ApiService } from './api.service';
import { GraphQLResponseInterceptor } from './graphql-response.interceptor';
import { CreateArticleDto } from './models/create-article.dto';
import { GetArticlesDto } from './models/get-articles.dto';
import { TagListInterceptor } from './tag-list.interceptor';

/**
 * This is REST API wrapper around graphql.
 * Backend API spec https://github.com/gothinkster/realworld/tree/master/api
 */
@Controller('api')
@UseInterceptors(GraphQLResponseInterceptor)
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get('/')
    index() {
        return 'https://github.com/gothinkster/realworld/tree/master/api';
    }

    /**
     * Registration.
     */
    @Post('users')
    async createUser(@Req() request: any) {
        return this.apiService.createUser(request.body);
    }

    /**
     * Authentication.
     */
    @Post('users/login')
    async postUsersLogin(@Req() request: any) {
        return this.apiService.loginUser(request.body);
    }

    /**
     * Get current user.
     */
    @Get('user')
    async user(@AuthorizationToken() token: string) {
        return this.apiService.getCurrentUser(token);
    }

    /**
     * Update user.
     */
    @Put('user')
    async updateUser(@AuthorizationToken() token: string, @Req() request: any) {
        return this.apiService.updateUser({
            token,
            user: request.body.user,
        });
    }

    /**
     * Get user profile by name.
     * Authorization optional, if yes `following` property should be checked.
     */
    @Get('profiles/:username')
    async profilesUsername(@Param('username') name: string, @AuthorizationToken() token: string) {
        return this.apiService.getProfile({
            token,
            name,
        });
    }

    /**
     * Create article.
     */
    @Post('articles')
    @UseInterceptors(TagListInterceptor)
    async createArticle(@Req() request: any, @AuthorizationToken() token: string) {
        const createArticleDto: CreateArticleDto = request.body.article;
        return this.apiService.createArticle({ token, createArticleDto });
    }

    /**
     * Get all articles with optional filters.
     */
    @Get('articles')
    @UseInterceptors(TagListInterceptor)
    async getArticles(@AuthorizationToken() token?: string, @Query() query?: GetArticlesDto) {
        return this.apiService.getArticles({
            token,
            ...query,
        });
    }

    /**
     * Follow user.
     */
    @Post('profiles/:username/follow')
    async followUser(@AuthorizationToken() token: string, @Param('username') username: string) {
        return this.apiService.followUser({
            token,
            username,
            value: true,
        });
    }

    @Delete('profiles/:username/follow')
    async unfollowUser(@AuthorizationToken() token: string, @Param('username') username: string) {
        return this.apiService.followUser({
            token,
            username,
            value: false,
        });
    }

    /**
     * Get article by slug.
     */
    @Get('articles/:slug')
    @UseInterceptors(TagListInterceptor)
    async getArticle(@AuthorizationToken() token: string, @Param('slug') slug: string) {
        return this.apiService.getArticle({ token, slug });
    }

    /**
     * Feed Articles.
     * Return multiple articles created by followed users, ordered by most recent first.
     * Authentication required.
     */
    @Get('articles/feed')
    @UseInterceptors(TagListInterceptor)
    async articlesFeed(@AuthorizationToken() token: string, @Query() query?: GetArticlesDto) {
        return this.apiService.feedArticles({ token, limit: query?.limit, offset: query?.offset });
    }

    /**
     * Update article.
     */
    @Put('articles/:slug')
    @UseInterceptors(TagListInterceptor)
    async updateArticle(
        @AuthorizationToken() token: string,
        @Param('slug') slug: string,
        @Req() request: any,
    ) {
        return this.apiService.updateArticle({ token, slug, data: request.body.article });
    }

    @Delete('articles/:slug')
    @UseInterceptors(TagListInterceptor)
    async deleteArticle() {
        return {};
    }

    @Post('articles/:slug/comments')
    async createArticleComment() {
        return {};
    }

    @Get('articles/:slug/comments')
    async articlesSlugComments() {
        return {};
    }

    @Delete('articles/:slug/comments/:id')
    async articlesSlugCommentsId() {
        return {};
    }

    @Post('articles/:slug/favorite')
    async createArticlesSlugFavorite() {
        return {};
    }

    @Delete('articles/:slug/favorite')
    async deleteArticlesSlugFavorite() {
        return {};
    }

    /**
     * Get tags.
     */
    @Get('tags')
    async tags() {
        return this.apiService.getTags();
    }
}
