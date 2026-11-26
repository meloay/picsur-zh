import { SysPreference } from 'picsur-shared/dist/dto/sys-preferences.enum';

export const SysPreferenceUI: {
  [key in SysPreference]: {
    name: string;
    helpText: string;
    category: string;
  };
} = {
  [SysPreference.HostOverride]: {
    name: '自定义主机名',
    helpText: '覆盖服务器主机名，适用于使用其他域名访问服务的情况。',
    category: '常规设置',
  },

  [SysPreference.RemoveDerivativesAfter]: {
    name: '图片缓存有效期',
    helpText:
      '转换图片缓存的保留时间，不影响原图。缩短时间可节省磁盘空间，但会增加 CPU 开销。设为 0 可禁用。',
    category: '图片处理',
  },
  [SysPreference.AllowEditing]: {
    name: '允许编辑图片',
    helpText: '允许调整尺寸、翻转等图片处理操作，这些功能会消耗更多 CPU 资源。',

    category: '图片处理',
  },
  [SysPreference.ConversionTimeLimit]: {
    name: '转换与编辑超时',
    helpText: '图片转换与编辑的时间限制。性能较低的设备可能需要增加此值。',
    category: '图片处理',
  },
  [SysPreference.ConversionMemoryLimit]: {
    name: '转换与编辑内存限制（MB）',
    helpText: '图片转换与编辑的内存限制。处理超大图片时可能需要增加此值。',
    category: '图片处理',
  },

  [SysPreference.JwtSecret]: {
    name: 'JWT 签名密钥',
    helpText: '用于签署 JWT 身份令牌的密钥。',
    category: '身份认证',
  },
  [SysPreference.JwtExpiresIn]: {
    name: 'JWT 有效期',
    helpText: 'JWT 身份令牌的有效时间。',
    category: '身份认证',
  },
  [SysPreference.BCryptStrength]: {
    name: 'BCrypt 加密强度',
    helpText: 'BCrypt 哈希强度，推荐值为 10。低性能设备可适当降低。',
    category: '身份认证',
  },

  [SysPreference.EnableTracking]: {
    name: '启用 Ackee 访问统计',
    helpText: '使用 Ackee 统计网站访问情况，需设置统计服务地址和网站 ID。',
    category: '使用统计',
  },
  [SysPreference.TrackingUrl]: {
    name: 'Ackee 统计服务地址',
    helpText:
      'Ackee 统计服务器地址。请求经过代理，请确保正确处理 X-Forwarded-For 请求头。',
    category: '使用统计',
  },
  [SysPreference.TrackingId]: {
    name: 'Ackee 网站 ID',
    helpText: '需要统计的网站 ID。',
    category: '使用统计',
  },

  [SysPreference.EnableTelemetry]: {
    name: '启用系统遥测',
    helpText: '启用后会向开发者发送匿名使用数据。',
    category: '使用统计',
  },
};
