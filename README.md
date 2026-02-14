# 开发一个基于Next.js的个人博客应用

此项目基于 [Next.js 博客应用](https://github.com/vercel/next.js/tree/canary/examples/blog) 添加了用户登陆功能（Auth0）和评论功能（Upstash）。

发表评论需要用户通过 Auth0 认证登陆。用户可以删除自己的评论，管理员可以删除任何评论。

评论存储在 Redis ([Upstash](http://upstash.com/))中。

### 访问博客

[https://next-cijinx.vercel.app/](https://next-cijinx.vercel.app/)

## `1` 创建应用

执行 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)创建项目，可以使用任何你熟悉的工具来执行（[npm](https://docs.npmjs.com/cli/init)、[yarn](https://yarnpkg.com/lang/en/docs/cli/create/)、[bun](https://bun.com/docs)）：

```bash
bunx create-next-app --example blog-with-comment <project>
```

## `2` 设置环境变量

将项目中的 `.env.local.example` 文件拷贝一份并命名为 `.env.local` (此文件将会被Git忽略，请勿上传至任何公开的Git仓库):

```bash
cp .env.local.example .env.local
```

## `3` 配置 Upstash

Go to the [Upstash Console](https://console.upstash.com/) and create a new database

#### Upstash environment

- `REDIS_URL`: Find the URL in the database details page in Upstash Console clicking on **Redis Connect** button.

## `4` 配置 Auth0

1. Go to the [Auth0 dashboard](https://manage.auth0.com/) and create a new application of type **Single Page Web
   Applications**.
2. Go to the settings page of the application
3. Configure the following settings:
   - **Allowed Callback URLs**: Should be set to `http://localhost:3000/` when testing locally or typically
     to `https://myapp.com/` when deploying your application.
   - **Allowed Logout URLs**: Should be set to `http://localhost:3000/` when testing locally or typically
     to `https://myapp.com/` when deploying your application.
   - **Allowed Web Origins**: Should be set to `http://localhost:3000` when testing locally or typically
     to `https://myapp.com/` when deploying your application.
4. Save the settings.

#### Auth0 environment

- `NEXT_PUBLIC_AUTH0_DOMAIN`: Can be found in the Auth0 dashboard under `settings`.
- `NEXT_PUBLIC_AUTH0_CLIENT_ID`: Can be found in the Auth0 dashboard under `settings`.
- `NEXT_PUBLIC_AUTH0_ADMIN_EMAIL`: This is the email of the admin user which you use while signing in Auth0. Admin is able to delete any comment.

## 部署个人博客

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket
and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=upstash-roadmap).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to
match your `.env.local` file.
