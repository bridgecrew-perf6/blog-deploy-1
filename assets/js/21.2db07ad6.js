(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{600:function(t,s,e){t.exports=e.p+"assets/img/003-001.2dd68836.png"},601:function(t,s,e){t.exports=e.p+"assets/img/003-002.78ceb0bc.jpeg"},650:function(t,s,e){"use strict";e.r(s);var o=e(10),a=Object(o.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"一、单向认证"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、单向认证"}},[t._v("#")]),t._v(" 一、单向认证")]),t._v(" "),o("p",[o("strong",[t._v("注释掉")])]),t._v(" "),o("p",[o("strong",[t._v("ssl_verify_client on; #启用客户端证书审核")])]),t._v(" "),o("br"),t._v(" "),o("h2",{attrs:{id:"二、keytool简介"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、keytool简介"}},[t._v("#")]),t._v(" 二、Keytool简介")]),t._v(" "),o("p",[o("strong",[t._v("keytool 是个Java提供的密钥和证书管理工具。")])]),t._v(" "),o("p",[o("strong",[t._v("keytool 将密钥和证书储存在一个称为keystore的密钥仓库中。")])]),t._v(" "),o("br"),t._v(" "),o("h2",{attrs:{id:"三、keytool生成私钥和证书"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、keytool生成私钥和证书"}},[t._v("#")]),t._v(" 三、Keytool生成私钥和证书")]),t._v(" "),o("p",[o("strong",[t._v("1. 创建keystore秘钥库")])]),t._v(" "),o("p",[o("strong",[t._v("keytool -genkey -alias zhoufeng -keypass 123456 -keyalg RSA -keysize 1024 -validity 365 -keystore /Users/finup/downloads/httpsOneWay/zhoufeng.keystore -storepass 123456")])]),t._v(" "),o("p",[o("strong",[t._v("2. 创建证书")])]),t._v(" "),o("p",[o("strong",[t._v("keytool -export -alias zhoufeng -keystore /Users/finup/downloads/httpsOneWay/zhoufeng.keystore -storepass 123456 -rfc -file /Users/finup/downloads/httpsOneWay/zhoufeng.cer")])]),t._v(" "),o("p",[o("strong",[t._v("备注：参数名称和意义")])]),t._v(" "),o("p",[t._v("-keyalg　　　　使用加密的算法，这里是RSA")]),t._v(" "),o("p",[t._v("-keypass　　    私有密钥的密码，这里设置为 123456")]),t._v(" "),o("p",[t._v("-keystore 　　  密钥库")]),t._v(" "),o("p",[t._v("-validity　　　  该密钥的有效期为 365天 (默认为90天)")]),t._v(" "),o("p",[t._v("-keysize          指定密钥长度")]),t._v(" "),o("p",[t._v("-alias              证书别名")]),t._v(" "),o("p",[t._v("-storepass       指定密钥库的密码")]),t._v(" "),o("p",[t._v("-export      　  将别名指定的证书导出到文件")]),t._v(" "),o("p",[t._v("-rfc                 表示以base64输出文件，否则以二进制输出")]),t._v(" "),o("p",[o("strong",[t._v("3. 获取秘钥")])]),t._v(" "),o("p",[o("strong",[t._v("keytool不提供命令导出私钥，所以需要编写java类导出key")])]),t._v(" "),o("p",[o("img",{attrs:{src:e(600),alt:"image.png"}})]),t._v(" "),o("p",[o("a",{attrs:{href:"../files/SslKey.java"}},[t._v("代码文件下载")]),t._v(" "),o("br")]),t._v(" "),o("h2",{attrs:{id:"四-配置nginx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四-配置nginx"}},[t._v("#")]),t._v(" 四. 配置nginx")]),t._v(" "),o("p",[o("code"),o("strong",[t._v("更换私钥和证书")])]),t._v(" "),o("br"),t._v(" "),o("h2",{attrs:{id:"五-配置host"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#五-配置host"}},[t._v("#")]),t._v(" 五. 配置Host")]),t._v(" "),o("p",[o("img",{attrs:{src:e(601),alt:"image.png"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);