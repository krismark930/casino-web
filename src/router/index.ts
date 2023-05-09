import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            redirect: 'homepage',
            component: () => import('@/views/Home/index.vue'),
            children: [
                {
                    path: '/homepage',
                    name: 'homepage',
                    component: () => import('@/views/Home/homepage.vue'),
                    meta: {
                        title: 'homepage'
                    }
                },
                {
                    path: '/discount',
                    name: 'discount',
                    component: () => import('@/views/Home/discount.vue'),
                    meta: {
                        title: 'discount'
                    }
                },
                {
                    path: '/customer',
                    name: 'customer',
                    component: () => import('@/views/Customer/index.vue'),
                    meta: {
                        title: 'customer'
                    }
                },
                {
                    path: '/my',
                    name: 'my',
                    component: () => import('@/views/My/myHome.vue'),
                    meta: {
                        title: 'my'
                    }
                },
                {
                    path: '/myhome',
                    name: 'myhome',
                    component: () => import('@/views/My/myHome2.vue'),
                    meta: {
                        title: 'myhome'
                    }
                }
            ]
        },
        {
            path: '/myfeedback',
            name: 'myfeedback',
            component: () => import('@/views/Customer/myFeedback.vue'),
            meta: {
                title: 'myfeedback'
            }
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('@/views/Customer/feedback.vue'),
            meta: {
                title: 'feedback'
            }
        },
        {
            path: '/feedbackdetail',
            name: 'feedbackdetail',
            component: () => import('@/views/Customer/feedbackDetail.vue'),
            meta: {
                title: 'feedbackdetail'
            }
        },
        {
            path: '/mysetting',
            name: 'mysetting',
            component: () => import('@/views/My/setting.vue'),
            meta: {
                title: 'mysetting'
            }
        },
        {
            path: '/onlineservice',
            name: 'onlineservice',
            component: () => import('@/views/Subhome/onlineService.vue'),
            meta: {
                title: 'onlineservice'
            }
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('@/views/Account/index.vue'),
            redirect: '/myAccount',
            props: true,
            children: [
                {
                    path: '/myAccount',
                    name: 'myAccount',
                    component: () => import('@/views/Account/AccountManagement/account.vue'),
                    meta: {
                        title: 'myAccount'
                    }
                },

                {
                    path: '/addCrypto',
                    name: 'addCrypto',
                    component: () => import('@/views/Account/currencyAdd.vue'),
                    meta: {
                        title: 'addCrypto'
                    }
                },
                {
                    path: '/addBank',
                    name: 'addBank',
                    component: () => import('@/views/Account/AccountManagement/bankAdd.vue'),
                    meta: {
                        title: 'addBank'
                    }
                },
                {
                    path: '/addBank2',
                    name: 'addBank2',
                    component: () => import('@/views/Account/AccountManagement/bankAdd2.vue'),
                    meta: {
                        title: 'addBank2'
                    }
                },
                {
                    path: '/addBank3',
                    name: 'addBank3',
                    component: () => import('@/views/Account/AccountManagement/bankAdd3.vue'),
                    meta: {
                        title: 'addBank3'
                    }
                },
                {
                    path: '/editBankCard',
                    name: 'editBankCard',
                    component: () => import('@/views/Account/AccountManagement/editBankCard.vue'),
                    meta: {
                        title: 'editBankCard'
                    }
                },
                {
                    path: '/deposit',
                    name: 'deposit',
                    component: () =>
                        import('@/views/Account/Deposite/Deposit.vue'),
                    meta: {
                        title: 'deposit'
                    }
                },
                {
                    path: '/depositInformation/:name/:bankID/:money',
                    name: 'depositInformation',
                    component: () =>
                        import(
                            '@/views/Account/Deposite/DepositInformation.vue'
                        ),
                    meta: {
                        title: 'depositInformation'
                    },
                    props: true,
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/views/Account/contactUs.vue'),
                    meta: {
                        title: 'contact'
                    }
                },
                {
                    path: '/service',
                    name: 'service',
                    component: () =>
                        import('@/views/Account/serviceCenter.vue'),
                    meta: {
                        title: 'service'
                    }
                },
                {
                    path: '/withdraw',
                    name: 'withdraw',
                    component: () =>
                        import('@/views/Account/Withdraw/withdraw.vue'),
                    meta: {
                        title: 'withdraw'
                    }
                },
                {
                    path: '/transfer',
                    name: 'transfer',
                    component: () =>
                        import('@/views/Account/transfer.vue'),
                    meta: {
                        title: 'transfer'
                    }
                },
                {
                    path: '/transaction',
                    name: 'transaction',
                    component: () =>
                        import('@/views/Account/transactionHistory.vue'),
                    meta: {
                        title: 'transaction'
                    }
                },
                {
                    path: '/transactionDetail',
                    name: 'transactionDetail',
                    component: () =>
                        import('@/views/Account/transactionDetail.vue'),
                    meta: {
                        title: 'transactionDetail'
                    }
                },
                {
                    path: '/helpCenter',
                    name: 'helpCenter',
                    component: () => import('@/views/Account/helpCenter.vue'),
                    meta: {
                        title: 'helpCenter'
                    }
                },
                {
                    path: '/depositHelp',
                    name: 'depositHelp',
                    component: () => import('@/views/Account/depositHelp.vue'),
                    meta: {
                        title: 'depositHelp'
                    }
                },
                {
                    path: '/guidHelp',
                    name: 'guidHelp',
                    component: () => import('@/views/Account/guidHelp.vue'),
                    meta: {
                        title: 'guidHelp'
                    }
                },
                {
                    path: '/guidTransfer',
                    name: 'guidTransfer',
                    component: () => import('@/views/Account/guidTransfer.vue'),
                    meta: {
                        title: 'guidTransfer'
                    }
                },
                {
                    path: '/aboutCrypto',
                    name: 'aboutCrypto',
                    component: () => import('@/views/Account/aboutCrypto.vue'),
                    meta: {
                        title: 'aboutCrypto'
                    }
                }
            ]
        },
        {
            path: '/invite',
            name: 'invite',
            component: () => import('@/views/Invite/index.vue')
        },

        // 彩票
        // {
        //     path: '/lottery',
        //     name: 'lottery',
        //     component: () => import('@/views/Lottery/index'),
        //     redirect: '/lotterys',
        //     children: [
        //         // {
        //         // 	path: '/lotterys',
        //         // 	name: 'lotterys',
        //         // 	component: () => import('@/views/Lottery/lottery'),
        //         // 	meta: {
        //         // 		title: 'lottery'
        //         // 	}
        //         // },
        //         {
        //             path: '/record',
        //             name: 'record',
        //             component: () => import('@/views/Lottery/record')
        //         },
        //         {
        //             path: '/trend',
        //             name: 'trend',
        //             component: () => import('@/views/Lottery/trend')
        //         }
        //         // {
        //         // 	path: '/lotteryMy',
        //         // 	name: 'lotteryMy',
        //         // 	component: () => import('@/views/Lottery/my'),
        //         // },
        //         // {
        //         // 	path: '/hall',
        //         // 	name: 'hall',
        //         // 	component: () => import('@/views/Lottery/hall'),
        //         // }
        //     ]
        // },
        {
            path: '/lottery',
            name: 'lottery',
            component: () => import('@/views/Lottery/index.vue'),
            redirect: '/lotterys',
            children: [
                {
                    path: '/lotterys',
                    name: 'lotterys',
                    component: () => import('@/views/Lottery/lottery.vue'),
                    meta: {
                        title: 'lottery'
                    }
                },
                {
                    path: '/record',
                    name: 'record',
                    component: () => import('@/views/Lottery/record.vue')
                },
                {
                    path: '/trend',
                    name: 'trend',
                    component: () => import('@/views/Lottery/trend.vue')
                },
                {
                    path: '/lotteryMy',
                    name: 'lotteryMy',
                    component: () => import('@/views/Lottery/my.vue')
                },
                {
                    path: '/hall',
                    name: 'hall',
                    component: () => import('@/views/Lottery/hall.vue')
                }
            ]
        },
        {
            path: '/stadium',
            name: 'stadium',
            component: () => import('@/views/Stadium/index.vue'),
            redirect: '/stadiums',
            children: [
                {
                    path: '/stadiums',
                    name: 'stadiums',
                    component: () => import('@/views/Stadium/stadium.vue'),
                    redirect: '/stadiumshomepage',
                    children: [
                        {
                            path: '/stadiumsDetail',
                            name: 'stadiumsDetail',
                            component: () =>
                                import(
                                    '@/views/Stadium/components/stadiumsDetail.vue'
                                )
                        },
                        {
                            path: '/stadiumshomepage',
                            name: 'stadiumshomepage',
                            component: () =>
                                import(
                                    '@/views/Stadium/components/homepage.vue'
                                )
                        }
                    ]
                    // homepage
                },
                {
                    path: '/collect',
                    name: 'collect',
                    component: () => import('@/views/Stadium/collect.vue')
                },
                {
                    path: '/records',
                    name: 'records',
                    component: () => import('@/views/Stadium/record.vue')
                },
                {
                    path: '/result',
                    name: 'result',
                    component: () => import('@/views/Stadium/result.vue')
                },
                {
                    path: '/results',
                    name: 'results',
                    component: () => import('@/views/Stadium/results.vue')
                }
            ]
        },
        {
            path: '/Subhome',
            name: 'Subhome',
            component: () => import('@/views/Subhome/index.vue')
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('@/views/Subhome/personal.vue')
        },
        {
            path: '/rules',
            name: 'rules',
            component: () => import('@/views/Subhome/rules.vue')
        },
        {
            path: '/conversion',
            name: 'conversion',
            component: () => import('@/views/Subhome/conversion.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('@/views/Messege/index.vue')
        },
        {
            path: '/messageDetail',
            name: 'messageDetail',
            component: () => import('@/views/Messege/MessegeDetail.vue')
        },
        {
            path: '/sports',
            name: 'sports',
            component: () => import('@/views/Subhome/sports.vue')
        },
        {
            path: '/system',
            name: 'system',
            component: () => import('@/views/Subhome/system.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('@/views/Subhome/settings.vue')
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: () => import('@/views/Subhome/changePassword.vue')
        },
        {
            path: '/recoverPassword',
            name: 'recoverPassword',
            component: () => import('@/views/Subhome/recoverPassword.vue')
        },
        {
            path: '/login/:code',
            name: 'login1',
            component: () => import('@/views/Login/login.vue')
        }, 
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/login.vue')
        }, 
        {
            path: '/fastthree',
            name: 'fastthree',
            component: () => import('@/views/Lottery/fastThree.vue')
        }, {
            path: '/alwayscolor',
            name: 'alwayscolor',
            component: () => import('@/views/Lottery/alwaysColor.vue')
        }, {
            path: '/pk10',
            name: 'pk10',
            component: () => import('@/views/Lottery/PK10.vue')
        }, {
            path: '/choosefive',
            name: 'choosefive',
            component: () => import('@/views/Lottery/chooseFive.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const {
        getToken,
        getUser,
    } = storeToRefs(useAuthStore());

    console.log("getUser", getUser.value.id);

    if (!getUser.value.id && to.name === "myhome") {
        next({ name: "my" });
    }
    if (!getUser.value.id && to.name == "transfer") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "withdraw") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "deposit") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "records") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "results") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "collect") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "myAccount") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "contact") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "transaction") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == "invite") {
        next({ name: "login" });
    }
    if (!getUser.value.id && to.name == 'results') {
        next({ name: 'login' })
    }
    else {
        next();
    }
})

export default router;
