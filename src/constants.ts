import { Product, ProductCategory } from './types';

export const SITE_NAME = "安静撸空投工具";

export const ANNOUNCEMENT_TEXT = [
  {
    type: 'warning',
    content: "免责声明：本站商品仅供Web3撸空投【学习测试】使用，请勿使用本站商品从事违法活动，一经发现本站将配合相关部门打击。"
  },
  {
    type: 'info',
    content: "购买本站商品，拿到卡密后第一时间修改账号资料，24小时后删除记录，请自行保管。包首登商品非登录问题恕不售后，先少量购买测试，买错买多概不退换，其它业务请自行测试，购买代表你同意此条款。"
  }
];

export const REFERRAL_LINKS = [
  { name: "ADS浏览器", url: "https://share.adspower.net/rh0kxA", code: "rh0kxA" },
  { name: "MoreLogin浏览器", url: "https://www.morelogin.com/?from=AAntdVzmoqx1", code: "chirou" },
  { name: "比特浏览器", url: "https://www.bitbrowser.cn/?code=f44d92", code: "f44d92" }
];

export const CONTACT_INFO = {
  tg: "@chiroukyc1",
  wechat: ["web3_chirou", "ethioee"]
};

export const PRODUCTS: Product[] = [
  // KYC Zone Products (Matches Screenshot 1)
  {
    id: 'k1',
    name: 'Legion成品号 (已完成KYC,参与活动功能因平台规则不可控不作售后条件)',
    category: ProductCategory.KYC,
    price: 72.00,
    stock: 69,
    icon: 'https://ui-avatars.com/api/?name=Le&background=1e293b&color=fff&size=64',
    tags: []
  },
  {
    id: 'k2',
    name: '海妖KRAKEN 成品号邮箱授权登录 (已完成KYC,参与活动功能因平台规则不可控不作售后条件)',
    category: ProductCategory.KYC,
    price: 52.80,
    stock: 81,
    icon: 'https://ui-avatars.com/api/?name=Kr&background=7c3aed&color=fff&size=64',
    tags: []
  },
  {
    id: 'k3',
    name: 'Kalshi 成品号 -邮箱授权登录 (已完成KYC,参与活动功能因平台规则不可控不作售后条件)',
    category: ProductCategory.KYC,
    price: 88.00,
    stock: 2,
    icon: 'https://ui-avatars.com/api/?name=Ka&background=10b981&color=fff&size=64',
    tags: []
  },
  {
    id: 'k4',
    name: 'BITGET(已完成KYC,参与活动功能请自行测试不作售后条件)',
    category: ProductCategory.KYC,
    price: 36.00,
    stock: 25,
    icon: 'https://ui-avatars.com/api/?name=Bi&background=06b6d4&color=fff&size=64',
    tags: []
  },
  {
    id: 'k5',
    name: 'BYBIT(已完成KYC,参与活动功能请自行测试不作售后条件)',
    category: ProductCategory.KYC,
    price: 36.00,
    stock: -1, // Unknown
    icon: 'https://ui-avatars.com/api/?name=By&background=000000&color=fff&size=64',
    tags: []
  },
  {
    id: 'k6',
    name: 'Gate.io (已完成KYC,参与活动功能请自行测试不作售后条件)',
    category: ProductCategory.KYC,
    price: 36.00,
    stock: 27,
    icon: 'https://ui-avatars.com/api/?name=Ga&background=0f172a&color=10b981&size=64',
    tags: []
  },

  // Proxy & Tools Zone Products (Matches Screenshot 2)
  {
    id: 'p1',
    name: '海外机房代理|37国可选支持HTTP/SOCKS5 （请联系客服下单） 100条=200元',
    category: ProductCategory.PROXY,
    price: 2.20,
    stock: -1,
    icon: '⚡',
    tags: []
  },
  {
    id: 'p2',
    name: 'ABCProxy 动态住宅 10G= 70元 联系客服下单 50g=300元',
    category: ProductCategory.PROXY,
    price: 70.00,
    stock: -1,
    icon: '⚡',
    tags: []
  },
  {
    id: 'p3',
    name: '香港 独享裸金属服务器代理 支持HTTP/SOCKS5 联系客服下单量大可议',
    category: ProductCategory.PROXY,
    price: 9.80,
    stock: -1,
    icon: '🇭🇰',
    tags: []
  },
  {
    id: 'p4',
    name: '新加坡 独享裸金属服务器代理 支持HTTP/SOCKS5 联系客服下单量大可议',
    category: ProductCategory.PROXY,
    price: 9.80,
    stock: -1,
    icon: '🇸🇬',
    tags: []
  },
  {
    id: 'p5',
    name: '日本 独享裸金属服务器代理 支持HTTP/SOCKS5 联系客服下单量大可议',
    category: ProductCategory.PROXY,
    price: 9.80,
    stock: -1,
    icon: '🇯🇵',
    tags: []
  },
  {
    id: 'p6',
    name: '美国 独享裸金属服务器代理 支持HTTP/SOCKS5 联系客服下单量大可议',
    category: ProductCategory.PROXY,
    price: 9.80,
    stock: -1,
    icon: '🇺🇸',
    tags: []
  },
  {
    id: 'p7',
    name: '韩国 独享裸金属服务器代理 支持HTTP/SOCKS5 联系客服下单量大可议',
    category: ProductCategory.PROXY,
    price: 9.80,
    stock: -1,
    icon: '🇰🇷',
    tags: []
  },
  {
    id: 'p8',
    name: '独享海外ISP原生住宅 多国可选 详见说明（请联系客服下单） 100条=1000元',
    category: ProductCategory.PROXY,
    price: 12.00,
    stock: -1,
    icon: '⚡',
    tags: []
  }
];