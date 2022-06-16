(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{644:function(t,a,n){"use strict";n.r(a);var e=n(10),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一-string是不可变类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-string是不可变类"}},[t._v("#")]),t._v(" 一.String是不可变类")]),t._v(" "),n("h3",{attrs:{id:"不可变类-概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不可变类-概念"}},[t._v("#")]),t._v(" 不可变类-概念")]),t._v(" "),n("ul",[n("li",[t._v("不可变类是指这个类的实例一旦创建完成后，就不能改变其成员变量值。除了String，JDK内部还有很多不可变类，如Interger、Long等。")])]),t._v(" "),n("h3",{attrs:{id:"不可变类-优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不可变类-优点"}},[t._v("#")]),t._v(" 不可变类-优点")]),t._v(" "),n("ul",[n("li",[t._v("线程安全：不可变类创建的对象是线程安全的。因为对象值无法改变，线程共享不会存在同步问题。")]),t._v(" "),n("li",[t._v("效率提升：当一个对象是不可变的，那么需要拷贝这个对象的内容时，就不用复制它的本身而只是复制它的地址，复制地址（通常一个指针的大小）只需要很小的内存空间，具有非常高的效率")])]),t._v(" "),n("h3",{attrs:{id:"不可变类-设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不可变类-设计"}},[t._v("#")]),t._v(" 不可变类-设计")]),t._v(" "),n("ol",[n("li",[t._v("类添加final修饰符，保证类不被继承。")]),t._v(" "),n("li",[t._v("保证所有成员变量必须私有，并且加上final修饰")]),t._v(" "),n("li",[t._v("不提供改变成员变量的方法，包括setter")]),t._v(" "),n("li",[t._v("通过构造器初始化所有成员，进行深拷贝(deep copy)")]),t._v(" "),n("li",[t._v("在getter方法中，不要直接返回对象本身，而是克隆对象，并返回对象的拷贝。")])]),t._v(" "),n("h3",{attrs:{id:"string不可变类-设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string不可变类-设计"}},[t._v("#")]),t._v(" String不可变类-设计")]),t._v(" "),n("p",[t._v("源码参考：https://github.com/openjdk/jdk13/blob/master/src/java.base/share/classes/java/lang/String.java")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public final class String\n    implements java.io.Serializable, Comparable<String>, CharSequence,\n               Constable, ConstantDesc {\n    @Stable\n    private final byte[] value;\n\n    private final byte coder;\n\n    /** Cache the hash code for the string */\n    private int hash; // Default to 0\n\n    /**\n     * Cache if the hash has been calculated as actually being zero, enabling\n     * us to avoid recalculating this.\n     */\n    private boolean hashIsZero; // Default to false;\n\n    /** use serialVersionUID from JDK 1.0.2 for interoperability */\n    private static final long serialVersionUID = -6849794470754667710L;\n\n    static final boolean COMPACT_STRINGS;\n\n     static {\n        COMPACT_STRINGS = true;\n    }\n\n    ......\n\n    public String() {\n        this.value = "".value;\n        this.coder = "".coder;\n    }\n    ......\n\n')])])]),n("p",[t._v("1.String类被final修饰，不可继承\n2.String内部所有成员都设置为私有变量和final(除了要做缓存用的变量)\n3.不存在value的setter\n4.当传入可变数组value[]时，进行copy而不是直接将value[]复制给内部变量.\n5.获取value时不是直接返回对象引用，而是返回对象的copy.")]),t._v(" "),n("blockquote",[n("p",[t._v("面试真题：String是不可变类么，你是怎么理解的？ 如何设计一个不可变类？")])]),t._v(" "),n("h2",{attrs:{id:"二-string与字符串常量池"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-string与字符串常量池"}},[t._v("#")]),t._v(" 二.String与字符串常量池")]),t._v(" "),n("h3",{attrs:{id:"字符串常量池位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池位置"}},[t._v("#")]),t._v(" 字符串常量池位置")]),t._v(" "),n("ul",[n("li",[t._v("jdk1.7之前字符串常量池在永久代(它是方法区的实现)，jdk1.7以及之后字符串常量池迁移到了堆空间。")])]),t._v(" "),n("h3",{attrs:{id:"string的创建方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string的创建方式"}},[t._v("#")]),t._v(" String的创建方式")]),t._v(" "),n("ul",[n("li",[t._v('直接赋值如：String s = "xyz"; 是在堆区的字符串常量池开辟空间写入xyz。(堆空间有也不会引用么？)')]),t._v(" "),n("li",[t._v('构造函数赋值：String s = new String("xyz"); 是在堆开辟空间，如果字符串常量池不存在xyz就在堆中存入xyz，如果字符串常量池存在xyz堆中内容是指向字符串常量池的地址。')])]),t._v(" "),n("h3",{attrs:{id:"string的intern方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string的intern方法"}},[t._v("#")]),t._v(" String的intern方法")]),t._v(" "),n("ul",[n("li",[t._v("在 JAVA 语言中有8中基本类型和一种比较特殊的类型String。这些类型为了使他们在运行过程中速度更快，更节省内存，都提供了一种常量池的概念。常量池就类似一个JAVA系统级别提供的缓存。\n8种基本类型的常量池都是系统协调的，String类型的常量池比较特殊。")]),t._v(" "),n("li",[t._v("如果不是用双引号声明的String对象(双引号创建的无需用intern方法)，可以使用String提供的intern方法。intern 方法会从字符串常量池中查询当前字符串是否存在，若不存在就会将当前字符串放入常量池中，或者是将常量池的引用指向堆中开辟的空间。")])]),t._v(" "),n("blockquote",[n("p",[t._v('面试真题：String s1 = "1" + "1" , String s2 = new String("11") 问 s1 == s2？')])]),t._v(" "),n("blockquote",[n("p",[t._v("文章参考")])]),t._v(" "),n("ul",[n("li",[t._v("https://blog.csdn.net/wuzhiwei549/article/details/106004946")]),t._v(" "),n("li",[t._v("https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html")])])])}),[],!1,null,null,null);a.default=r.exports}}]);