import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/commodity',
        icon: 'key',
        name: 'commodity',
        title: '商品设置',
        component: Main,
        children: [
            { path: 'exponent', icon: 'compose', title: '指数商品', name: 'exponent', component: () => import('../views/commodity/exponent/exponent.vue') },
            { path: 'oneround', icon: 'compose', title: '港美股', name: 'oneround', component: () => import('../views/commodity/oneround/oneround.vue') },
            { path: 'Transactionsetting', icon: 'compose', title: '交易设置', name: 'Transactionsetting', component: () => import('../views/commodity/Transactionsetting/Transactionsetting.vue') },
        ]
    },
    {
        path: '/agent',
        icon: 'key',
        name: 'agent',
        title: '代理商',
        component: Main,
        children: [
            { path: 'Member', icon: 'compose', title: '会员单位', name: 'Member', component: () => import('../views/agent/Member/Member.vue') },
            { path: 'agent_index', icon: 'compose', title: '代理商', name: 'agent_index', component: () => import('../views/agent/agent/agent.vue') },
            { path: 'staff', icon: 'compose', title: '员工', name: 'staff', component: () => import('../views/agent/staff/staff.vue') },
        ]
    },
    {
        path: '/Assets',
        icon: 'key',
        name: 'Assets',
        title: '资产',
        component: Main,
        children: [
            { path: 'goldentry', icon: 'compose', title: '入金管理', name: 'goldentry', component: () => import('../views/Assets/Goldentry/goldentry.vue') },
            { path: 'Outofgold', icon: 'compose', title: '出金管理', name: 'Outofgold', component: () => import('../views/Assets/Outofgold/Outofgold.vue') },
        ]
    },
    {
        path: '/realuser',
        icon: 'key',
        name: 'realuser',
        title: '用户管理',
        component: Main,
        children: [
            { path: 'index', title: '用户管理', name: 'realuser_index', component: () => import('../views/management/Realuser/realuser.vue') }
        ]
    },
    {
        path: '/transaction',
        icon: 'key',
        name: 'transaction',
        title: '交易',
        component: Main,
        children: [
            { path: 'position', icon: 'compose', title: '持仓管理', name: 'position', component: () => import('../views/transaction/position/position.vue') },
            { path: 'entrust', icon: 'compose', title: '委托管理', name: 'entrust', component: () => import('../views/transaction/Entrust/entrust.vue') },
            { path: 'history', icon: 'compose', title: '历史订单', name: 'history', component: () => import('../views/transaction/History/history.vue') },
        ]
    },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
