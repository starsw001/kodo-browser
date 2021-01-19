module.exports = {
  "app.name": "KODOブラウザ",
  language: "言語",
  name: "名前",
  type: "タイプ",
  customize: "カスタマイズ",
  "public.cloud": "パブリッククラウド",
  "private.cloud": "プライベートクラウド",

  "region.unknown": "未知の地域",
  "cn-east-1": "華東",
  "cn-north-1": "華北",
  "cn-south-1": "華南",
  "us-north-1": "北米",
  "ap-southeast-1": "東南アジア",
  "region.get.error": "取得できませんでした",
  "config.parse.error": "設定ファイルの解析に失敗しました",
  "config.format.error": "設定ファイルに問題があります",

  optional: "オプション",
  default: "デフォルト",
  region: "リージョン",

  "permission.denied": "アクセス拒否",
  "permission.denied.move.error_when_delete": "権限が不十分で、ソースファイル {{fromKey}} の削除に失敗し、新しいファイル {{toKey}} が生成されました",

  "auth.accessLogin": "Access Key ログイン",
  "auth.id.placeholder": "AccessKeyId",
  "auth.secret.placeholder": "AccessKeySecret",
  "auth.passlogin": "アカウントのログイン",
  "auth.settings": "詳細設定",
  "auth.username": "ユーザー名",
  "auth.password": "パスワード",
  "auth.username.placeholder": "ユーザー名",
  "auth.password.placeholder": "パスワード",

  "auth.defaultCloud": "デフォルト (パブリッククラウド)",
  "auth.customizedCloud": "カスタム (プライベートクラウド)",

  "auth.service": "サービス",

  "auth.region.placeholder": "利用可能な地域を入力してください",
  "auth.region.popup.msg1": "パブリッククラウドは利用可能なエリアを直接選択します",
  "auth.region.popup.msg2": "プライベートクラウド指定されたエリアを入力してください：cn-east-1",

  "auth.remember.popup.msg1": "AKキーを保存するには、 「覚えている」ボタンをチェックします。ログインするときは、AK Historyをクリックしてログインするキーを選択します.AKを手動で入力する必要はありません。 一時的な使用のためにコンピュータをチェックしないでください！",

  "auth.description": "説明",
  "auth.description.placeholder": "オプション、最大20単語",
  "auth.remember": "覚えている",
  "auth.login": "ログイン",
  "auth.login.error.title": "ログインに失敗しました",
  "auth.login.error.description": "ネットワーク、AK / SKペア、プライベートクラウドの設定を確認するか、ネットワーク管理者に連絡してください",
  "auth.logout.error.title": "ログアウトに失敗しました",
  "auth.logout.error.description": "ネットワーク、プライベートクラウドの構成を確認するか、ネットワーク管理者に連絡してください",
  "auth.switch.error.title": "アカウントの切り替えに失敗しました",
  "auth.switch.error.description": "ネットワーク、プライベートクラウドの構成を確認するか、ネットワーク管理者に連絡してください",

  "auth.removeAK.title": "AK削除",
  "auth.removeAK.message": "本当にAKを削除しますか：<code>{{id}}</code>？",

  "auth.akHistories": "AK の歴史",
  "auth.clearHistories": "AK 履歴削除",
  "auth.clearAKHistories.title": "AK 履歴削除",
  "auth.clearAKHistories.message": "確定ですか?",
  "auth.clearAKHistories.successMessage": "すべてのAKの歴史は削除された",

  "customizeRegions.title": "地域設定",
  "customizeRegions.addRegion": "地域を追加",
  "customizeRegions.region": "地域",
  "customizeRegions.regionId": "地域 ID",
  "customizeRegions.regionName": "地域名",

  actions: "アクション",
  use: "利用",
  delete: "削除",
  ok: "OK",
  cancel: "キャンセル",
  close: "クローズ",

  "storageClassesType": "保管タイプ",
  "storageClassesType.standard": "標準",
  "storageClassesType.infrequentaccess": "IA",
  "storageClassesType.glacier": "アーカイブ",

  "aclType.default": "バケツからの継承",
  "aclType.public-read-write": "公開可読は書く",
  "aclType.public-read": "公開読み取っ",
  "aclType.private": "非公開",

  files: "ファイル",
  externalPath: "外部リンク",
  settings: "設定",
  about: "について",
  bookmarks: "ブックマーク",
  logout: "ログアウト",
  "logout.message": "ログアウトしてもよろしいですか?",
  switch: "アカウントを切り替える",
  "main.upgration": "リリースノート",
  tempCert: "Temp Cert",
  "setup.success": "セットアップに成功しました",

  //address bar
  backward: "後退",
  forward: "進む",
  goUp: "上がる",
  refresh: "リフレッシュ",
  home: "ホーム",
  saveAsHome: "ホームページを設定する",
  saveToBookmarks: "ブックマークに保存",
  "saveAsHome.success": "ホームページの設定は成功",

  "bookmark.remove.success": "ブックマークの削除は成功",
  "bookmark.add.error1": "ブックマークの追加に失敗しました: 最大限を超える",
  "bookmark.add.success": "ブックマークの追加は成功しました",

  //bucket
  "bucket.add": "バケットの作成",
  "bucket.multipart": "マルチパート",
  acl: "ACL",
  privilege: "権限",
  simplePolicy: "シンプルポリシー",
  more: "さらに",
  "bucket.name": "バケット名",
  "bucket.name.tooltip": "3〜63文字で構成され、小文字、数字、ダッシュを含めることができ、小文字または数字で開始および終了する必要があります",
  "bucket.region": "バケット領域",
  creationTime: "作成時間",

  //domain
  "domain": "ドメイン名",
  "no.owned.domain": "所有ドメイン名はありません",
  "refresh.domain": "ドメイン名を更新",

  "select.all": "すべて選択",
  "delete.selected": "選択を削除します",
  "delete.all": "すべて削除",

  initiatedTime: "開始時間",

  loading: "Loading...",
  nodata: "データなし",

  "delete.multiparts.title": "マルチパートを削除する",
  "delete.multiparts.message": "{{num}}マルチパートを削除してもよろしいですか？",
  "delete.multiparts.on": "削除中...",
  "delete.multiparts.success": "マルチパートを正常に削除しました",

  "bucketACL.update": "アップデートバケット ACL",
  "bucketACL.update.success": "更新に成功しました",

  "bucket.add.success": "正常に作成されました",

  "bucket.delete.title": "バケット削除",
  "bucket.delete.message": "バケット名:<code>{{name}}</code>, リジョン:<code>{{region}}</code>, このバケットを削除してもよろしいですか？",
  "bucket.delete.success": "バケットを正常に削除しました",

  "simplePolicy.title": "ポリシー承認を簡素化する",
  "simplePolicy.lb1.1": "リソース",
  "simplePolicy.lb1.2": "権限",
  "privilege.readonly": "ReadOnly",
  "privilege.readwrite": "読み書き",
  "privilege.all": "読み書き",
  "simplePolicy.lb3.1": "ポリシーの表示",
  "simplePolicy.lb3.2": "崩壊",
  "simplePolicy.lb4": "名前付きポリシーの作成",

  readonly: "Read-Only",
  readwrite: "Read-Write",

  "simplePolicy.lb5": "許可",
  subusers: "サブユーザー",
  usergroups: "ユーザー・グループ",
  roles: "ロール",

  "simplePolicy.ok": "OK",
  "simplePolicy.noauth.message1": "ユーザーリストを取得する権限がありません",
  "simplePolicy.noauth.message2": "使用グループリストを取得する権限がありません",
  "simplePolicy.noauth.message3": "ロールリストを取得する権限がありません",
  "simplePolicy.success": "ポリシーを正常に適用する",

  //external path
  "externalPath.add": "外部パスを追加",
  "externalPath.path": "外部パス",
  "externalPath.add.success": "正常に追加されました",
  "externalPath.path.tooltip": "付与者から提供されたバケットポリシーを通じて許可されたバケットまたはバケットの下のパスを入力します",
  "externalPath.delete.title": "外部パスを削除",
  "externalPath.delete.message": "外部パス:<code>{{path}}</code>, リジョン:<code>{{region}}</code>, この外部パスを削除してもよろしいですか？",
  "externalPath.delete.success": "外部パスを正常に削除しました",

  //settings
  "settings.WhetherResumeUpload": "ブレークポイントのアップロード",
  "settings.WhetherResumeUpload.msg": "ファイルブレークポイントアップロード機能を有効にする",
  "settings.ResumeUploadThreshold": "ブレークポイントアップロードファイルのしきい値",
  "settings.ResumeUploadSize": "ブレークポイントアップロードファイルのしきい値",
  "settings.WhetherUploadSpeedLimitEnabled": "アップロード速度制限",
  "settings.WhetherUploadSpeedLimitEnabled.msg": "アップロード速度制限を有効にする",
  "settings.UploadSpeedLimit": "単一のファイル速度制限をアップロードする",
  "settings.WhetherResumeDownload": "ブレークポイントのダウンロード",
  "settings.WhetherResumeDownload.msg": "ブレークポイントのダウンロードを有効にする",
  "settings.ResumeDownloadThreshold": "ブレークポイントダウンロードファイルのしきい値",
  "settings.ResumeDownloadSize": "ブレークポイントのダウンロードファイルサイズ",
  "settings.maxUploadConcurrency": "タスクの並行番号をアップロードする",
  "settings.maxDownloadConcurrency": "タスク並行番号をダウンロードする",
  "settings.WhetherDownloadSpeedLimitEnabled": "ダウンロード速度制限",
  "settings.WhetherDownloadSpeedLimitEnabled.msg": "ダウンロード速度制限を有効にする",
  "settings.DownloadSpeedLimit": "単一のファイル速度制限をダウンロードする",
  "settings.WhetherShowThumbnail": "画像のサムネイルを表示するかどうか",
  "settings.WhetherShowThumbnail.msg": "ファイル一覧にサムネイルを表示すると一定量のトラフィックが消費されます",
  "settings.ExternalPath": "外部リンク",
  "settings.WhetherExternalPathEnabled.msg": "外部リンクを有効にする",
  "settings.StepByStepLoadingFiles": "ステップごとのファイルリストのロード",
  "settings.WhetherStepByStepLoadingFiles.msg": "ステップバイステップモードでファイルリストの読み込みを有効にする",
  "settings.system": "システム設定",
  "settings.isDebug": "デバッグログ",
  "settings.isDebug.msg": "デバッグログを開くかどうか",
  "settings.autoUpgrade": "自動更新",
  "settings.autoUpgrade.msg": "自動ダウンロードパッケージ",
  "settings.success": "正常に保存",

  //bookmark
  "bookmarks.title": "ブックマーク",
  time: "時間",
  "bookmarks.delete.success": "ブックマークを正常に削除しました",

  "opensource.address": "オープンソース",
  foundNewVersion: "新しいバージョンを見つけました",
  clickToDownload: "クリックしてダウンロードする",
  currentIsLastest: "これは最新バージョンです！",

  //files
  upload: "アップロード",
  "folder.create": "ディレクトリ",
  "folder.create.success": "ディレクトリが正常に作成されました",
  "folder.name": "名前",

  download: "ダウンロード",
  copy: "コピー",
  move: "移動",
  paste: "ペースト",
  rename: "名前を変更する",
  getDownloadLink: "ダウンロードアドレスを取得する",
  exportDownloadLinks: "ダウンロードリンクのエクスポート",
  genAuthToken: "認証トークン",

  "exportDownloadLinks.message": "ダウンロードリンクがエクスポートされます",

  "rename.to": "名前を変更する",
  "whetherCover.title": "カバーするかどうか",
  "whetherCover.message1": "同じ名前のフォルダはありますか？",
  "whetherCover.message2": "同じ名前のファイルは既にカバーされていますか？",
  "rename.success": "名前の変更に成功しました",
  "rename.on": "名前を変更しています...",
  "folder.in": "フォルダ",
  file: "ファイル",
  folder: "フォルダ",

  "copy.on": "コピー中...",
  "move.on": "移動中...",

  "use.cancelled": "ユーザーによってキャンセル",

  "copy.error1": "一部のファイルをコピーできません",
  "move.error1": "一部のファイルは移動できません",
  "copy.success": "正常にコピーされました",
  "move.success": "正常に移動いた",

  stop: "停止",

  "paste.resources": "現在のディレクトリに貼り付け",

  "copy.cancel": "コピーをキャンセル",
  "move.cancel": "移動をキャンセル",

  "search.files.placeholder": "名前プレフィックスをフィルタリングする",

  "genAuthToken.title": "認証トークンを生成する",
  "genAuthToken.message1.1": "バケットに承認する",
  "genAuthToken.message1.2": "フォルダに承認する",
  "genAuthToken.message2": "権限",

  "effective.duration": "有効期間",
  "unit.second": "s",

  "genAuthToken.message3.1": "ロールを指定する必要があります",
  "genAuthToken.message3.2": "このロールは、この{{type}}にアクセスするための少なくとも{{privilege}}権限が必要です。",

  "genAuthToken.message4": "認証トークン",
  "genAuthToken.message5": "記の生成された認証コードを使用してS3ブラウザにログインすると、この{{type}} [{{object}}]にアクセスする権限を得ることができます。{{expiration}}まで有効です。",
  "genAuthToken.message6.1": "生成する",
  "genAuthToken.message6.2": "再生成する",

  "deleteModal.title": "これらのファイルを削除する",
  "deleteModal.message1": "次のディレクトリまたはファイルが削除されます",
  "delete.on": "削除中...",
  "delete.success": "正常に削除されました",
  "deleteModal.message2": "キャンセルされました",
  "deleteModal.message3": "いくつかのディレクトリやファイルは削除できません",

  "paste.message1": 'このディレクトリに<span class="text-info">{{action}}</span> <span class="text-info">{{name}}...</span>  (同じファイルまたはディレクトリが対象となります)？',

  "acl.update.title": "Updateを更新する",
  "acl.update.success": "ACLは正常に更新されました",
  "aclType.private.message": "プライベート: オブジェクトへのすべてのアクセスを認証する必要がある",
  "aclType.public-read.message": "一般公開: オブジェクト認証の操作のために書く必要があります。オブジェクトは匿名で読み取ることができます",
  "aclType.public-read-write.message": "パブリックの読み書き: 誰もがオブジェクトを読み書きできます",

  "getDownloadLink.title": "ダウンロードアドレスを取得する",
  "getDownloadLink.warning": "アーカイブされたストレージファイルは、復元されたときにのみアクセスできます",
  "exportDownloadLinks.title": "ダウンロードリンクのエクスポート",
  downloadLink: "ダウンロードリンク",
  "getDownloadLink.message": "リンクの有効期間を入力してください",
  generate: "生成",
  generateAndExport: "生成およびエクスポート",
  "qrcode.download": "コードをスキャンしダウンロードする",

  "restore.checker.message1": "プレビューまたはダウンロードするためにアーカイブを復元する必要があります。",
  "restore.immediately": "すぐに復元する",
  "restore.checker.message2": "アーカイブが復元されました",
  "restore.onprogress": "アーカイブファイルが回復しています、しばらくお待ちください ...",
  "restore.on": "送信...",
  "restore.success": "復元要求が正常に送信されました",
  "restore.days": "日々",
  "restore.message2": "有効期限",
  "restore.title": "リストア",
  restore: "リストア",
  "restore.tooltip.frozen": "フローズン",
  "restore.tooltip.unfreezing": "不凍",
  "restore.tooltip.unfrozen": "凍結されていない",
  "restore.message.unfreezing": "アーカイブされたストレージファイルを復元しています",
  "restore.message.unfrozen": "アーカイブされたストレージファイルが復元されました",
  "restore.message.head_error": "アーカイブされたストレージファイルのステータスを取得できませんでした",

  preview: "プレビュー",
  "cannot.preview": "プレビューできません",
  "cannot.preview.this.file": "このファイルをプレビューできません。",
  "tryto.open.as.textfile": "テキストファイルとして開こうとする",

  save: "セーブ",
  size: "サイズ",
  filesize: "ファイルサイズ",
  "codepreview.notsupport": "このファイルは直接開くことはできません。ローカルにダウンロードしてから開いてください。",
  "download.file": "ダウンロードファイル",

  lastModifyTime: "最終更新日",
  "to.load.more": "もっと読み込む...",
  "loading.more": "もっと読み込んでいます...",

  "download.addtolist.on": "ダウンロードキューに追加中",
  "download.addtolist.success": "すべて追加されました",

  "upload.addtolist.on": "ダウンロードキューに追加中",
  "upload.addtolist.success": "すべて追加されました",
  "upload.duplicated": "ファイルは既に存在します",

  "transframe.search.placeholder": "名前またはステータスによるフィルタリング",

  "upload.overwrite": "アップロードの上書きを有効にする",
  "upload.overwrite.disabled": "アップロードの上書きを無効にする",
  "download.overwrite": "ダウンロードの上書きを有効にする",
  "download.overwrite.disabled": "ダウンロードの上書きを無効にする",
  "start.all": "すべて開始",
  "pause.all": "すべてを止める",
  "clear.finished": "クリア完了",
  "clear.all": "すべてクリア",

  "clear.all.title": "すべてクリア",
  "clear.all.download.message": "すべてのダウンロードタスクをクリアしてもよろしいですか？",
  "clear.all.upload.message": "すべてのアップロードタスクをクリアしますか？",

  "pause.on": "停止中...",
  "pause.success": "正常に停止しました",
  "remove.from.list.title": "削除",
  "remove.from.list.message": "このタスクを削除してもよろしいですか？",

  "status.running.uploading": "アップロード中",
  "status.running.downloading": "ダウンロード中",
  "status.running": "ランニング",
  "status.stopped": "停止",
  "status.failed": "失敗",
  "status.finished": "完了",
  "status.waiting": "待っている",
  "status.verifying": "検証中",

  enable: "有効にする",
  disable: "無効にする",
  show: "表示",

  user: "ユーザ名前",
  pass: "パスワード",
  test: "テスト",

  "click.copy": "コピー",

  "http.headers": "Http ヘッダー",
  key: "Key",
  value: "Value",

  "setting.on": "設定中..",
  "setting.success": "設定完了",

  "file.download.address": "ファイルダウンロードアドレス",

  "copy.successfully": "もうクリップボードにコピー",
  "click.download": "ここをクリックしてダウンロードする",
  "qrcode.download": "掃くダウンロード",

  saving: "保存する",
  "save.successfully": "成功を保存する",
  "content.isnot.modified": "内容は修正していません",

  logining: "ログイン中...",
  "login.successfully": "成功したログイン、ジャンプ中...",
  "login.endpoint.error": "エンドポイントが正しいことを確認してください",

  "upgrade.start": "更新を開始",
  "upgrade.pause": "一時停止ダウンロード",
  "upgrade.continue": "ダウンロードを続行",
  "upgrade.downloading": "ダウンロード",
  "upgrade.download.failed": "自動更新に失敗しました。インストールパッケージを手動でダウンロードしてください。",
  "upgrade.download.success": "ダウンロードに成功しました。クリックしてインストールしてください。",
};
