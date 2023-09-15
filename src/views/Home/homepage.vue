<template>
    <div>
        <div class="box-header">
            <img class="logo_img" src="@/assets/images/home/logo.png" alt="" />
            <img class="r_img" src="@/assets/images/home/icon-1.png" alt="" @click="goMessage" />
        </div>
        <div class="home_box animated fadeInLeft">
            <div class="banner_box">
                <van-swipe class="my-swipe" :autoplay="autoplay" indicator-color="white">
                    <van-swipe-item v-for="(item, index) in swipeItem" :key="index + 200">
                        <img class="banner_img" :src="item" alt="" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="advertising">
                <div class="flex w-full h-[20px] justify-between mb-[13px] ">
                    <img class="w-[15px] h-[15px]" src="../../assets/images/home/icon-2.png" alt="" />
                    <div class="h-[20px] w-[251px] flex items-center">
                        <marquee behavior="scroll" direction="left">
                            <span class="w-full text-[12px] text-[#757392]">{{ webGonggaoMsg }}</span>
                        </marquee>
                    </div>
                    <img @click="openGame" class="w-[64px] h-[20px]" src="../../assets/images/home/hot.png" alt="" />
                </div>
                <div class="advertising_bottom">
                    <div class="user_box_l">
                        <div class="user_top">
                            <span>{{ user.UserName }}</span>
                            <img src="../../assets/images/home/vip.png" alt="" />
                        </div>
                        <div class="user_bottom">
                            <span>￥</span>
                            <span>{{ user.total_money }}</span>
                        </div>
                    </div>
                    <div class="user_box_r">
                        <div class="user_box_r_item" v-for="(item, index) in iconList" :key="index + 250"
                            @click="goDetail(item.path, item.redirect)">
                            <img :src="item.icon" alt="" />
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab_box">
                <div class="tab_left">
                    <div class="tab_item" v-for="(item, index) in tabList" @click="getTab(item.id)" :key="index + 3000">
                        <img :src="active == item.id
                            ? item.icon.active
                            : item.icon.inactive
                            " alt="" />
                    </div>
                </div>
                <div class="tab_right">
                    <div class="tab_right_item" v-for="(item, index) in selectImgList"
                        @click="goDetail(item.path, item.redirect)" :key="index + 400">
                        <div class="tab_right_item_text">
                            <span class="tab_name">{{ item.name }}</span>
                            <span class="tab_subname">{{ item.en }}</span>
                            <p></p>
                            <img v-if="item.percentum" src="@/assets/images/home/fanshui.png" alt="" />
                            <!-- <p v-if="item.percentum">最高反水{{item.percentum}}%</p> -->
                        </div>
                        <img class="icon_img" v-if="index == 0" src="@/assets/images/home/atte-icon.png" alt="" />
                        <img class="c_img" :src="item.src" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <!-- @click="show = false" -->
        <van-overlay :show="show" @click="show = false" class="game_box pt-[150px]">
            <div class="wrapper">
                <img class="close mb-1" src="../../assets/images/game/close.png" alt="" />
                <div class="wrapper_center">
                    <img class="title_icon" src="../../assets/images/game/t-icon.png" alt="" />
                    <div class="wrapper_box">
                        <div class="wrapper_item mb-1" v-for="(item, index) in 3" :key="index + 500">
                            <img class="icon" src="../../assets/images/game/sports-icon.png" alt="" />
                            <img class="icon_text" src="../../assets/images/game/sports.png" alt="" />
                            <img class="icon_img" src="../../assets/images/game/icon1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </van-overlay>
        <van-dialog v-model:show="maintainAlertShow" :title="t('home_page.text_1')">
            <div class="text-center font-bold mt-[4px]">{{ t('home_page.text_2') }}</div>
            <div class="text-center text-[14px] mx-[12px] mt-[4px]">{{ t('home_page.text_3') }}</div>
            <div class="text-center text-[14px] mx-[12px] mt-[4px] font-bold">{{ t('home_page.text_4') }}</div>
            <div class="text-center text-[14px] mx-[12px] mt-[4px]">{{ maintainTime }}</div>
        </van-dialog>
    </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
export default {
    data() {
        return {
            router: null,
            maintainAlertShow: false,
            maintainTime: "",
        }
    },
    sockets: {
        connect: function () {
            console.log('socket to notification channel connected')
        },
        receiveMaintainTime: function (maintainTime: string) {
            console.log(maintainTime)
            this.maintainTime = maintainTime;
            if (maintainTime != "") {
                this.maintainAlertShow = true;
            } else {
                this.router.push({ name: "stadium" });
            }
        }
    },
    mounted() {
        this.router = useRouter();
        // this.$socket.emit("systemMaintance");
    }
}
</script>

