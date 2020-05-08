import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
  message: {
    'hello': '你好, 世界',
    'login': '登录'
  },
  header: {
    'language': '中文',
    'help': '帮助',
    'documents': '文档',
    'commercialSupport': '商业支持'
  },
  action: {
    'update': '更新',
    'delete': '删除',
    'exportRange': '导出范围',
    'exportAll': '导出全部',
    'exportOnlySelectedItems': '仅导出选中项',
    'downloadTheImportedTemplateOrUseTheExportedCSVFormat': '下载导入的模板或使用导出的csv格式',
    'downloadImportTemplate': '下载导入模板',
    'downloadTheUpdatedTemplateOrUsTheExportedCSVFormat': '下载更新的模板或使用导出的csv格式',
    'downloadUpdateTemplate': '下载更新模板',
    'upload': '点击上传',
    'onlyCSVFilesCanBeUploaded': '只能上传CSV文件'
  },
  common: {
    'name': '名称',
    'action': '动作',
    'role': '角色',
    'username': '用户名',
    'language': '语言',
    'help': '帮助',
    'more': '更多',
    'update': '更新',
    'delete': '删除',
    'detail': '详情',
    'baseInfo': '基本信息',
    'createdBy': '创建人',
    'dateCreated': '创建日期',
    'comment': '备注',
    'create': '创建',
    'moreActions': '更多操作',
    'deleteSelected': '删除所选',
    'updateSelected': '更新所选',
    'deleteSuccessMsg': '删除成功',
    'deleteFailedMsg': '删除失败',
    'search': '搜索',
    'source': '来源',
    'status': '状态',
    'actions': '动作',
    'monitor': '监控',
    'run': '执行',
    'deleteConfirmMsg': '你确定要删除',
    'info': '提示',
    'submit': '提交',
    'reset': '重置',
    'this field is required': '这个字段是必填项',
    'validity': '有效性',
    'confirm': '确认',
    'cancel': '取消',
    'import': '导入',
    'export': '导出',
    'other': '其它',
    'createSuccessMsg': '创建成功',
    'updateSuccessMsg': '更新成功',
    'updateFailedMsg': '更新失败',
    'disableSelected': '禁用所选',
    'activeSelected': '激活所选',
    'rows': '行',
    'basicInfo': '基本信息',
    'commandFilter': '命令过滤器',
    'add': '添加',
    'auth': '认证',
    'others': '其他',
    'members': '成员',
    'email': '邮件',
    'dateExpired': '失效日期',
    'quickUpdate': '快速更新',
    'send': '发送',
    'unblock': '解锁',
    'active': '激活中',
    'docs': '文档',
    'support': '支持',
    'profile': '个人信息',
    'userPage': '用户页面',
    'apiKey': 'API Key',
    'logout': '退出'
  },
  route: {
    'dashboard': '仪表盘',
    'Users': '用户管理',
    'UserList': '用户列表',
    'UserDetail': '用户详情',
    'UserGroupList': '用户组',
    'UserGroupDetail': '用户组详情',
    'Assets': '资产管理',
    'AssetList': '资产列表',
    'DomainList': '网关列表',
    'AdminUserList': '管理用户',
    'SystemUserList': '系统用户',
    'LabelList': '标签管理',
    'CommandFilterList': '命令过滤',
    'PlatformList': '平台列表',
    'Applications': '应用管理',
    'RemoteApp': '远程应用',
    'DatabaseApp': '数据库应用',
    'Perms': '权限管理',
    'AssetPermission': '资产授权',
    'AssetPermissionDetail': '资产授权详情',
    'AssetPermissionCreate': '创建资产授权规则',
    'AssetPermissionUpdate': '更新资产授权规则',
    'RemoteAppPermission': '远程应用授权',
    'RemoteAppPermissionDetail': '远程应用授权详情',
    'RemoteAppPermissionCreate': '创建远程应用授权规则',
    'RemoteAppPermissionUpdate': '更新远程应用授权规则',
    'DatabaseAppPermission': '数据库应用授权',
    'DatabaseAppPermissionDetail': '数据库应用授权详情',
    'DatabaseAppPermissionCreate': '创建数据库应用授权规则',
    'DatabaseAppPermissionUpdate': '更新数据库应用授权规则',
    'Sessions': '会话管理',
    'SessionOnline': '在线会话',
    'SessionOffline': '历史会话',
    'SessionDetail': '会话详情',
    'Commands': '命令记录',
    'WebTerminal': 'Web终端',
    'FileManager': '文件管理',
    'Terminal': '终端管理',
    'JobCenter': '作业中心',
    'TaskList': '任务列表',
    'TaskDetail': '任务详情',
    'BatchCommand': '批量命令',
    'TaskMonitor': '任务监控',
    'Tickets': '工单管理',
    'Audits': '日志审计',
    'LoginLog': '登录日志',
    'FtpLog': 'FTP日志',
    'OperateLog': '操作日志',
    'PasswordChangeLog': '改密日志',
    'Settings': '系统设置',
    'UserCreate': '创建用户',
    'UserGroupCreate': '创建用户组',
    'UserUpdate': '更新用户',
    'AdminUserCreate': '创建管理用户',
    'PlatformCreate': '创建系统平台',
    'PlatformUpdate': '更新系统平台',
    'CommandFilterCreate': '创建命令过滤器',
    'CommandFilterUpdate': '更新命令过滤器',
    'CreateReplayStorage': '创建录像存储',
    'ReplayStorageUpdate': '更新录像存储',
    'CreateCommandStorage': '创建命令存储',
    'CommandStorageUpdate': '更新命令存储',
    'CommandFilterRulesCreate': ' 创建命令过滤器规则'
  },
  auth: {
    // 'You have been logged out, Please log in again': '账号已退出，请重新登录',
    'authExpireMsg': '账号已退出，请重新登录',
    'Re-Login': '重新登录'
  },
  // 用户模块翻译
  users: {
    'createUser': '创建用户',
    'updateUser': '更新用户',
    'userDetail': '用户详情',
    'name': '姓名',
    'username': '用户名',
    'role': '角色',
    'userGroups': '用户组',
    'email': '邮箱',
    'userGroup': '用户组',
    'groupMembers': '组下成员',
    'MFAAuth': 'MFA 认证',
    'source': '来源',
    'validity': '有效',
    'action': '操作',
    'update': '更新',
    'delete': '删除',
    'search': '搜索',
    'createBy': '创建者',
    'dateExpired': '失效日期',
    'dateJoined': '创建日期',
    'lastLogin': '最后登录',
    'lastPasswordUpdated': '最后更新密码',
    'userGroupList': '用户组列表',
    'createUserGroup': '创建用户组',
    'comment': '备注',
    'user': '用户',
    'admin': '管理员',
    'auditor': '审计员',
    'off': 'OFF',
    'on': 'ON',
    'local': '数据库',
    'disable': '禁用',
    'enable': '启用',
    'forceEnable': '强制启用',
    'quickModify': '快速修改',
    'active': '激活中',
    'forceEnabledMFA': '强制启用多因子认证',
    'resetMFA': '重置多因子认证',
    'reset': '重置',
    'sendResetPasswordMail': '发送重置密码邮件',
    'sendResetSshKeyMail': '发送重置密钥邮件',
    'send': '发送',
    'joinUserGroups': '添加到用户组',
    'join': '加入',
    'loginConfirm': '登录复核',
    'reviewers': '审批人',
    'confirm': '确认',
    'userPermissions': '用户授权',
    'assetsGranted': '资产的授权',
    'assetPermission': '授权资产',
    'remoteAppsGranted': '授权的远程应用',
    'remoteAppsPermission': '远程应用授权',
    'databaseAppsGranted': '授权的数据库应用',
    'databaseAppsPermission': '数据库应用授权',
    'account': '账户',
    'authentication': '认证',
    'secure': '安全',
    'dateLastLogin': '最后登录日期',
    'datePasswordUpdated': '更新密码日期',
    'MFA': '多因子认证',
    'resetMFATitle': '重置多因子认证',
    'resetPublicKeyTitle': '发送重置密钥邮件',
    'resetPasswordTitle': '发送重置密码邮件',
    'unblockUser': '解除登录限制',
    'resetPasswordWarningMsg': '将失效用户当前密码，并发送重设密码邮件到用户邮箱',
    'resetPasswordSuccessMsg': '已发送邮件到用户邮箱',
    'resetPublicKeyWarningMsg': '将会失效用户当前密钥，并发送重置邮件到用户邮箱',
    'resetPublicKeySuccessMsg': '已发送邮件到用户邮箱',
    'unblockSuccessMsg': '该用户账号已解锁',
    'resetMFAWarningMsg': '将重置用户的MFA配置，用户需要再次设置',
    'resetMFAdSuccessMsg': '用户的MFA已重置成功'
  },
  // 用户组
  assets: {
    // asset
    'asset_list': '资产列表',
    'asset_detail': '资产详情',
    'create_asset': '创建资产',
    'update_asset': '更新资产',
    'hostname': '主机名',
    'ip': 'IP',
    'hardware': '硬件',
    'reachable': '可连接',
    'action': '动作',
    'update': '更新',
    'delete': '删除',
    'search': '搜索',
    'delete_selected': '批量删除',
    'update_selected': '批量更新',
    'remove_from_this_node': '从节点移除',
    'deactive_selected': '禁用所选',
    'active_selected': '激活所选',
    'submit': '提交',
    'platform': '系统平台',
    'public_ip': '公网IP',
    'domain': '网域',
    'admin_user': '管理用户',
    'node': '节点',
    'label': '标签',
    'comment': '备注',
    'basic': '基本',
    'protocols': '协议组',
    'auth': '认证',
    'labels': '标签管理',
    'other': '其它',
    'vendor': '制造商',
    'model': '型号',
    'cpu': 'CPU',
    'memory': '内存',
    'disk': '硬盘',
    'os': '操作系统',
    'is_active': '激活',
    'serial_number': '序列号',
    'asset_number': '资产编号',
    'date_joined': '创建日期',
    'quick_modify': '快速修改',
    'active': '激活中',
    'refresh_hardware': '更新硬件信息',
    'test_connective': '测试可连接性',
    'refresh': '刷新',
    'test': '测试',
    'confirm': '确认',
    'asset_user_list': '资产用户列表',
    // 网域
    'domain_list': '网域列表',
    'domain_detail': '网域详情',
    'create_domain': '创建网域',
    'update_domain': '更新网域',
    'name': '名称',
    'asset': '资产',
    'gateway': '网关',
    'date_created': '创建日期',
    'port': '端口',
    'TestConnection': '测试连接',
    // 管理用户
    'AdminUserList': '管理用户列表',
    'AdminUserDetail': '管理用户详情',
    'AdminUserCreate': '创建管理用户',
    'AdminUserUpdate': '更新管理用户',
    'username': '用户名',
    'login_mode_display': '登录模式',
    'replace_node_assets_admin_user_with_this': '替换资产的管理员',
    'select_nodes': '选择节点',
    // 系统用户
    'SystemUserList': '系统用户列表',
    'SystemUserDetail': '系统用户详情',
    'SystemUserCreate': '创建系统用户',
    'SystemUserUpdate': '更新系统用户',
    'protocol': '协议',
    'assetlist': '资产列表',
    'loginMode': '登录模式',
    'quick_update': '快速更新',
    'auto_push': '自动更新',
    // 标签
    'label_list': '标签列表',
    'label_detail': '标签详情',
    'create_label': '创建标签',
    'update_label': '更新标签',
    'value': '值',
    // 命令过滤
    'command_filter_list': '命令过滤器列表',
    'create_command_filter': '创建命令过滤器',
    'update_command_filter': '更新命令过滤器',
    'commandFilterDetail': '命令过滤器详情',
    'rules': '规则',
    'systemUser': '系统用户',
    'date_updated': '更新日期',
    'detail': '详情',
    'type': '类型',
    'content': '内容',
    'priority': '优先级',
    'ruleaction': '策略',
    'binding_to_system_user': '绑定到系统用户',
    'created_by': '创建者',
    // 系统平台
    'platform_list': '平台列表',
    'create_platform': '创建系统平台',
    'update_platform': '更新系统平台',
    'platform_detail': '平台详情',
    'BasePlatform': '基础平台',
    'charset': '编码',
    'meta': '元数据'

  },
  applications: {
    'applications': '应用管理',
    'remote_app_list': '远程应用列表',
    'create_remote_app': '创建远程应用',
    'remote_app_detail': '远程应用详情',
    'update_remote_app': '更新远程应用',
    'name': '名称',
    'appType': '应用类型',
    'asset': '资产',
    'action': '操作',
    'update': '更新',
    'delete': '删除',
    'comment': '备注',
    'database_app_list': '数据库应用列表',
    'database_app_detail': '数据库应用详情',
    'create_database_app': '创建数据库应用',
    'update_database_app': '更新数据库应用',
    'type': '类型',
    'host': '主机',
    'port': '端口',
    'database': '数据库',
    'search': '搜索',
    'date_created': '创建日期',
    'created_by': '创建者',
    'app_path': '应用路径'
  },
  perms: {
    'Asset permissions': '资产授权',
    'RefreshPermissionCache': '刷新授权缓存',
    'ReFreshSuccess': '刷新成功',
    'ReFreshFail': '刷新失败',
    'IsValid': '有效',
    'IP': 'IP',
    'Hostname': '主机名',
    'All': '全部',
    'Connect': '连接',
    'UpDownload': '上传下载',
    'UploadFile': '上传文件',
    'DownloadFile': '下载文件',
    'Basic': '基本',
    'User': '用户',
    'Asset': '资产',
    'Actions': '动作',
    'UserGroups': '用户组',
    'Node': '节点',
    'SystemUser': '系统用户',
    'UserCount': '用户数量',
    'UserGroupCount': '用户组数量',
    'AssetCount': '资产数量',
    'NodeCount': '节点数量',
    'SystemUserCount': '系统用户数量',
    'DateStart': '开始日期',
    'DateExpired': '失效日期',
    'DateCreated': '创建日期',
    'CreatedBy': '创建者',
    'Comment': '备注',
    'QuickModify': '快速修改',
    'AssetPermissionDetail': '资产授权详情',
    'UsersAndUserGroups': '用户或用户组',
    'AssetAndNode': '资产或节点',
    'Active': '激活中',
    'Add user to this permission': '添加用户',
    'Add user group to this permission': '添加用户组',
    'Add asset to this permission': '添加资产',
    'Add node to this permission': '添加节点',
    'Add System User to this permission': '添加系统用户',
    //
    'RemoteApp': '远程应用',
    'RemoteAppCount': '远程应用数量',
    'RemoteAppPermissionDetail': '远程应用授权详情',
    'Add RemoteApp to this permission': '添加远程应用',
    //
    'DatabaseApp': '数据库应用',
    'DatabaseAppPermissionDetail': '数据库应用授权详情',
    'Add DatabaseApp to this permission': '添加数据库应用'
  },
  sessions: {
    'id': 'ID',
    'user': '用户',
    'asset': '资产',
    'systemUser': '系统用户',
    'remoteAddr': '远端地址',
    'protocol': '协议',
    'loginFrom': '登录来源',
    'command': '命令',
    'dateStart': '开始日期',
    'duration': '时长',
    'terminate': '终断',
    'dateEnd': '结束日期',
    'commands': '命令记录',
    'replay': '回放',
    'download': '下载',
    'riskLevel': '风险等级',
    'session': '会话',
    'date': '日期',
    'addr': '地址',
    'active': '激活中',
    'alive': '在线',
    'StorageConfiguration': '存储配置',
    'join': '加入',
    'goto': '转到',
    'sessionDetail': '会话详情',
    'quickModify': '快速修改',
    'replaySession': '回放会话:',
    'downloadReplay': '下载录像:',
    'go': '执行',
    'terminalDetail': '终端详情',
    'name': '名称:',
    'sshPort': 'SSH端口:',
    'httpPort': 'HTTP端口:',
    'comment': '备注:',
    'dateCreated': '创建日期:',
    'info': '信息',
    'createCommand': '创建命令存储',
    'createReplay': '创建录像存储',
    'commandStorage': '命令存储',
    'replayStorage': '录像存储',
    'storage': '存储',
    'test': '测试',
    'createReplyStorage': '创建录像存储',
    'endPoint': '端点',
    'bucket': '桶名称',
    'type': '类型',
    'containerName': '容器名称',
    'accountName': '账户名称',
    'accountKey': '账户密钥',
    'endpointSuffix': '端点后缀',
    'docType': '文档类型',
    'index': '索引',
    'hosts': '主机'
  },
  jobcenter: {
    'RunTimes': '执行次数',
    'Hosts': '主机',
    'Success': '成功',
    'Date': '日期',
    'Time': '时间',
    'run': '执行',
    'ID': 'ID',
    'TaskDetail': '任务详情',
    'TaskVersions': '任务各版本',
    'Execution': '执行历史',
    'LaskExecutionOutput': '最后执行输出',
    'DateCreated': '创建日期',
    'TotalVersions': '版本数量',
    'LatestVersion': '最新版本',
    'LastRun': '最后运行',
    'TimeDelta': '运行时间',
    'IsFinished': '是否完成',
    'IsSuccess': '成功',
    'Contents': '内容',
    'Last run failed hosts': '最后运行失败的主机',
    'Last run success hosts': '最后运行成功的主机',
    'Version': '版本',
    'Pattern': '模式',
    'RunAs': '运行用户',
    'Become': 'Become',
    'Datetime': '日期',
    'Stat': '成功/失败/总',
    'Ratio': '比例',
    'Yes': '是',
    'No': '否',
    'versionDetail': '版本详情',
    'VersionRunExecution': '执行历史',
    'SuccessHosts': '成功资产',
    'FailedHosts': '失败资产',
    'ExecutionDetail': '执行历史详情',
    'Output': '输出',
    'CreatedBy': '创建者',
    'Tasks': '任务',
    'Options': '选项',
    'TaskName': '任务名称',
    'DateStart': '开始日期'
  },
  tickets: {
    'title': '标题',
    'user': '用户',
    'type': '类型',
    'status': '状态',
    'date': '日期',
    'MyTickets': '我的工单',
    'AssignedMe': '待处理'
  },
  tree: {
    'AddNode': '添加节点',
    'RenameNode': '重命名节点',
    'DeleteNode': '删除节点'
  },
  setting: {
    'setting': '系统设置',
    'Basic': '基本设置',
    'Email': '邮件设置',
    'EmailContent': '邮件内容设置',
    'Ldap': 'LDAP设置',
    'Terminal': '终端设置',
    'Security': '安全设置',
    'createUserSetting': '创建用户设置',
    'basicSetting': '基本设置',
    'SecuritySetting': '安全设置',
    'PasswordCheckRule': '密码校验规则',
    'siteUrl': '当前站点URL',
    'userGuideUrl': '用户向导URL',
    'emailSubjectPrefix': 'Email主题前缀',
    'emailHost': 'SMTP主机',
    'emailPort': 'SMTP端口',
    'emailHostUser': 'SMTP账号',
    'emailHostPassword': 'SMTP密码',
    'emailEmailFrom': '发送账号',
    'emailRecipient': '测试收件人',
    'emailUserSSL': '使用SSL',
    'emailUserTLS': '使用TLS',
    'emailCustomUserCreatedSubject': '创建用户邮件的主题',
    'emailCustomUserCreatedHonorific': '创建用户邮件的敬语',
    'emailCustomUserCreatedBody': '创建用户邮件的内容',
    'emailCustomUserCreatedSignature': '署名',
    'authLdapServerUri': 'LDAP地址',
    'authLdapBindDn': '绑定DN',
    'authLdapBindPassword': '密码',
    'authLdapSearchOu': '用户OU',
    'authLdapSearchFilter': '用户过滤器',
    'authLdapUserAttrMap': 'LDAP属性映射',
    'authLdap': '启用LDAP认证',
    'terminalPasswordAuth': '密码认证',
    'terminalPublicKeyAuth': '密钥认证',
    'terminalHeartbeatInterval': '心跳间隔',
    'terminalAssetListSortBy': '资产列表排序',
    'terminalAssetListPageSize': '资产分页每页数量',
    'terminalSessionKeepDuration': '会话保留时长',
    'terminalTelnetRegex': 'Telnet 成功正则表达式',
    'securityMfaAuth': '多因子认证',
    'securityCommandExecution': '批量命令',
    'securityServiceAccountRegistration': '终端注册',
    'securityLoginLimitCount': '限制登录失败次数',
    'securityLoginLimitTime': '禁止登录时间间隔',
    'securityMaxIdleTime': '连接最大空闲时间',
    'securityPasswordExpirationTime': '密码过期时间',
    'securityPasswordMinLength': '密码最小长度',
    'securityPasswordUpperCase': '必须包含大写字母',
    'securityPasswordLowerCase': '必须包含小写字母',
    'securityPasswordNumber': '必须包含数字字符',
    'securityPasswordSpecialChar': '必须包含特殊字符',
    'Hostname': '主机名',
    'emailTest': '测试连接',
    helpText: {
      'siteUrl': 'eg: http://jumpserver.abc.com:8080',
      'userGuideUrl': '用户第一次登录，修改profile后重定向到地址',
      'emailSubjectPrefix': '提示: 一些关键字可能会被邮件提供商拦截，如 跳板机、JumpServer',
      'emailHostPassword': '提示：一些邮件提供商需要输入的是Token',
      'emailEmailFrom': '提示：发送邮件账号，默认使用SMTP账号作为发送账号',
      'emailRecipient': '提示：仅用来作为测试邮件收件人',
      'emailCustomUserCreatedSubject': '提示: 创建用户时，发送设置密码邮件的主题 (例如: 创建用户成功)',
      'emailCustomUserCreatedHonorific': '提示: 创建用户时，发送设置密码邮件的敬语 (例如: 您好)',
      'emailCustomUserCreatedBody': '提示: 创建用户时，发送设置密码邮件的内容',
      'emailCustomUserCreatedSignature': '提示: 邮件的署名 (例如: jumpserver)',
      'authLdapSearchOu': '使用|分隔各OU',
      'authLdapSearchFilter': '可能的选项是(cn或uid或sAMAccountName=%(user)s)',
      'authLdapUserAttrMap': '用户属性映射代表怎样将LDAP中用户属性映射到jumpserver用户上，username, name,email 是jumpserver的属性',
      'terminalHeartbeatInterval': '单位: 秒',
      'terminalSessionKeepDuration': '单位：天。 会话、录像、命令记录超过该时长将会被删除(仅影响数据库存储, oss等不受影响)',
      'terminalTelnetRegex': '登录telnet服务器成功后的提示正则表达式，如: Last\\s*login|success|成功',
      'securityLoginLimitTime': '提示：（单位：分）当用户登录失败次数达到限制后，那么在此时间间隔内禁止登录',
      'securityMaxIdleTime': '提示：如果超过该配置没有操作，连接会被断开 （单位：分）',
      'securityPasswordExpirationTime': '提示：（单位：天）如果用户在此期间没有更新密码，用户密码将过期失效； 密码过期提醒邮件将在密码过期前5天内由系统（每天）自动发送给用户'
    },
    helpTip: {
      'emailUserSSL': '如果SMTP端口是465，通常需要启用SSL',
      'emailUserTLS': '如果SMTP端口是587，通常需要启用TLS',
      'securityMfaAuth': '开启后，所有用户登录必须使用多因子认证（对所有用户有效，包括管理员)',
      'securityCommandExecution': '允许用户批量执行命令',
      'securityServiceAccountRegistration': '允许使用bootstrap token注册终端, 当终端注册成功后可以禁止',
      'securityPasswordUpperCase': '开启后，用户密码修改、重置必须包含大写字母',
      'securityPasswordLowerCase': '开启后，用户密码修改、重置必须包含小写字母',
      'securityPasswordNumber': '开启后，用户密码修改、重置必须包含数字字符',
      'securityPasswordSpecialChar': '开启后，用户密码修改、重置必须包含特殊字符'
    }
  },
  audits: {
    'username': '用户名',
    'type': '类型',
    'ip': 'IP',
    'city': '城市',
    'user_agent': 'Agent',
    'mfa': '多因子认证',
    'reason': '原因',
    'status': '状态',
    'datetime': '日期'
  },
  ...zhLocale
}

export default cn
