# Picsur 中文定制版

基于 [Caramel / Picsur](https://github.com/caramelfur/Picsur) 0.5.7 修改，遵循仓库原有 AGPL-3.0 许可证。此仓库提供简体中文界面、重设计的上传工作区，以及默认浅色、可切换深色并记忆选择的双主题。

修改版源码：https://github.com/meloay/picsur-zh

## 本地开发

使用项目 `.nvmrc` 指定的 Node 20 和 pnpm 9.6.0：

```sh
pnpm install --frozen-lockfile
pnpm --filter picsur-shared build
pnpm --filter picsur-frontend build
pnpm --filter picsur-backend build
```

后端需要 PostgreSQL。连接使用 `PICSUR_DB_HOST`、`PICSUR_DB_PORT`、`PICSUR_DB_USERNAME`、`PICSUR_DB_PASSWORD`、`PICSUR_DB_DATABASE`，监听地址由 `PICSUR_HOST` 和 `PICSUR_PORT` 配置。后端默认同时提供 `frontend/dist` 的前端文件。

## 修改说明（2026-11）

- 简体中文页面、表单校验、操作反馈、分页与相对时间。
- 上传首页与全局卡片、导航、移动端布局优化。
- 浅色为默认主题；导航栏可切换深色，浏览器本地记住选择。
- 保留上游归属，页脚链接本站修改版与上游源码。
- 修复新版 Node 的前端构建配置加载和 6 小时图片有效期计算。
- 已在 Node 20 / PostgreSQL 环境验证登录、上传、图片访问、WebP 转换、缩放、中文标题更新与删除接口。

依赖安装中的原生图片插件需要本机编译工具。Node 26 与这些旧依赖存在兼容问题，请使用 Node 20。

以下为原项目说明，原作者的停止维护声明指上游项目。

---

<img align="left" width="100" height="100" style="border-radius: 15%" src="branding/logo/picsur.svg"/>

<a  href="https://discord.gg/GPZNwV3VKE">
<img align="right" style="margin: 5px" src="https://img.shields.io/discord/986634827337965638?color=454FBF&label=Chat%20on%20Discord"/>
</a>

# Picsur

> Totally not an Imgur clone

**NOT MAINTAINED, see the [FAQ](#faq)**

I couldn't really find any open source project that allowed you to easily host images. So I decided to create one.

It feels like a hybrid between Imgur and Pastebin.

## Beta

Right now this software is still in beta, and many things are still missing, or will be changed in the future.
But it does function, so feel free to give it a try.

## Demo

You can view a live demo here: <https://picsur.org/>

The images are deleted every five minutes, and the maximum filesize is 16MB. But it should give you an indication of how it works.

## Features

Here is a list of done features, and what is planned.
For a more detailed list, you can always visit [the project](https://github.com/CaramelFur/Picsur/projects/1).

Every featured marked here should work in the latest release.

- [x] Uploading and viewing images
- [x] Anonymous uploads
- [x] User accounts
- [x] User roles and permissions
- [x] Proper CORS restrictions
- [x] Exif stripping
- [x] Ability to keep original
- [x] Support for many formats
  - QOI
  - JPG
  - PNG
  - WEBP (animated supported)
  - TIFF
  - HEIF
  - BMP
  - GIF (animated supported)
  - JPG-XL
  - JPG-2000
- [x] Convert images
- [x] Edit images
  - Resize
  - Rotate
  - Flip
  - Strip transparency
  - Negative
  - Greyscale
- [x] Deletable images
- [x] Proper DB migrations
- [x] Show own images in list
- [x] Correct previews on chats
- [x] Expiring images
- [x] ShareX endpoint
- [x] ARM64 and AMD64 Docker image

- [ ] White mode
- [ ] Public gallery
- [ ] Albums

## Bugs

If you encounter any bugs or oddities, please open an issue [here](https://github.com/CaramelFur/Picsur/issues). Cause without feedback I'll never know they exists.

## Star

If you like this project, don't forget to give it a star. It tells me that I'm not wasting my time on something that people don't like.

## Faq

### Is this project maintained?

Nope, not anymore, I simply haven't got the time or energy. It really is suprising how little quickly time passes once ya start a normal job. 

Feel free to fork it and continue where I left off. And if anyone wants to take full ownership of the project, also fork it and show some love for it, then hmu after.

Maybe I'll find some random time in the future and continue on with this project, but we'll see.

### Why do my images dissapear of the public instance?

The public instance is only a demo, and therefore only keeps images for 5 minutes. This is to prevent the server from running out of disk space, and to prevent people from using it to host questionable images.

If you wish to keep your images, you will have to host your own instance.

### How do I allow users to register their own accounts?

By default, users can't register their own accounts. This is to prevent users from accidentally allowing anyone to upload to their instance.

If you want to allow this you can though. To change this you go to `settings -> roles -> guest -> edit`, and then give the guest role the `Register` permission. Upon saving the role, the register button will appear on the login page.

### I want to keep my original image files, how?

By default, Picsur will not keep your original image files. Since for most purposes this is not needed, and it saves disk space.

If you want to enable this however, you can do so by going to `settings -> general`, and then enabling the `Keep original` option. Upon saving the settings, the original files will be kept.

Do keep in mind here, that the exif data will NOT be removed from the original image. So make sure you do not accidentally share sensitive data.

### This service says its supports the QOI format, what is this?

QOI is a new lossless image format that is designed to be very fast to encode and decode. All while still offering good compression ratios. This is the primary format the server will store images in when uploaded.

You can [read more about QOI here](https://qoiformat.org/).

### What is the default admin login?

The default username is `admin`, and the default password is set from the `PICSUR_ADMIN_PASSWORD` environment variable.

### I get "Copying to clipboard failed"

It is only possible to use the clipboard functionality on HTTPS websites or localhost. Please ensure you are running Picsur with HTTPS.

## Running your own instance

You easily run this service yourself via Docker. Here is an example docker-compose file:

```yaml
version: '3'
services:
  picsur:
    image: ghcr.io/caramelfur/picsur:latest
    container_name: picsur
    ports:
      - '8080:8080'
    environment:
      # PICSUR_HOST: '0.0.0.0'
      # PICSUR_PORT: 8080

      PICSUR_DB_HOST: picsur_postgres
      # PICSUR_DB_PORT: 5432
      # PICSUR_DB_USERNAME: picsur
      # PICSUR_DB_PASSWORD: picsur
      # PICSUR_DB_DATABASE: picsur

      ## The default username is admin, this is not modifiable
      # PICSUR_ADMIN_PASSWORD: picsur

      ## Optional, random secret will be generated if not set
      # PICSUR_JWT_SECRET: CHANGE_ME
      # PICSUR_JWT_EXPIRY: 7d

      ## Maximum accepted size for uploads in bytes
      # PICSUR_MAX_FILE_SIZE: 128000000
      ## No need to touch this, unless you use a custom frontend
      # PICSUR_STATIC_FRONTEND_ROOT: "/picsur/frontend/dist"

      ## Warning: Verbose mode might log sensitive data
      # PICSUR_VERBOSE: "true"
    restart: unless-stopped
  picsur_postgres:
    image: postgres:17-alpine
    container_name: picsur_postgres
    environment:
      POSTGRES_DB: picsur
      POSTGRES_PASSWORD: picsur
      POSTGRES_USER: picsur
    restart: unless-stopped
    volumes:
      - picsur-data:/var/lib/postgresql/data
volumes:
  picsur-data:
```

## Thanks

- @aldumil for once donating $5
- @mcmastererp for monthly donating $2 from March 2024 to Oktober 2024
- @gander for monthly donating $5 from March 2024 to November 2024
- @TheSameCat2 for monthly donating $5 from November 2023 to May 2024
- @LordCrashWire for once donating $20
- @chennin for monthly donating $4 from June 2023 to September 2024
- @awg13 for once donating $10

## Api

Here is a usually up to date documentation of the api:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/caramel-team/workspace/picsur/collection/1841871-78e559b6-4f39-4092-87c3-92fa29547d03)

If you wish to build your own frontend or app for picsur, this will surely come in handy. Also take a look at the `./shared` folder in the source code, as it contains typescript schema definitions for the api.
