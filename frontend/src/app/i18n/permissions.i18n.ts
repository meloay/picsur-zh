import { Permission } from 'picsur-shared/dist/dto/permissions.enum';

export const UIFriendlyPermissions: {
  [key in Permission]: string;
} = {
  [Permission.ImageView]: '查看图片',
  [Permission.ImageUpload]: '上传图片',
  [Permission.ImageManage]: '管理自己的图片',
  [Permission.ImageDeleteKey]: '使用删除密钥',

  [Permission.UserLogin]: '登录',
  [Permission.UserKeepLogin]: '保持登录',
  [Permission.UserRegister]: '注册',

  [Permission.Settings]: '查看设置',

  [Permission.ApiKey]: '使用 API 密钥',

  [Permission.ImageAdmin]: '图片管理',
  [Permission.UserAdmin]: '用户管理',
  [Permission.RoleAdmin]: '角色管理',
  [Permission.ApiKeyAdmin]: 'API 密钥管理',
  [Permission.SysPrefAdmin]: '系统管理',
};
