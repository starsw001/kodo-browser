module.exports = {
  "app.name": "KODO Browser",
  language: "Language",
  name: "Name",
  type: "Type",
  customize: "Customize",
  "public.cloud": "Public Cloud",
  "private.cloud": "Private Cloud",

  "region.unknown": "Unknown Region",
  "cn-east-1": "East China",
  "cn-north-1": "North China",
  "cn-south-1": "South China",
  "us-north-1": "North America",
  "ap-southeast-1": "Southeast Asia",
  "region.get.error": "Failed to Get",
  "config.parse.error": "Failed to parse config file",
  "config.format.error": "Something is wrong in the config file",

  optional: "Optional",
  default: "Default",
  region: "Region",

  "permission.denied": "Permission denied",
  "permission.denied.move.error_when_delete": "Insufficient permissions, source file {{fromKey}} deletion failed, new file {{toKey}} has been generated",

  "auth.accessLogin": "Access Key Login",
  "auth.id.placeholder": "AccessKeyId",
  "auth.secret.placeholder": "AccessKeySecret",
  "auth.passlogin": "Account Login",
  "auth.settings": "Advanced",
  "auth.username": "Username",
  "auth.password": "Password",
  "auth.username.placeholder": "Username",
  "auth.password.placeholder": "Password",

  "auth.defaultCloud": "Default (Public Cloud)",
  "auth.customizedCloud": "Customized (Private Cloud)",

  "auth.service": "Service",

  "auth.region.placeholder": "Please enter available region",
  "auth.region.popup.msg1": "For Public Cloud, you can select available region from the list",
  "auth.region.popup.msg2": "For Private Cloud, Please enter a custom Region, such as:",

  "auth.remember.popup.msg1": 'Check "Remember" to save the AK. When you login again, click AK History to select the key to log in. You do not need to enter AK / SK manually. Please do not check it on a temporary computer!',

  "auth.description": "Description",
  "auth.description.placeholder": "Optional, Up to 20 words",
  "auth.remember": "Remember",
  "auth.login": "Login",
  "auth.login.error.title": "Login failed",
  "auth.login.error.description": "Please check your network, AK / SK pair, private cloud configuration or contact your network administrator",
  "auth.logout.error.title": "Logout failed",
  "auth.logout.error.description": "Please check your network, private cloud configuration or contact your network administrator",
  "auth.switch.error.title": "Account switching failed",
  "auth.switch.error.description": "Please check your network, private cloud configuration or contact your network administrator",

  "auth.removeAK.title": "Remove AK",
  "auth.removeAK.message": "Remove AK：<code>{{id}}</code>, Are you sure?",

  "auth.akHistories": "AK Histories",
  "auth.clearHistories": "Clear Histories",
  "auth.clearAKHistories.title": "Clear AK Histories",
  "auth.clearAKHistories.message": "Are you sure?",
  "auth.clearAKHistories.successMessage": "All AK Histories has been clear",

  "customizeRegions.title": "Region Settings",
  "customizeRegions.addRegion": "Add region",
  "customizeRegions.region": "Region",
  "customizeRegions.regionId": "Region ID",
  "customizeRegions.regionName": "Region Name",

  actions: "Actions",
  use: "Use",
  delete: "Remove",
  ok: "OK",
  cancel: "Cancel",
  close: "Close",

  "storageClassesType": "Storage Type",
  "storageClassesType.standard": "Standard",
  "storageClassesType.infrequentaccess": "IA",
  "storageClassesType.glacier": "Archive",

  "aclType.default": "Inherit From Bucket",
  "aclType.public-read-write": "Public Read and Write",
  "aclType.public-read": "Public Read",
  "aclType.private": "Private",

  files: "Files",
  externalPath: "External Link",
  settings: "Settings",
  about: "About",
  bookmarks: "Bookmarks",
  logout: "Logout",
  "logout.message": "Are you sure you want to logout?",
  switch: "Switch account",
  "main.upgration": "Release Notes",
  tempCert: "Temp Cert",
  "setup.success": "Set up successfully",

  //address bar
  backward: "Backward",
  forward: "Forward",
  goUp: "Go up",
  refresh: "Refresh",
  home: "Home",
  saveAsHome: "Set Home Page",
  saveToBookmarks: "Save To Bookmarks",
  "saveAsHome.success": "Set home page success",

  "bookmark.remove.success": "Remove Bookmark success",
  "bookmark.add.error1": "Add Bookmark failed: Exceeds the maximum limit",
  "bookmark.add.success": "Add Bookmark success",

  //bucket
  "bucket.add": "Create Bucket",
  "bucket.multipart": "MultiPart",
  acl: "ACL",
  privilege: "Privilege",
  simplePolicy: "Simple Policy",
  more: "More",
  "bucket.name": "Bucket Name",
  "bucket.name.tooltip": "Consists of 3 to 63 characters, can contain lowercase letters, numbers, and dashes, and must begin and end with a lowercase letter or number",
  "bucket.region": "Bucket Region",
  creationTime: "Creation Time",

  //domain
  "domain": "Domain name",
  "no.owned.domain": "No owned domain name",
  "refresh.domain": "Refresh domain name",

  "select.all": "Select All",
  "delete.selected": "Delete selected",
  "delete.all": "Delete All",

  initiatedTime: "Initiated Time",

  loading: "Loading...",
  nodata: "No data",

  "delete.multiparts.title": "Delete multiparts",
  "delete.multiparts.message": "Are you sure you want to delete {{num}} multiparts？",
  "delete.multiparts.on": "Deleting...",
  "delete.multiparts.success": "Deleted multiparts successfully",

  "bucketACL.update": "Update Bucket ACL",
  "bucketACL.update.success": "Update successfully",

  "bucket.add.success": "Created successfully",

  "bucket.delete.title": "Delete Bucket",
  "bucket.delete.message": "Bucket Name:<code>{{name}}</code>, Region:<code>{{region}}</code>, Are you sure you want to delete this bucket?",
  "bucket.delete.success": "Deleted Bucket Successfully",

  "simplePolicy.title": "Simplify policy authorization",
  "simplePolicy.lb1.1": "Resources",
  "simplePolicy.lb1.2": "Privileges",
  "privilege.readonly": "ReadOnly",
  "privilege.readwrite": "ReadWrite",
  "privilege.all": "ReadWrite",
  "simplePolicy.lb3.1": "View Policy",
  "simplePolicy.lb3.2": "Collapse",
  "simplePolicy.lb4": "Create policy, named",

  readonly: "Read-Only",
  readwrite: "Read-Write",

  "simplePolicy.lb5": "And authorized to",
  subusers: "Sub User",
  usergroups: "User Group",
  roles: "Role",

  "simplePolicy.ok": "OK",
  "simplePolicy.noauth.message1": "You are not authorized to get user list",
  "simplePolicy.noauth.message2": "You are not authorized to get use group list",
  "simplePolicy.noauth.message3": "You are not authorized to get role list",
  "simplePolicy.success": "Apply policy successfully",

  //external path
  "externalPath.add": "Add External Path",
  "externalPath.path": "External Path",
  "externalPath.path.tooltip": "Fill in a bucket or a path under a bucket that is granted permission through Bucket Policy, provided by the grantor",
  "externalPath.add.success": "Added successfully",
  "externalPath.delete.title": "Delete External Path",
  "externalPath.delete.message": "External Path:<code>{{path}}</code>, Region:<code>{{region}}</code>, Are you sure you want to delete this external path?",
  "externalPath.delete.success": "Deleted External Path Successfully",

  //settings
  "settings.WhetherResumeUpload": "Resume upload",
  "settings.WhetherResumeUpload.msg": "Enable resume upload",
  "settings.ResumeUploadThreshold": "Resume upload threshold (Unit: MB, Range: 10 MB - 1000 MB)",
  "settings.ResumeUploadSize": "Resume upload size (Unit: MB, Range: 8 MB - 100 MB)",
  "settings.WhetherUploadSpeedLimitEnabled": "Upload speed limit",
  "settings.WhetherUploadSpeedLimitEnabled.msg": "Enable upload speed limit",
  "settings.UploadSpeedLimit": "Upload single file speed limit（Unit: KB/s，Range: 1 KB/s - 102400 KB/s）",
  "settings.WhetherResumeDownload": "Resume download",
  "settings.WhetherResumeDownload.msg": "Enable resume download",
  "settings.ResumeDownloadThreshold": "Resume download threshould (Unit: MB, Range: 10 MB - 1000 MB)",
  "settings.ResumeDownloadSize": "Resume download size (Unit: MB, Range: 8 MB - 100 MB)",
  "settings.maxUploadConcurrency": "Maximum number of upload tasks",
  "settings.maxDownloadConcurrency": "Maximum number of download tasks",
  "settings.WhetherDownloadSpeedLimitEnabled": "Download speed limit",
  "settings.WhetherDownloadSpeedLimitEnabled.msg": "Enable download speed limit",
  "settings.DownloadSpeedLimit": "Download single file speed limit（Unit: KB/s，Range: 1 KB/s - 102400 KB/s）",
  "settings.WhetherShowThumbnail": "Whether to show the image thumbnail",
  "settings.WhetherShowThumbnail.msg": "Displaying thumbnails in the list of files will consume a certain amount of traffic",
  "settings.ExternalPath": "External link",
  "settings.WhetherExternalPathEnabled.msg": "Enable external link",
  "settings.StepByStepLoadingFiles": "File list loading step by step",
  "settings.WhetherStepByStepLoadingFiles.msg": "Enable file list loading step by step mode",
  "settings.system": "System Settings",
  "settings.isDebug": "Debug",
  "settings.isDebug.msg": "Enable debug log",
  "settings.autoUpgrade": "Auto update",
  "settings.autoUpgrade.msg": "Download update package automatically",
  "settings.success": "Saved successfully",


  //bookmark
  "bookmarks.title": "Bookmarks",
  time: "Time",
  "bookmarks.delete.success": "Deleted bookmark successfully",

  "opensource.address": "Open source",
  foundNewVersion: "Found new version",
  clickToDownload: "Click to download",
  currentIsLastest: "This is the lastest version!",

  //files
  upload: "Upload",
  "folder.create": "Directory",
  "folder.create.success": "Directory created successfully",
  "folder.name": "Name",

  download: "Download",
  copy: "Copy",
  move: "Move",
  paste: "Paste",
  rename: "Rename",
  getDownloadLink: "Get Download Link",
  exportDownloadLinks: "Export Download Links",
  genAuthToken: "Authorization Token",

  "exportDownloadLinks.message": "Download links are exported，please open {{path}} to view",

  "rename.to": "Rename To",
  "whetherCover.title": "Whether cover",
  "whetherCover.message1": "Has the folder of the same name, is it covered?",
  "whetherCover.message2": "Has the file of the same name already covered?",
  "rename.success": "Rename successfully",
  "rename.on": "Renaming...",
  "folder.in": "Folder",
  file: "File",
  folder: "Folder",

  "copy.on": "Copying...",
  "move.on": "Moving...",

  "use.cancelled": "Cancelled by user",

  "copy.error1": "Some files can not be copied",
  "move.error1": "Some files can not be moved",
  "copy.success": "Copied successfully",
  "move.success": "Moved successfully",

  stop: "Stop",

  "paste.resources": "Paste to current directory",

  "copy.cancel": "Cancel Copy",
  "move.cancel": "Cancel Move",

  "search.files.placeholder": "Filter by name prefix",

  "genAuthToken.title": "Generate Authorization Token",
  "genAuthToken.message1.1": "Authorize to Bucket",
  "genAuthToken.message1.2": "Authorize to Folder",
  "genAuthToken.message2": "Privilege",

  "effective.duration": "Effective duration",
  "unit.second": "s",

  "genAuthToken.message3.1": "You also need to specify a role",
  "genAuthToken.message3.2": "This role requires at least {{privilege}} permission to access this {{type}}",

  "genAuthToken.message4": "Authorization Token",
  "genAuthToken.message5": "Log in to the S3 browser using the generated authorization code above, You can get {{privilege}} permission to access this {{type}} [{{object}}], Valid until {{expiration}}.",
  "genAuthToken.message6.1": "Generate",
  "genAuthToken.message6.2": "Re-Generate",

  "deleteModal.title": "Delete These Files",
  "deleteModal.message1": "The following directory or file will be deleted",
  "delete.on": "Deleting...",
  "delete.success": "Deleted successfully",
  "deleteModal.message2": "Has been cancelled",
  "deleteModal.message3": "Some directories or files can not be deleted",

  "paste.message1": '<span class="text-info">{{action}}</span> <span class="text-info">{{name}}...</span> to this directory (The same file or directory will be covered)？',

  "acl.update.title": "Update ACL",
  "acl.update.success": "ACL Updated successfully",
  "aclType.private.message": "Private: All access to object needs to be authenticated",
  "aclType.public-read.message": "Public read: need to write for the operation of the object authentication; object can be anonymous read",
  "aclType.public-read-write.message": "Public read and write: Everyone can read and write objects",

  "getDownloadLink.title": "Get Download Link",
  "getDownloadLink.warning": "An archived storage file can only be accessed when they are restored",
  "exportDownloadLinks.title": "Export Download Links",
  downloadLink: "Download Link",
  "getDownloadLink.message": "Please enter the validity period of the link",
  generate: "Generate",
  generateAndExport: "Generate and export",
  "qrcode.download": "Sweep code to download",

  "restore.checker.message1": "Archive need to be restored in order to preview or download.",
  "restore.immediately": "Restore immediately",
  "restore.checker.message2": "The archive has been restored",
  "restore.onprogress": "Archive file is recovering, please be patient ...",
  "restore.on": "Sending...",
  "restore.success": "Restore request has been send successfully",
  "restore.days": "Days",
  "restore.message2": "The expiration time",
  "restore.title": "Restore",
  restore: "Restore",
  "restore.tooltip.frozen": "Frozen",
  "restore.tooltip.unfreezing": "Unfreezing",
  "restore.tooltip.unfrozen": "Unfrozen",
  "restore.message.unfreezing": "Archived storage file is being restored",
  "restore.message.unfrozen": "Archived storage file has been restored",
  "restore.message.head_error": "Failed to get status of the archived storage file",

  preview: "Preview",
  "cannot.preview": "Can not preview",
  "cannot.preview.this.file": "Can not preview this file.",
  "tryto.open.as.textfile": "Try to open as a text file",

  save: "Save",
  size: "Size",
  filesize: "File size",
  "codepreview.notsupport": "This file can not be opening directly, please download to the local and then open.",
  "download.file": "Download File",

  lastModifyTime: "Last Modified",
  "to.load.more": "Load more...",
  "loading.more": "Loading more...",

  "download.addtolist.on": "Being added to the download queue",
  "download.addtolist.success": "All added",

  "upload.addtolist.on": "Being added to the upload queue",
  "upload.addtolist.success": "All added",
  "upload.duplicated": "File duplicated",

  "transframe.search.placeholder": "Filter by name or status",

  "upload.overwrite": "Enable overwrite for uploading",
  "upload.overwrite.disabled": "Disable overwrite for uploading",
  "download.overwrite": "Enable overwrite for downloading",
  "download.overwrite.disabled": "Disable overwrite for downloading",
  "start.all": "Start All",
  "pause.all": "Stop All",
  "clear.finished": "Clear Finished",
  "clear.all": "Clear All",

  "clear.all.title": "Clear All",
  "clear.all.download.message": "Are you sure you want to clear all download tasks?",
  "clear.all.upload.message": "Are you sure you want to clear all upload tasks?",

  "pause.on": "Stopping...",
  "pause.success": "Stopped successfully",
  "remove.from.list.title": "Remove",
  "remove.from.list.message": "Are you sure you want to remove this task?",

  "status.running.uploading": "Uploading",
  "status.running.downloading": "Downloading",
  "status.running": "Running",
  "status.stopped": "Stopped",
  "status.failed": "Failed",
  "status.finished": "Finished",
  "status.waiting": "Waiting",
  "status.verifying": "Verifying",

  enable: "Enable",
  disable: "Disable",
  show: "Show",

  user: "UserName",
  pass: "Password",
  test: "Test",

  "click.copy": "Copy",

  "http.headers": "Http Headers",
  key: "Key",
  value: "Value",

  "setting.on": "Setting..",
  "setting.success": "Setting successfully",

  "file.download.address": "file download address",

  "copy.successfully": "It has been copied to the clipboard",
  "click.download": "click to download",
  "qrcode.download": "scan qrcode to download",

  saving: "Saving",
  "save.successfully": "Saved",
  "content.isnot.modified": "The content is not modified",

  logining: "Logging in ...",
  "login.successfully": "Login successful, jumping ...",
  "login.endpoint.error": "Please make sure Endpoint is correct",

  "upgrade.start": "Upgrade",
  "upgrade.pause": "Pause",
  "upgrade.continue": "Continue",
  "upgrade.downloading": "Start download...",
  "upgrade.download.failed": "Automatic update failed, please manually download the installation package.",
  "upgrade.download.success": "Download successfully, please click to install.",
};
