const sInfor = document.getElementById("search");
const sBaidu = document.getElementById("baidu");
const sGoogle = document.getElementById("google");
const sBing = document.getElementById("bing");
const sGitHub = document.getElementById("github");
const sGitee = document.getElementById("gitee");
const sZhihu = document.getElementById('zhihu');
const sWjbk = document.getElementById('weiji');
const sYouTube = document.getElementById('youtube')
const sBilibili = document.getElementById("bilibili");
const sGugexueshu = document.getElementById("gugexueshu");
const sZhongguozhiwang = document.getElementById("zhongguozhiwang");
const sShuyuzaixian = document.getElementById("shuyuzaixian");
const s52pojie = document.getElementById("52pojie");
const sFanyi = document.getElementById("fanyi");
const sBijia = document.getElementById("bijia");

//isEmpty;
let isEmpty =function (obj)  {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
      return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp("^([ ]+)|([　]+)$");
        //判断有空格，如果有空格，删除左边空格；
        if( reg.test(obj)){
            obj=obj.replace(/(^\s*)/g,"");
        }

      if (obj === "") {
        return true;
      }


    }
    return false;
}
//doAction 搜索跳转方法
/*  
p：搜索网址前段 
n: 搜到网址后段
h: 搜索首页
*/
let doAction=function(p,n,s){
    if(isEmpty(sInfor.value)){
        window.open(s);
    }else{
        window.open(p+sInfor.value+n);
    }
    
}

//拼接网址
let p='';
let n='';
let s=''

//Google
sGoogle.onclick=function(){
      p="https://www.google.com/search?q=";

    n="&gws_rd=cr&nfpr=1&newwindow=1&num=30";

    s='https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
   doAction(p,n,s);

}

//BaiDu
sBaidu.onclick= function()  {
    p="https://www.baidu.com/s?wd=";
    doAction(p,'',p);
};
document.onkeydown = function (e) { // 回车提交表单
    // 兼容FF和IE和Opera
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {   
          p='https://cn.bing.com/search?q=';
    n='&ensearch=1&FORM=BESBTB'
    s='https://www4.bing.com/?scope=web&FORM=BESBTB';
                doAction(p,n,s);
            };
        }
    
//Bing
sBing.onclick=function () {
    p='https://cn.bing.com/search?q=';
    n='&ensearch=1&FORM=BESBTB'
    s='https://www4.bing.com/?scope=web&FORM=BESBTB';
    doAction(p,n,s);
}

//GitHub
sGitHub.onclick= function () {
    p='https://github.com/search?q=';
    n='';
    s='https://github.com'
    doAction(p,n,s);
}

//Gitee
sGitee.onclick = function () {
    p='https://so.gitee.com/?q=';
    n='';
    s='https://gitee.com/'
    doAction(p,n,s);
}

//Zhihu
sZhihu.onclick= function () {
    p='https://www.zhihu.com/search?q=';
    n='&type=content&utm_content=search_hot';
    s='https://www.zhihu.com/'
    doAction(p,n,s);
}
//维基百科
sWjbk.onclick = function () {
    p='https://zh.wikipedia.org/w/index.php?search=';
    n='&title=Special%3A搜索&ns0=1';
    s='https://zh.wikipedia.org/'
    doAction(p,n,s);
}

//YouTube
sYouTube.onclick =function () {
    p='https://www.youtube.com/results?search_query=';
    doAction(p,n,p);
}

//Bilibili
sBilibili.onclick =function () {
    p='https://search.bilibili.com/all?keyword=';
    n='';
    s='https://search.bilibili.com'
    doAction(p,n,s);
}

//gugexueshu
sGugexueshu.onclick = function () {
    p='https://scholar.google.com/scholar?hl=zh-CN&as_sdt=0%2C33&q=';
    n='&oq=';
    s='https://scholar.google.com/';
    doAction(p,n,s);
}

//zhongguozhiwang
sZhongguozhiwang.onclick = function () {
    p='https://scholar.cnki.net/home/search?sw=1&sw-input=';
    n='';
    s='https://scholar.cnki.net/'
    doAction(p,n,s);
}
//shuyuzaixian
sShuyuzaixian.onclick = function () {
    p='https://www.termonline.cn/search?searchText=';
    n='';
    s='https://www.termonline.cn/';
    doAction(p,n,s);
}

//52pojie
s52pojie.onclick = function () {
    p='https://www.bing.com/search?q=site%3A52pojie.cn%20';
    n='';
    s='https://www.bing.com/search?q=site%3A52pojie.cn%20';
    doAction(p,n,s);
}


//翻译
sFanyi.onclick = function (){
    p='https://fanyi.baidu.com/#auto/zh/';
    n='';
    s='https://fanyi.baidu.com/';
    doAction(p,n,s);

}
//比价
sBijia.onclick = function(){
    p = 'https://b1bj.com/s.aspx?key=';
    n = '';
    s = 'https://b1bj.com/';
   doAction(p,n,s);

}
console.log("                                  ");
console.log("   - 欢迎来到Morey的个人导航 -     ");
console.log("===============================");
console.log("                          ");
console.log("       老哥，你好啊~      ");
console.log("                          ");
console.log("===============================")

