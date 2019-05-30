function FindProxyForURL(url, host)
{
 
// variable strings to return
 
var proxy_yes = "PROXY ohnggni.synology.me:7777; DIRECT";
var proxy_no = "DIRECT";
 
if (shExpMatch(host, "*.naver.com")) 
	{ return proxy_no; }
if (shExpMatch(host, "*.ssg.com")) 
	{ return proxy_no; }
if (shExpMatch(host, "*.danawa.com")) 
	{ return proxy_no; }
if (shExpMatch(host, "*.shinhan.com")) 
	{ return proxy_no; }
if (shExpMatch(host, "*.toss.im")) 
	{ return proxy_no; }
if (isInNet(host, "59.7.252.0")) 
	{ return proxy_no; }
 
// Proxy anything else
return proxy_yes;
 
}