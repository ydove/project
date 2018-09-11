import Axios from 'axios'; //引入axios
import qs from 'qs';	//引入axios数据处理
Axios.defaults.timeout = 10000;                        //响应时间
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
Axios.defaults.baseURL = 'http://www.xiaoyou.com/';   //配置接口地址
// 添加一个响应拦截器
Axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

// 添加返回信息验证
Axios.interceptors.response.use(function (response) {
    	return response;
  	}, function (error) {
    	return Promise.reject(error);
  	});


Axios.login_post = "index.php?g=App&m=App&a=login_post";//登录




export default Axios;