<script setup lang="ts">
import { showToast } from 'vant';
import { showDialog } from 'vant';
import { ElLoading } from "element-plus";
import { ref, computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { ogGameStore } from '@/stores/og_game';
import { agGameStore } from '@/stores/ag_game';
import { bbinGameStore } from '@/stores/bbin_game';
import { useSysConfigStore } from '@/stores/sysConfig';
import { FILE_BASE_URL } from "@/config";
import { useHead } from '@vueuse/head';
import router from '@/router';
import socket from '@/utils/socket';
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { dispatchRedirectOGUrl } = ogGameStore();
const { dispatchRedirectAGUrl } = agGameStore();
const { dispatchRedirectBBINUrl } = bbinGameStore();
const { getSysConfigValue } = useSysConfigStore();
const show = ref(false);
const iconList = ref([
    {
        id: 1,
        icon: new URL('@/assets/images/home/m-icon-1.png', import.meta.url)
            .href,
        name: t('home_page.text_5'),
        path: 'transfer'
    },
    {
        id: 2,
        icon: new URL('@/assets/images/home/m-icon-2.png', import.meta.url)
            .href,
        name: '存款',
        path: 'deposit'
    },
    {
        id: 3,
        icon: new URL('@/assets/images/home/m-icon-3.png', import.meta.url)
            .href,
        name: '取款',
        path: 'withdraw'
    },
    {
        id: 4,
        icon: new URL('@/assets/images/home/m-icon-4.png', import.meta.url)
            .href,
        name: 'VIP',
        path: 'vip'
    }
]);
const active = ref(1);
const webGonggaoMsg = ref("");
const tabList = ref([
    {
        id: 1,
        icon: {
            active: new URL(
                '@/assets/images/home/icon-tab1-o.png',
                import.meta.url
            ).href,
            inactive: new URL(
                '@/assets/images/home/icon-tab1.png',
                import.meta.url
            ).href
        }
    },
    {
        id: 2,
        icon: {
            active: new URL(
                '@/assets/images/home/icon-tab2-o.png',
                import.meta.url
            ).href,
            inactive: new URL(
                '@/assets/images/home/icon-tab2.png',
                import.meta.url
            ).href
        }
    },
    {
        id: 3,
        icon: {
            active: new URL(
                '@/assets/images/home/icon-tab3-o.png',
                import.meta.url
            ).href,
            inactive: new URL(
                '@/assets/images/home/icon-tab3.png',
                import.meta.url
            ).href
        }
    },
    {
        id: 4,
        icon: {
            active: new URL(
                '@/assets/images/home/icon-tab4-o.png',
                import.meta.url
            ).href,
            inactive: new URL(
                '@/assets/images/home/icon-tab4.png',
                import.meta.url
            ).href
        }
    },
    {
        id: 5,
        icon: {
            active: new URL(
                '@/assets/images/home/icon-tab5-o.png',
                import.meta.url
            ).href,
            inactive: new URL(
                '@/assets/images/home/icon-tab5.png',
                import.meta.url
            ).href
        }
    }
]);
const selectImgList = ref([] as Array<any>);
const imgList = ref([
    [
        {
            name: '皇冠 体育',
            path: 'stadium',
            en: 'TIARA JINGSHEN',
            percentum: '1.18',
            src: new URL('@/assets/images/home/tab-r1-1.png', import.meta.url)
                .href
        }
    ],
    [
        {
            name: '新葡京 OG东方馆',
            redirect: 'OG_GAME',
            en: 'OG  JINGSHEN',
            percentum: '1.18',
            src: new URL('@/assets/images/home/tab-r2-1.png', import.meta.url)
                .href
        },
        {
            name: 'AG  国际厅',
            redirect: 'AG_GAME_2',
            en: 'AG  CASINO',
            src: new URL('@/assets/images/home/tab-r2-2.png', import.meta.url)
                .href
        },
        {
            name: 'AG  旗舰厅',
            redirect: 'AG_GAME_1',
            en: 'AG  CASINO',
            src: new URL('@/assets/images/home/tab-r2-3.png', import.meta.url)
                .href
        },
        {
            name: 'AG  VIP厅',
            redirect: 'AG_GAME_4',
            en: 'AG  CASINO',
            percentum: '1.18',
            src: new URL('@/assets/images/home/tab-r2-4.png', import.meta.url)
                .href
        },
        {
            name: 'BBIN  馆',
            redirect: 'BBIN_GAME_1',
            en: 'BBIN  CASINO',
            src: new URL('@/assets/images/home/tab-r2-5.png', import.meta.url)
                .href
        }
    ],
    [
        {
            name: '开元棋牌',
            path: "CHESS",
            en: 'KY BOARD GAMES',
            percentum: '1.18',
            src: new URL('@/assets/images/home/tab-r3-1.png', import.meta.url)
                .href
        }
    ],
    [
        {
            name: 'AG  电子',
            path: "AG_SLOT",
            en: 'AG  SLOTS  GAME',
            percentum: '1.18',
            src: new URL('@/assets/images/home/tab-r4-1.png', import.meta.url)
                .href
        },
        {
            name: 'BBIN  电子',
            path: "BBIN_SLOT",
            en: 'PG  SLOTS  GAME',
            src: new URL('@/assets/images/home/tab-r4-2.png', import.meta.url)
                .href
        },
        {
            name: 'PT  电子',
            path: "PT_SLOT",
            en: 'PT  SLOTS  GAME',
            src: new URL('@/assets/images/home/tab-r4-3.png', import.meta.url)
                .href
        },
        {
            name: 'MG  电子',
            path: "MG_SLOT",
            en: 'MG  SLOTS  GAME',
            src: new URL('@/assets/images/home/tab-r4-4.png', import.meta.url)
                .href
        }
    ],
    [
        {
            name: '新葡京彩票',
            path: 'lottery',
            en: 'XPJ  LOTTERY',
            src: new URL('@/assets/images/home/tab-r5-1.png', import.meta.url)
                .href
        },
        {
            name: '六合彩',
            en: 'SG  LOTTERY',
            src: new URL('@/assets/images/home/tab-r5-2.png', import.meta.url)
                .href
        },
        {
            name: '赛车',
            en: 'SG  LOTTERY',
            src: new URL('@/assets/images/home/tab-r5-3.png', import.meta.url)
                .href
        }
    ]
]);
const swipeItem = ref([]);
const autoplay = ref(3000);
const getTab = (id: number) => {
    active.value = id;
    selectImgList.value = imgList.value[id - 1];
};
const redirectOGUrl = computed(() => {
    const { getRedirectOGUrl } = storeToRefs(ogGameStore());
    return getRedirectOGUrl.value;
})
const redirectAGUrl = computed(() => {
    const { getRedirectAGUrl } = storeToRefs(agGameStore());
    return getRedirectAGUrl.value;
})
const redirectBBINUrl = computed(() => {
    const { getRedirectBBINUrl } = storeToRefs(bbinGameStore());
    return getRedirectBBINUrl.value;
})
const ogErrMessage = computed(() => {
    const { getErrMessage } = storeToRefs(ogGameStore());
    return getErrMessage.value;
})
const bbinErrMessage = computed(() => {
    const { getErrMessage } = storeToRefs(bbinGameStore());
    return getErrMessage.value;
})
const agErrMessage = computed(() => {
    const { getErrMessage } = storeToRefs(agGameStore());
    return getErrMessage.value;
})
const agSuccess = computed(() => {
    const { getSuccess } = storeToRefs(agGameStore());
    return getSuccess.value
})
const bbinSuccess = computed(() => {
    const { getSuccess } = storeToRefs(bbinGameStore());
    return getSuccess.value
})
const ogSuccess = computed(() => {
    const { getSuccess } = storeToRefs(ogGameStore());
    return getSuccess.value
})
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value;
})
const sysConfigItem = computed(() => {
    const { getSysConfig } = storeToRefs(useSysConfigStore());
    return getSysConfig.value;
})
const openGame = () => {
    show.value = true;
};
onMounted(async () => {

    selectImgList.value = imgList.value[active.value - 1];
    await getSysConfigValue();
    // web_gonggao_wap
    if (sysConfigItem.value.web_popmsg_wap != "" && sysConfigItem.value.web_popmsg_wap != null) {
        showDialog({
            title: '公告',
            message: sysConfigItem.value.web_popmsg_wap,
        }).then(() => {
            // on close
        });
    }
    const title = sysConfigItem.value.web_name_wap;
    useHead({
        title,
    })
    swipeItem.value = sysConfigItem.value.web_banner_wap.split("|").filter((item: any) => item !== '').map((item: any) => {
        item = FILE_BASE_URL + "/storage" + item;
        return item;
    });
    autoplay.value = sysConfigItem.value.web_slider_time_wap;
    webGonggaoMsg.value = sysConfigItem.value.web_gonggao_wap;
});
const goDetail = async (path: string, redirect: string) => {
    await getSysConfigValue();
    console.log(sysConfigItem.value.KY, sysConfigItem.value.KY_Repair);
    if (path) {
        if (path == "CHESS" && (user.value.KY == 0 || sysConfigItem.value.KY == 0 || sysConfigItem.value.KY_Repair == 1)) {
            showToast("开元棋牌维护中，请稍候再试......");
            return;
        }
        if (path == "AG_SLOT" && (user.value.AG == 0 || sysConfigItem.value.AG == 0 || sysConfigItem.value.AG_Repair == 1)) {
            showToast("开元棋牌维护中，请稍候再试......");
            return;
        }
        if (path == "BBIN_SLOT" && (user.value.BBIN == 0 || sysConfigItem.value.BBIN == 0 || sysConfigItem.value.BBIN_Repair == 1)) {
            showToast("开元棋牌维护中，请稍候再试......");
            return;
        }
        if (path == "MG_SLOT" && (user.value.MG == 0 || sysConfigItem.value.MG == 0 || sysConfigItem.value.MG_Repair == 1)) {
            showToast("开元棋牌维护中，请稍候再试......");
            return;
        }
        if (path == "PT_SLOT" && (user.value.PT == 0 || sysConfigItem.value.PT == 0 || sysConfigItem.value.PT_Repair == 1)) {
            console.log(user.value.PT);
            console.log(sysConfigItem.value.PT);
            console.log(sysConfigItem.value.PT_Repair);
            showToast("开元棋牌维护中，请稍候再试......");
            return;
        }
        if (path == "stadium") {
            // router.push({ name: "stadium" });
            socket.io.emit("systemMaintance");
            return;
        }
        router.push({ name: path });
    } else {
        //showToast('正在开发!');
        if (redirect) {
            if (user.value.id == undefined) {
                showToast("您还没有登录或登录超时，请重新登录......");
                router.push({ name: "login" });
                return;
            }
            if ((user.value.OG == 0 || sysConfigItem.value.OG == 0 || sysConfigItem.value.OG_Repair == 1) && redirect == "OG_GAME") {
                showToast("开元棋牌维护中，请稍候再试......");
                return;
            }
            if ((user.value.AG == 0 || sysConfigItem.value.AG == 0 || sysConfigItem.value.AG_Repair == 1) && (redirect == "AG_GAME_2" || redirect == "AG_GAME_1" || redirect == "AG_GAME_4")) {
                showToast("开元棋牌维护中，请稍候再试......");
                return;
            }
            if ((user.value.BBIN == 0 || sysConfigItem.value.BBIN == 0 || sysConfigItem.value.BBIN_Repair == 1) && redirect == "BBIN_GAME_1") {
                showToast("开元棋牌维护中，请稍候再试......");
                return;
            }
            const loading = ElLoading.service({
                lock: true,
                text: "加载中...",
                background: "rgba(0, 0, 0, 0.7)",
            });

            if (redirect == "OG_GAME") {
                await dispatchRedirectOGUrl({}, token.value)
                if (ogSuccess.value && redirectOGUrl.value != "") {
                    window.open(redirectOGUrl.value, '_blank');
                } else {
                    showToast(ogErrMessage.value);
                }
            } else if (redirect == "AG_GAME_2") {
                await dispatchRedirectAGUrl({ game_type: 2 }, token.value);
                console.log(agSuccess.value, redirectAGUrl.value);
                if (agSuccess.value && redirectAGUrl.value != "") {
                    window.open(redirectAGUrl.value, '_blank');
                } else {
                    showToast(agErrMessage.value);
                }
            } else if (redirect == "AG_GAME_1") {
                await dispatchRedirectAGUrl({ game_type: 1 }, token.value);
                if (agSuccess.value && redirectAGUrl.value != "") {
                    window.open(redirectAGUrl.value, '_blank');
                } else {
                    showToast(agErrMessage.value);
                }
            } else if (redirect == "AG_GAME_4") {
                await dispatchRedirectAGUrl({ game_type: 4 }, token.value);
                if (agSuccess.value && redirectAGUrl.value != "") {
                    window.open(redirectAGUrl.value, '_blank');
                } else {
                    showToast(agErrMessage.value);
                }
            } else if (redirect == "BBIN_GAME_1") {
                await dispatchRedirectBBINUrl({ game_type: 1 }, token.value);
                if (bbinSuccess.value && redirectBBINUrl.value != "") {
                    window.open(redirectBBINUrl.value, '_blank');
                } else {
                    showToast(bbinErrMessage.value);
                }
            }

            loading.close();
        }
    }
};
const goMessage = () => {
    router.push({ name: 'message' });
};
</script>

