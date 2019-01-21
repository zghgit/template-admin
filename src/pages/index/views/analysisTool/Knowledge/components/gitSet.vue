<template>
    <div :class="$style.gitset">
        <p>1.hosts 文件名字 :\Windows\System32\drivers\etc\hosts</p>
        <p>2.登陆链接 appadmin ；http://172.25.61.95:17001/index.html#/login</p>
        <div>3.githup管理员权限命令“github如何更新fork的代码”
            <a href="https://blog.csdn.net/j754379117/article/details/72890717?utm_source=itdadao&utm_medium=referral" target="_blank">https://blog.csdn.net/j754379117/article/details/72890717?utm_source=itdadao&utm_medium=referral</a>
        </div>
        <p>
            <br/>长期存储 githup 密码：
            <br/> git config –global credential.helper store
        </p>

        <div>
            <br/>4.git同步个人仓库与主仓库代码
            <br/>远端项目操作
            <br/>fork一个项目到自己的githup上
            <br/>git clone <a href="https://github.com/zghgit/axure-futures.git" target="_blank">https://github.com/zghgit/axure-futures.git</a>从远程仓库克隆项目到本地

            <br/>本地项目操作
            <br/>git push                           本地仓库推送到自己的githup远程仓库
            <br/>git add .                           新增的文件
            <br/>git commit -m “备注”       从本地提交到本地仓库
            <br/>git remote add upstream https://github.com/wellfrog16/axure-futures.git        配置源作者的git地址（配置主仓库路径）

            <br/>git remote add upstream https://github.com/wellfrog16/template-admin.git

            <br/>在本地获取远端作者的项目
            <br/>git fetch upstream                        fetch 源分支的新版本跟新到自己本地（获取原始仓库的分支和相应的提交，分支master的提交会保存到本地分支）
            <br/>git merge upstream/master         。。。。。合并两个版本的代码（把原始upstream/master仓库的改变同步到本地master分支）
            <br/>git push                                     将合并的代码推送到自己的远端分支上
            <br/>npm run dev                            启动项目
            <br/>git push origin master                把自己的远程仓库同步到本地仓库

            <br/>git branch -a                            查看远程分支
            <br/>git branch -r                            列出所有远程分支
            <br/>git branch                                查看所以本地分支
            <br/>git branch test                         创建分支
            <br/>git checkout -b [branch]         新建一个分支，并切换到该分支
            <br/>git push --set-upstream origin test   第一次需要这样切换分支
            <br/>git checkout test                      切换分支到test
            <br/>git merge test                          合并分支（在主分支上合并分支）
            <br/>git branch -d test                     删除本地分支
            <br/>git remote -v                           查看远程目录位置

            <br/>git checkout master                切换到fork仓库的本地master分支
            <br/>git config --list                        显示当前的Git配置
            <br/>git config -e                           编辑Git配置文件
            <br/>git commit -v                         提交时显示所有diff信息

            <br/>git stash   拉代码之前先保存自己本地的代码
            <br/>git stash pop   拉取代码之后在取拉代码之前保存到本地的代码

            <br/>git pull upstream master
            <br/>zepto
            <br/>git init      在当前目录新建一个Git代码库  新建一个目录，将其初始化为Git代码库

            <br/>git log   查看提交的版本
            <br/>npm run upload   打包项目上传到公司服务器 （96或95）
            <br/>git tag -a v0.3 -m 'version v0.3 20181228'   提交打tag的版本号
            <br/>git tag   查看提交打tag的版本号
        </div>
        <p>
            快捷键格式化 shift + allt+f
        </p>
    </div>
</template>

<script>
export default {
    name: 'gitSet',
    components: {},
    data() {
        return {};
    },
    computed: {},
    mounted() {
    },
    methods: {},
};
</script>

<style lang="less" module>
    .gitset {
        font-size: 18px;
        color: #17aec6;
    }
</style>
