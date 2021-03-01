import i18n from '@/i18n/i18n'

export const aliyun = 'aliyun'
export const aws_international = 'aws_international'
export const aws_china = 'aws_china'
export const huaweicloud = 'huaweicloud'
export const qcloud = 'qcloud'
export const azure = 'azure'
export const vmware = 'vmware'

export const ACCOUNT_PROVIDER_ATTRS_MAP = {
  [aliyun]: {
    name: aliyun,
    title: i18n.t('xpack.Cloud.Aliyun'),
    attrs: ['access_key_id', 'access_key_secret']
  },
  [aws_international]: {
    name: aws_international,
    title: i18n.t('xpack.Cloud.AWS_Int'),
    attrs: ['access_key_id', 'access_key_secret']
  },
  [aws_china]: {
    name: aws_china,
    title: i18n.t('xpack.Cloud.AWS_China'),
    attrs: ['access_key_id', 'access_key_secret']
  },
  [huaweicloud]: {
    name: huaweicloud,
    title: i18n.t('xpack.Cloud.HuaweiCloud'),
    attrs: ['access_key_id', 'access_key_secret']
  },
  [qcloud]: {
    name: qcloud,
    title: i18n.t('xpack.Cloud.Qcloud'),
    attrs: ['access_key_id', 'access_key_secret']
  },
  [azure]: {
    name: azure,
    title: i18n.t('xpack.Cloud.Azure'),
    attrs: ['access_key_id', 'access_key_secret', 'tenant_id', 'subscription_id']
  },
  [vmware]: {
    name: vmware,
    title: 'VMware',
    attrs: ['host', 'port', 'username', 'password']
  }
}
