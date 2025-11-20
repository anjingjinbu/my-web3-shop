import React from 'react';
import { Megaphone } from 'lucide-react';
import { ANNOUNCEMENT_TEXT, REFERRAL_LINKS, CONTACT_INFO } from '../constants';

const AnnouncementCard: React.FC = () => {
  return (
    <div className="glass-panel rounded-xl shadow-xl p-6 md:p-8 mb-8 border-t-4 border-blue-500 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-5 border-b border-slate-200/60 pb-3">
          <Megaphone className="w-5 h-5 text-blue-600 animate-pulse" />
          <h2 className="font-bold text-slate-800 text-lg">公告 / Announcement</h2>
        </div>

        <div className="space-y-3 text-sm md:text-base text-slate-600">
          {ANNOUNCEMENT_TEXT.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 group">
              <span className="text-[#84cc16] mt-0.5 font-black text-lg leading-none group-hover:translate-x-1 transition-transform">➤➤</span>
              <p className={`leading-relaxed ${item.type === 'warning' ? 'text-slate-700 font-medium' : ''}`}>
                {item.content}
              </p>
            </div>
          ))}

          <div className="flex items-center gap-2 mt-6 text-blue-600 font-bold cursor-pointer hover:underline">
            <span className="text-blue-500 animate-bounce-x">➤➤</span>
            <span>本站所有账号登录教程点击查看 ➤➤</span>
          </div>

          {/* Links Section */}
          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 space-y-2.5 my-5">
            {REFERRAL_LINKS.map((link, idx) => (
              <div key={idx} className="flex flex-wrap items-center gap-2 text-sm">
                 <span className="text-orange-600 font-bold">{link.name}注册链接:</span>
                 <a href={link.url} className="text-blue-600 hover:underline break-all font-medium">{link.url}</a>
                 <span className="text-slate-500 text-xs bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                   优惠码: <span className="text-slate-800 font-mono font-bold">{link.code}</span>
                 </span>
              </div>
            ))}
          </div>

          {/* Payment & Warning Info */}
          <div className="text-sm pt-2 space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">推荐USDT支付</span> 
              <span className="text-slate-500">USDT-BSC (10U以下用Web3钱包) 充值使用更方便</span>
            </p>
            <p className="text-red-500 font-medium bg-red-50 inline-block px-2 py-1 rounded border border-red-100">
              注意：Token不能手动退出和修改密码，否则Token会改变需要重新获取
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 bg-slate-100/80 p-3 rounded-lg mt-5 border border-slate-200">
            <div className="flex items-center gap-1">
               <span className="text-[#84cc16] font-bold">➤➤ Tg客服:</span>
               <a href="#" className="text-blue-600 font-bold hover:underline">{CONTACT_INFO.tg}</a>
            </div>
            <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-slate-600">
              <span>微信客服:</span>
              {CONTACT_INFO.wechat.map((wc, i) => (
                <span key={i} className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded shadow-sm font-medium">
                  {wc}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-slate-400 mt-3 text-center md:text-left">
            所有账号售后24小时首登（以售出时间为准，标注售后时间的除外） 补货联系Telegram <a href="#" className="text-blue-500 hover:text-blue-600 underline decoration-dotted">点击加入电报频道</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;