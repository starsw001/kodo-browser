module.exports = {
  "app.name": "KODO 浏览器",
  language: "语言",
  name: "名称",
  type: "类型",
  customize: "自定义",
  "public.cloud": "公有云",
  "private.cloud": "私有云",

  "region.unknown": "未知区域",
  "cn-east-1": "华东",
  "cn-north-1": "华北",
  "cn-south-1": "华南",
  "us-north-1": "北美",
  "ap-southeast-1": "东南亚",
  "region.get.error": "获取失败",
  "config.parse.error": "解析配置文件出错",
  "config.format.error": "配置文件格式错误",

  optional: "可选",
  default: "默认",
  region: "区域",

  "permission.denied": "没有权限",
  "permission.denied.move.error_when_delete": "权限不足，源文件 {{fromKey}} 删除失败。新文件 {{toKey}} 已生成",

  "auth.accessLogin": "Access Key 登录",
  "auth.id.placeholder": "请输入 AccessKeyId",
  "auth.secret.placeholder": "请输入 SecretAccessKey",
  "auth.passlogin": "帐号登录",
  "auth.settings": "高级选项",
  "auth.username": "用户名",
  "auth.password": "密码",
  "auth.username.placeholder": "请输入用户名",
  "auth.password.placeholder": "请输入密码",

  "auth.defaultCloud": "默认（公有云）",
  "auth.customizedCloud": "自定义（私有云）",

  "auth.service": "服务",

  "auth.region.placeholder": "请输入可用的区域",
  "auth.region.popup.msg1": "公有云直接选择可用区域即可",
  "auth.region.popup.msg2": "专有云请输入指定的区域，如：cn-east-1",

  "auth.remember.popup.msg1": '勾选“记住密钥”可保存 AK 密钥，再次登录时可直接从 AK 历史中选择该密钥登录。请不要在临时使用的电脑上勾选！',

  "auth.description": "备注",
  "auth.description.placeholder": "可以为空，最多 20 个字或字符",
  "auth.remember": "记住密钥",
  "auth.login": "登入",
  "auth.login.error.title": "登录失败",
  "auth.login.error.description": "请检查您的网络，AK / SK 密钥，私有云配置或联系网络管理员",
  "auth.logout.error.title": "注销失败",
  "auth.logout.error.description": "请检查您的网络，私有云配置或联系网络管理员",
  "auth.switch.error.title": "切换账号失败",
  "auth.switch.error.description": "请检查您的网络，私有云配置或联系网络管理员",

  "auth.removeAK.title": "删除 AK",
  "auth.removeAK.message": "AK <code>{{id}}</code> 备注 <code>{{description}}</code>将被删除，确认操作?",

  "auth.akHistories": "AK 历史",
  "auth.clearHistories": "清空历史",
  "auth.clearAKHistories.title": "清空 AK 历史",
  "auth.clearAKHistories.message": "清空 AK 历史，所有已记录 AK 都将被删除，确认操作？",
  "auth.clearAKHistories.successMessage": "已清空 AK 历史",

  "customizeRegions.title": "区域设置",
  "customizeRegions.addRegion": "添加区域",
  "customizeRegions.region": "区域",
  "customizeRegions.regionId": "区域 ID",
  "customizeRegions.regionName": "区域名称",

  actions: "操作",
  use: "使用",
  delete: "删除",
  ok: "确定",
  cancel: "取消",
  close: "关闭",

  "storageClassesType": "存储类型",
  "storageClassesType.standard": "标准存储",
  "storageClassesType.infrequentaccess": "低频存储",
  "storageClassesType.glacier": "归档存储",

  "aclType.default": "继承Bucket",
  "aclType.public-read-write": "公共读写",
  "aclType.public-read": "公共读",
  "aclType.private": "私有",

  files: "文件",
  externalPath: "外部路径",
  settings: "设置",
  about: "关于",
  bookmarks: "书签管理",
  logout: "退出",
  "logout.message": "确定要退出?",
  switch: "切换账号",
  "main.upgration": "主要更新",
  tempCert: "临时凭证",
  "setup.success": "已经设置成功",

  //address bar
  backward: "后退",
  forward: "前进",
  goUp: "上一级",
  refresh: "刷新",
  home: "首页",
  saveAsHome: "保存为首页",
  saveToBookmarks: "保存书签",
  "saveAsHome.success": "设置默认地址成功",

  "bookmark.remove.success": "已删除书签",
  "bookmark.add.error1": "添加书签失败: 超过最大限制",
  "bookmark.add.success": "添加书签成功",

  //bucket
  "bucket.add": "新建 Bucket",
  "bucket.multipart": "碎片",
  acl: "ACL权限",
  privilege: "权限",
  simplePolicy: "简化Policy授权",
  more: "更多",
  "bucket.name": "Bucket 名称",
  "bucket.name.tooltip": "由 3 ~ 63 个字符组成 ，可包含小写字母、数字和短划线，且必须以小写字母或者数字开头和结尾",
  "bucket.region": "Bucket 区域",
  creationTime: "创建时间",

  //domain
  "domain": "域名",
  "no.owned.domain": "不使用自有域名",
  "refresh.domain": "刷新域名",

  "select.all": "全选",
  "delete.selected": "删除所选",
  "delete.all": "删除所有",

  initiatedTime: "最初创建时间",

  loading: "正在载入...",
  nodata: "没有数据",

  "delete.multiparts.title": "删除碎片",
  "delete.multiparts.message": "删除{{num}}个碎片, 确定删除吗？",
  "delete.multiparts.on": "正在删除碎片...",
  "delete.multiparts.success": "删除碎片成功",

  "bucketACL.update": "修改Bucket权限",
  "bucketACL.update.success": "修改Bucket权限成功",

  "bucket.add.success": "创建Bucket成功",

  "bucket.delete.title": "删除Bucket",
  "bucket.delete.message": "Bucket名称:<code>{{name}}</code>, 确定删除？",
  "bucket.delete.success": "删除Bucket成功",

  "simplePolicy.title": "简化Policy授权",
  "simplePolicy.lb1.1": "将下列资源",
  "simplePolicy.lb1.2": "的权限",
  "privilege.readonly": "只读",
  "privilege.readwrite": "读写",
  "privilege.all": "读写",
  "simplePolicy.lb3.1": "查看Policy",
  "simplePolicy.lb3.2": "隐藏Policy",
  "simplePolicy.lb4": "创建为policy，命名为",

  readonly: "只读",
  readwrite: "可写",

  "simplePolicy.lb5": "并授权给",
  subusers: "子用户",
  usergroups: "用户组",
  roles: "角色",

  "simplePolicy.ok": "确定授权",
  "simplePolicy.noauth.message1": "没有权限获取用户列表",
  "simplePolicy.noauth.message2": "没有权限获取用户组列表",
  "simplePolicy.noauth.message3": "没有权限获取角色列表",
  "simplePolicy.success": "应用policy成功",

  //external path
  "externalPath.add": "添加外部路径",
  "externalPath.path": "外部路径",
  "externalPath.path.tooltip": "填写通过 Bucket Policy 被授予权限的某个 Bucket 或 Bucket 下的某个路径，需由授权者提供",
  "externalPath.add.success": "添加外部路径成功",
  "externalPath.delete.title": "删除外部路径",
  "externalPath.delete.message": "外部路径:<code>{{path}}</code>, 确定删除？",
  "externalPath.delete.success": "删除外部路径成功",

  //settings
  "settings.WhetherResumeUpload": "断点上传",
  "settings.WhetherResumeUpload.msg": "启用断点上传功能",
  "settings.ResumeUploadThreshold": "断点上传文件阈值（单位：MB，范围：10 MB - 1000 MB）",
  "settings.ResumeUploadSize": "断点上传分片大小（单位：MB，范围：8 MB - 100 MB）",
  "settings.WhetherUploadSpeedLimitEnabled": "上传限速",
  "settings.WhetherUploadSpeedLimitEnabled.msg": "启用上传限速功能",
  "settings.UploadSpeedLimit": "单个文件上传限速（单位：KB/s，范围：1 KB/s - 102400 KB/s）",
  "settings.WhetherResumeDownload": "断点下载",
  "settings.WhetherResumeDownload.msg": "启用断点下载功能",
  "settings.ResumeDownloadThreshold": "断点下载文件阈值（单位：MB，范围：10 MB - 1000 MB）",
  "settings.ResumeDownloadSize": "断点下载分片大小（单位：MB，范围：8 MB - 100 MB）",
  "settings.maxUploadConcurrency": "最大上传任务数（单位：1 - 10）",
  "settings.maxDownloadConcurrency": "最大下载任务数（单位：1 - 10）",
  "settings.WhetherDownloadSpeedLimitEnabled": "下载限速",
  "settings.WhetherDownloadSpeedLimitEnabled.msg": "启用下载限速功能",
  "settings.DownloadSpeedLimit": "单个文件下载限速（单位：KB/s，范围：1 KB/s - 102400 KB/s）",
  "settings.WhetherShowThumbnail": "是否显示图片缩略",
  "settings.WhetherShowThumbnail.msg": "在文件列表中显示图片缩略, 会消耗一定的流量",
  "settings.ExternalPath": "外部路径",
  "settings.WhetherExternalPathEnabled.msg": "启用外部路径功能",
  "settings.StepByStepLoadingFiles": "文件列表分步加载",
  "settings.WhetherStepByStepLoadingFiles.msg": "开启文件列表分步加载模式",
  "settings.system": "系统设置",
  "settings.isDebug": "调试日志",
  "settings.isDebug.msg": "是否开启调试日志",
  "settings.useElectronNode": "启用 Electron Node",
  "settings.useElectronNode.msg": "是否启用 Electron Node",
  "settings.autoUpgrade": "自动更新",
  "settings.autoUpgrade.msg": "自动下载更新包",
  "settings.success": "已经保存设置",

  //bookmark
  bookmarks: "书签管理",
  "bookmarks.title": "书签管理",
  time: "时间",
  "bookmarks.delete.success": "删除书签成功",

  "opensource.address": "开源地址",
  foundNewVersion: "发现新版本",
  clickToDownload: "点此下载",
  currentIsLastest: "当前是最新版本!",

  //files
  upload: "上传",
  "folder.create": "创建目录",
  "folder.create.success": "创建目录成功",
  "folder.name": "目录名",

  download: "下载",
  copy: "复制",
  move: "移动",
  paste: "粘贴",
  rename: "重命名",
  getDownloadLink: "获取外链",
  exportDownloadLinks: "导出外链",
  genAuthToken: "生成授权码",

  "exportDownloadLinks.message": "导出外链成功，请打开 {{path}} 查看",

  "rename.to": "重命名",
  "whetherCover.title": "是否覆盖",
  "whetherCover.message1": "已经有同名目录，是否覆盖?",
  "whetherCover.message2": "已经有同名文件，是否覆盖?",
  "rename.success": "重命名成功",
  "rename.on": "正在重命名...",
  "folder.in": "所在目录",
  file: "文件",
  folder: "目录",

  "copy.on": "正在复制...",
  "move.on": "正在移动...",

  "use.cancelled": "用户取消",

  "copy.error1": "部分目录或文件无法复制",
  "move.error1": "部分目录或文件无法移动",
  "copy.success": "复制成功",
  "move.success": "移动成功",

  stop: "停止",

  "paste.resources": "粘贴到本目录",

  "copy.cancel": "取消复制",
  "move.cancel": "取消移动",

  "search.files.placeholder": "按名称前缀过滤",

  "genAuthToken.title": "生成授权码",
  "genAuthToken.message1.1": "授权给Bucket",
  "genAuthToken.message1.2": "授权给目录",
  "genAuthToken.message2": "的权限",

  "effective.duration": "有效时长",
  "unit.second": "秒",

  "genAuthToken.message3.1": "还需要指定一个角色",
  "genAuthToken.message3.2": "这个角色需要至少有这个{{type}}的{{privilege}}权限",

  "genAuthToken.message4": "生成的授权码",
  "genAuthToken.message5": "使用上面生成的授权码登录S3浏览器，可以达到只拥有[{{object}}]这个{{type}}的{{privilege}}权限的效果,有效期至{{expiration}}。",
  "genAuthToken.message6.1": "确定生成",
  "genAuthToken.message6.2": "重新生成",

  "deleteModal.title": "删除目录和文件",
  "deleteModal.message1": "将删除以下目录或文件",
  "delete.on": "正在删除...",
  "delete.success": "删除成功",
  "deleteModal.message2": "用户取消删除",
  "deleteModal.message3": "部分目录或文件无法删除",

  "paste.message1": '将 <span class="text-info">{{name}}等</span> <span class="text-info">{{action}}</span> 到这个目录下面（如有相同的文件或目录则覆盖）？',

  "acl.update.title": "设置ACL权限",
  "acl.update.success": "修改ACL权限成功",
  "aclType.private.message": "私有：对object的所有访问操作需要进行身份验证",
  "aclType.public-read.message": "公共读：对object写操作需要进行身份验证；可以对object进行匿名读",
  "aclType.public-read-write.message": "公共读写：所有人都可以对object进行读写操作",

  "getDownloadLink.title": "获取外链",
  "getDownloadLink.warning": "归档存储文件，只有解冻状态时才能访问",
  "exportDownloadLinks.title": "导出外链",
  downloadLink: "外链地址",
  "getDownloadLink.message": "请输入链接有效期",
  generate: "生成",
  generateAndExport: "生成并导出",
  "qrcode.download": "扫码下载",

  "restore.checker.message1": "归档文件，需要解冻才能预览或下载。",
  "restore.immediately": "立即解冻",
  "restore.checker.message2": "归档文件已解冻",
  "restore.onprogress": "归档文件正在解冻中，请耐心等待...",
  "restore.on": "提交中...",
  "restore.success": "解冻请求已经提交",
  "restore.days": "解冻天数",
  "restore.message2": "可读截止时间",
  "restore.title": "解冻",
  restore: "解冻",
  "restore.tooltip.frozen": "冻结",
  "restore.tooltip.unfreezing": "解冻中",
  "restore.tooltip.unfrozen": "已解冻",
  "restore.message.unfreezing": "归档存储文件正在解冻中",
  "restore.message.unfrozen": "归档存储文件已解冻",
  "restore.message.head_error": "获取归档存储文件状态失败",

  preview: "预览",
  "cannot.preview": "无法预览",
  "cannot.preview.this.file": "该文件类型无法预览。",
  "tryto.open.as.textfile": "尝试作为文本文件打开",

  save: "保存",
  size: "大小",
  filesize: "文件大小",
  "codepreview.notsupport": "不支持直接打开，请下载到本地后打开。",
  "download.file": "下载文件",

  lastModifyTime: "最后修改时间",
  "to.load.more": "加载更多...",
  "loading.more": "正在加载更多...",

  "download.addtolist.on": "正在添加到下载队列",
  "download.addtolist.success": "已全部添加到下载队列",

  "upload.addtolist.on": "正在添加到上传队列",
  "upload.addtolist.success": "已全部添加到上传队列",
  "upload.duplicated": "文件已经存在",

  "transframe.search.placeholder": "根据名称或状态搜索",

  "upload.overwrite": "开启覆盖上传",
  "upload.overwrite.disabled": "禁用覆盖上传",
  "download.overwrite": "开启覆盖下载",
  "download.overwrite.disabled": "禁用覆盖下载",
  "start.all": "启动全部",
  "pause.all": "暂停全部",
  "clear.finished": "清空已完成",
  "clear.all": "清空全部",

  "clear.all.title": "清空全部",
  "clear.all.download.message": "确定清空所有下载任务?",
  "clear.all.upload.message": "确定清空所有上传任务?",

  "pause.on": "正在暂停...",
  "pause.success": "暂停成功",
  "remove.from.list.title": "从列表中移除",
  "remove.from.list.message": "确定移除该任务?",

  "status.running.uploading": "正在上传",
  "status.running.downloading": "正在下载",
  "status.running": "运行中",
  "status.stopped": "已停止",
  "status.failed": "失败",
  "status.finished": "完成",
  "status.waiting": "等待",
  "status.verifying": "正在校验",

  enable: "启用",
  disable: "禁用",
  show: "显示",

  user: "用户名",
  pass: "密码",
  test: "测试一下",

  "click.copy": "点击复制",

  "http.headers": "HTTP头",
  key: "参数",
  value: "值",

  "setting.on": "正在设置..",
  "setting.success": "设置成功",

  "file.download.address": "文件下载地址",

  "copy.successfully": "已复制到剪贴板",
  "click.download": "点此下载",
  "qrcode.download": "扫码下载",

  saving: "正在保存",
  "save.successfully": "保存成功",
  "content.isnot.modified": "内容没有修改",

  logining: "正在登录中...",
  "login.successfully": "登录成功，正在跳转...",
  "login.endpoint.error": "请确定Endpoint是否正确",

  "upgrade.start": "开始更新",
  "upgrade.pause": "暂停下载",
  "upgrade.continue": "继续下载",
  "upgrade.downloading": "正在下载...",
  "upgrade.download.failed": "自动更新失败, 请手动下载安装包。",
  "upgrade.download.success": "已经下载成功, 请点击安装包进行安装",
};