<style scoped lang="scss">
.game_box {
    z-index: 6;

    .wrapper {
        width: 305px;
        margin-left: 35px;
        margin-top: 50px;

        .close {
            width: 24px;
            height: 24px;
            position: relative;
            left: 281px;
        }

        .wrapper_center {
            width: 305px;
            height: 428px;
            background-image: url(../../assets/images/game/back.png);
            background-size: cover;
            position: relative;

            .title_icon {
                width: 217px;
                height: 113px;
                position: absolute;
                top: -19px;
            }

            .wrapper_box {
                margin-left: 22px;
                padding-top: 79px;

                .wrapper_item {
                    position: relative;

                    .icon {
                        position: absolute;
                        left: -4px;
                        width: 38px;
                        height: 38px;
                    }

                    .icon_text {
                        position: absolute;
                        left: -4px;
                        width: 34px;
                        height: 26px;
                    }

                    .icon_img {
                        width: 259px;
                        height: 104px;
                    }
                }
            }
        }
    }
}

.box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 8px;
    z-index: 5;
    background-color: #fff;
    width: 100%;
    height: 28px;

    .logo_img {
        margin-left: 12px;
        width: 85px;
        height: 28px;
    }

    .r_img {
        width: 21px;
        height: 22px;
        margin-right: 13px;
    }
}

