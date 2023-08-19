import{_ as e,o as a,c as t,a as i}from"./app-befe8024.js";const r={},o=i('<h1 id="telegram缓存和下载" tabindex="-1"><a class="header-anchor" href="#telegram缓存和下载" aria-hidden="true">#</a> Telegram缓存和下载</h1><p>Telegram 客户端在使用过程中会自动下载媒体(图片/视频/音频/文件)缓存在设备上，就会大量的占用设备存储空间。</p><p>可以在设置中手动和自动清理这部分缓存，但依然有小部分运行App必须用到的数据是不能清理的；清理缓存并不是删除媒体，这些媒体会保留在Telegram云端，需要的时候可以再次下载使用。</p><p>Telegram的消息是全平台全客户端自动同步的（除了加密对话)，清理缓存并不会删除消息，删除消息也不是清理缓存的办法。</p><h2 id="清理缓存方法" tabindex="-1"><a class="header-anchor" href="#清理缓存方法" aria-hidden="true">#</a> 清理缓存方法</h2><ul><li>iOS/macOS/Android客户端：设置-&gt;数据-&gt;存储使用-&gt;清理缓存，这儿可以把&quot;媒体文件保留时间&quot;设置短一点，Telegram就会自动清理(3天/1周/1月)之前的缓存，如果选择&quot;永远&quot;就不会自动清理；这儿也设置&quot;最大缓存大小&quot;</li><li>Windows/macOS/Linux Desktop 客户端：左上角三短线-&gt;设置-&gt;高级-&gt;缓存管理-&gt;清理缓存，这儿可以设置缓存总大小的限制</li></ul><h2 id="自动下载设置" tabindex="-1"><a class="header-anchor" href="#自动下载设置" aria-hidden="true">#</a> 自动下载设置</h2><ul><li>iOS/macOS/Android客户端：设置-&gt;数据-&gt;自动下载媒体</li><li>Windows/macOS/Linux Desktop 客户端：左上角三短线-&gt;设置-&gt;高级-&gt;自动下载媒体 可以关闭自动下载或把自动下载的大小限制小一点，关闭自动下载后，手动在对话中点击了媒体也会缓存在设备上</li></ul>',8),l=[o];function d(n,c){return a(),t("div",null,l)}const h=e(r,[["render",d],["__file","download.html.vue"]]);export{h as default};
