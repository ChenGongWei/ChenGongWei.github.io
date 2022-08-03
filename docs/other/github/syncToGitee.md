# GitHub 代码同步到 Gitee

::: tip 提示
这个方式可以同步到 gitee 以及任何一个支持 git 的平台，其原理很简单，就是通过拉取然后推送。
:::

## 配置账号密码
> 首先，在 GitHub 项目的 **「Settings -> Secrets → New repository secret」** 路径下配置好你需要同步的 gitee 账号密码（命名可以随便，只要求跟下面 sync.yml 的变量名称一致即可）。其中 ：
> - GITEE_USERNAME 存放 Gitee 的账号；
> - GITEE_PASSWORD 存放 Gitee 帐号的密码；

![image.png](https://gitee.com/Little_Lu/images/raw/master/blog/github/github1.png)

## 创建 workflow
> 在你的 GitHub 项目 **.github/workflows/** 文件夹下创建一个 .yml 文件，如 sync.yml，内容如下：

```js
name: Sync-To-Gitee

on:
  push:
    branches:
      - main

jobs:
  push-to-mirror:
    runs-on: ubuntu-latest
    steps:
      - name: Clone
        run: |
          git init
          git remote add origin https://github.com/${GITHUB_REPOSITORY}.git
          git fetch --all
          for branch in `git branch -a | grep remotes | grep -v HEAD`; do
            git branch --track ${branch##*/} $branch
          done
        env:
          # 这里填写要同步的 github 仓库
          GITHUB_REPOSITORY: test/github-sync

      - name: Push to Gitee
        run: |
          remote_repo="https://${GITEE_USERNAME}:${GITEE_PASSWORD}@gitee.com/${GITEE_REPOSITORY}.git"

          git remote add gitee "${remote_repo}"
          git show-ref # useful for debugging
          git branch --verbose

          # publish all
          git push --all --force gitee
          git push --tags --force gitee
        env:
          # 这里填写要同步到的 gitee仓库
          GITEE_REPOSITORY: test/gitee-sync
          GITEE_USERNAME: ${{ secrets.GITEE_USERNAME }}
          GITEE_PASSWORD: ${{ secrets.GITEE_PASSWORD }}
```

## 执行同步
现在提交代码会自动执行 `workflows`，将代码同步到 `Gitee`

同步 `workflows` 执行成功
![image.png](https://gitee.com/Little_Lu/images/raw/master/blog/github/github2.png)

`Github` 代码同步 `Gitee` 成功
![image.png](https://gitee.com/Little_Lu/images/raw/master/blog/github/github3.png)