.home_box {
    padding: 45px 12px 60px 11px;

    .banner_box {
        margin-bottom: 10px;

        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            width: 354px;
            text-align: center;
        }

        .banner_img {
            height: 143px;
            width: 100%;
        }
    }

    .advertising {
        .advertising_top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 20px;
            margin-bottom: 13px;

            .l_img {
                width: 15px;
                height: 11px;
            }

            .r_img {
                width: 64px;
                height: 20px;
            }

            .advertising_text {
                height: 20px;
                width: 251px;
                display: flex;
                align-items: center;
                overflow: hidden;

                span {
                    white-space: nowrap;
                    width: 100%;
                    font-size: 12px;
                    color: #757392;
                }
            }
        }

        .advertising_bottom {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            height: 57px;

            .user_box_l {
                height: 57px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .user_top {
                    display: flex;
                    align-items: center;

                    // margin-bottom: 12px;
                    span {
                        font-size: 14px;
                        color: #757392;
                    }

                    img {
                        width: 44px;
                        height: 18px;
                        margin-left: 5px;
                    }
                }

                .user_bottom {
                    span {
                        font-size: 20px;
                        font-family: FZDaHei-B02;
                        font-weight: 400;
                        color: #56565a;
                    }
                }
            }

            .user_box_r {
                display: flex;

                .user_box_r_item {
                    height: 57px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    margin-left: 16px;

                    img {
                        width: 37px;
                        height: 33px;
                    }

                    span {
                        width: 26px;
                        height: 13px;
                        font-size: 13px;
                        font-family: Adobe Heiti Std;
                        font-weight: normal;
                        color: #56565a;
                        line-height: 14px;
                        margin-bottom: 2px;
                    }
                }
            }
        }
    }

    .tab_box {
        display: flex;
        justify-content: space-between;

        .tab_left {
            .tab_item {
                width: 41px;
                height: 55px;
                margin-bottom: 12px;

                img {
                    width: 41px;
                    height: 55px;
                }
            }
        }

        .tab_right {
            display: flex;
            flex-direction: column;

            .tab_right_item {
                position: relative;
                width: 297px;
                height: 121px;
                margin-bottom: 18px;

                .tab_right_item_text {
                    position: relative;
                    z-index: 3;
                    display: flex;
                    flex-direction: column;
                    padding-left: 24px;

                    .tab_name {
                        font-size: 16px;
                        font-family: Adobe Heiti Std;
                        font-weight: normal;
                        color: #6e6e6e;
                        margin: 16px 0 8px 0;
                    }

                    .tab_subname {
                        font-size: 12px;
                        font-family: Adobe Heiti Std;
                        font-weight: normal;
                        color: #aeadc4;
                    }

                    p {
                        width: 34px;
                        height: 2px;
                        background-color: #01b3ff;
                        margin-top: 6px;
                    }

                    img {
                        margin-top: 14px;
                        width: 76px;
                        height: 19px;
                    }
                }

                .icon_img {
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    left: 0;
                }

                .c_img {
                    width: 297px;
                    height: 121px;
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
}
</style>
