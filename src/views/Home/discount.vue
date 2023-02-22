<template>
    <div class="">
        <div class="follow_bc">
            <div
                class="flex border-b-1 border-[#333333] overflow-scroll w-full"
            >
                <div class="flex">
                    <div
                        @click="tabClick(item.id, i)"
                        v-for="(item, i) in tabsList"
                        :key="i"
                        ref="label"
                        :class="
                            item.id === groupId
                                ? 'active border-b-2 border-blue-500'
                                : ''
                        "
                        class="second_tab py-[15px]"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <!-- <DiscountItem :itemList="imgList"/> -->
            <div v-show="groupId === 0" class="tab_box animated fadeInLeft">
                <div
                    v-for="(item, index) in imgList[0]"
                    :key="index"
                    class="box_list"
                >
                    <img class="back_img" :src="item.url" alt="" />
                    <img
                        class="icon_img"
                        v-if="item.type == 1"
                        src="@/assets/images/discount/new-icon.png"
                        alt=""
                    />
                    <img
                        class="icon_img"
                        v-if="item.type == 2"
                        src="@/assets/images/discount/time-icon.png"
                        alt=""
                    />
                    <img
                        class="icon_img"
                        v-if="item.type == 3"
                        src="@/assets/images/discount/orther-icon.png"
                        alt=""
                    />
                </div>
            </div>
            <div v-show="groupId === 1" class="tab_box animated fadeInLeft">
                <div
                    v-for="(item, index) in imgList[1]"
                    :key="index"
                    class="box_list"
                >
                    <img class="back_img" :src="item.url" alt="" />
                    <img
                        class="icon_img"
                        v-if="item.type == 1"
                        src="@/assets/images/discount/new-icon.png"
                        alt=""
                    />
                    <img
                        class="icon_img"
                        v-if="item.type == 2"
                        src="@/assets/images/discount/time-icon.png"
                        alt=""
                    />
                    <img
                        class="icon_img"
                        v-if="item.type == 3"
                        src="@/assets/images/discount/orther-icon.png"
                        alt=""
                    />
                </div>
            </div>
            <div v-show="groupId === 2" class="tab_box animated fadeInLeft">
                <div
                    v-for="(item, index) in imgList[2]"
                    :key="index"
                    class="box_list"
                >
                    <img class="back_img" :src="item.url" alt="" />
                    <img
                        class="icon_img"
                        v-if="item.type == 1"
                        src="@/assets/images/discount/new-icon.png"
                        alt=""
                    />
                    <img
                        class="icon_img"
                        v-if="item.type == 2"
                        src="@/assets/images/discount/time-icon.png"
                        alt=""
                    />
                    <img
                        class="icon_img"
                        v-if="item.type == 3"
                        src="@/assets/images/discount/orther-icon.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DiscountItem from '@/components/discount/discountItem.vue';
const groupId = ref(0);
const tabsList = ref([
    {
        name: '全部优惠',
        id: 0
    },
    {
        name: '限时活动',
        id: 1
    },
    {
        name: '新人首存',
        id: 2
    },
    {
        name: '日常活动',
        id: 3
    },
    {
        name: '高额返水',
        id: 4
    },
    {
        name: 'VIP特权',
        id: 5
    }
]);
const imgList = ref([
    [
        {
            url: new URL('@/assets/images/discount/img1.png', import.meta.url)
                .href,
            type: 1
        },
        {
            url: new URL('@/assets/images/discount/img2.png', import.meta.url)
                .href,
            type: 1
        },
        {
            url: new URL('@/assets/images/discount/img3.png', import.meta.url)
                .href,
            type: 2
        },
        {
            url: new URL('@/assets/images/discount/img4.png', import.meta.url)
                .href,
            type: 3
        }
    ],
    [
        {
            url: new URL('@/assets/images/discount/img3.png', import.meta.url)
                .href,
            type: 2
        }
    ],
    [
        {
            url: new URL('@/assets/images/discount/img4.png', import.meta.url)
                .href,
            type: 3
        }
    ]
]);
const tabClick = (id: number, i: number) => {
    groupId.value = id;
    let doc = document.getElementsByClassName('bottom_line')[0];
    // let left = this.$refs.label[i].offsetLeft + "px"; //返回当前元素的相对水平偏移位置的偏移容器
    // let width = this.$refs.label[i].clientWidth + "px"; //	在页面上返回内容的可视宽度（不包括边框，边距或滚动条）
    // (doc as any).style.width = `${width}`;
    // (doc as any).style.transform = `translateX(${left})`;
    // (doc as any).style.transition = ".3s";
};
</script>

<style scoped lang="scss">
.tab_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid #e9e9e9;
    padding-top: 4px;

    .box_list {
        position: relative;

        .back_img {
            width: 351px;
            height: 142px;
        }

        .icon_img {
            position: absolute;
            width: 53px;
            height: 55px;
            top: 0;
            left: -4px;
        }
    }
}

// tab切换
.follow_bc {
    width: 100%;
    margin-top: 10px;
    position: relative;
}

.first_tab {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    cursor: pointer;
}

.bottom_line {
    width: 93px;
    height: 2px;
    background: linear-gradient(137deg, #ff9696 0%, #e55653 100%);
    box-shadow: 0px 1px 4px 0px rgba(215, 6, 3, 0.19);
    border-radius: 1px;
    border: 0px solid rgba(151, 151, 151, 0);
    position: absolute;
    margin-top: -9px;
    margin-left: 1px;
}

.second_tab {
    font-size: 16px;
    color: #acafb1;
    line-height: 20px;
    cursor: pointer;
    width: 93px;
    display: flex;
    justify-content: center;
}

.tab_two {
    display: flex;
    padding: 20px 0px;
}

.tab_two div.active {
    color: #333;
    font-size: 16px;
    letter-spacing: 1px;
}

//tab切换
</style>
