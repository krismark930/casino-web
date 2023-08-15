<template>
    <div class="">
        <div class="follow_bc">
            <div class="flex border-b-1 border-[#333333] overflow-scroll w-full">
                <div class="flex">
                    <div @click="tabClick(item.id, i)" v-for="(item, i) in tabsList" :key="i" ref="label"
                        :class="item.id === groupId ? 'active border-b-2 border-blue-500' : ''"
                        class="second_tab py-[15px]">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <!-- <DiscountItem :itemList="imgList"/> -->
            <div v-show="groupId === 0" class="tab_box animated fadeInLeft">
                <div v-for="(item, index) in discountList" :key="index" class="box_list">
                    <el-row style="height: 100%;">
                        <el-col :span="8">
                            <p class="discount-title">{{ item.title }}</p>
                            <div class="discount-content" v-html="item.content"></div>
                        </el-col>
                        <el-col :span="16" style="display: flex; align-items: center; justify-content: end;">
                            <img class="back_img" :src="item.image" alt="" />
                        </el-col>
                    </el-row>
                    <img class="icon_img" v-if="item.type == 1" src="@/assets/images/discount/time-icon.png" alt="" />
                    <img class="icon_img" v-if="item.type == 2" src="@/assets/images/discount/new-icon.png" alt="" />
                    <img class="icon_img" v-if="item.type == 3" src="@/assets/images/discount/orther-icon.png" alt="" />
                </div>
            </div>
            <div v-show="groupId === 1" class="tab_box animated fadeInLeft">
                <div v-for="(item, index) in discountList.filter(item => item.type == 1)" :key="index" class="box_list">
                    <el-row style="height: 100%;">
                        <el-col :span="8">
                            <p class="discount-title">{{ item.title }}</p>
                            <div class="discount-content" v-html="item.content"></div>
                        </el-col>
                        <el-col :span="16" style="display: flex; align-items: center; justify-content: end;">
                            <img class="back_img" :src="item.image" alt="" />
                        </el-col>
                    </el-row>
                    <img class="icon_img" src="@/assets/images/discount/time-icon.png" alt="" />
                </div>
            </div>
            <div v-show="groupId === 2" class="tab_box animated fadeInLeft">
                <div v-for="(item, index) in discountList.filter(item => item.type == 2)" :key="index" class="box_list">
                    <el-row style="height: 100%;">
                        <el-col :span="8">
                            <p class="discount-title">{{ item.title }}</p>
                            <div class="discount-content" v-html="item.content"></div>
                        </el-col>
                        <el-col :span="16" style="display: flex; align-items: center; justify-content: end;">
                            <img class="back_img" :src="item.image" alt="" />
                        </el-col>
                    </el-row>
                    <img class="icon_img" src="@/assets/images/discount/new-icon.png" alt="" />
                </div>
            </div>
            <div v-show="groupId === 3" class="tab_box animated fadeInLeft">
                <div v-for="(item, index) in discountList.filter(item => item.type == 3)" :key="index" class="box_list">
                    <el-row style="height: 100%;">
                        <el-col :span="8">
                            <p class="discount-title">{{ item.title }}</p>
                            <div class="discount-content" v-html="item.content"></div>
                        </el-col>
                        <el-col :span="16" style="display: flex; align-items: center; justify-content: end;">
                            <img class="back_img" :src="item.image" alt="" />
                        </el-col>
                    </el-row>
                    <img class="icon_img" src="@/assets/images/discount/orther-icon.png" alt="" />
                </div>
            </div>
            <div v-show="groupId === 4" class="tab_box animated fadeInLeft">
                <div v-for="(item, index) in discountList.filter(item => item.type == 4)" :key="index" class="box_list">
                    <el-row style="height: 100%;">
                        <el-col :span="8">
                            <p class="discount-title">{{ item.title }}</p>
                            <div class="discount-content" v-html="item.content"></div>
                        </el-col>
                        <el-col :span="16" style="display: flex; align-items: center; justify-content: end;">
                            <img class="back_img" :src="item.image" alt="" />
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div v-show="groupId === 5" class="tab_box animated fadeInLeft">
                <div v-for="(item, index) in discountList.filter(item => item.type == 5)" :key="index" class="box_list">
                    <el-row style="height: 100%;">
                        <el-col :span="8">
                            <p class="discount-title">{{ item.title }}</p>
                            <div class="discount-content" v-html="item.content"></div>
                        </el-col>
                        <el-col :span="16" style="display: flex; align-items: center; justify-content: end;">
                            <img class="back_img" :src="item.image" alt="" />
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { discountStore } from "@/stores/discount";
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const { dispatchDiscounts } = discountStore();

const groupId = ref(0);
const tabsList = ref([
    {
        name: t('discount.text_1'),
        id: 0
    },
    {
        name: t('discount.text_2'),
        id: 1
    },
    {
        name: t('discount.text_3'),
        id: 2
    },
    {
        name: t('discount.text_4'),
        id: 3
    },
    {
        name: t('discount.text_5'),
        id: 4
    },
    {
        name: t('discount.text_6'),
        id: 5
    }
]);
// const discountList = ref([
//     {
//         url: new URL('@/assets/images/discount/img3.png', import.meta.url)
//             .href,
//         type: 1
//     },
//     {
//         url: new URL('@/assets/images/discount/img1.png', import.meta.url)
//             .href,
//         type: 2
//     },
//     {
//         url: new URL('@/assets/images/discount/img2.png', import.meta.url)
//             .href,
//         type: 2
//     },
//     {
//         url: new URL('@/assets/images/discount/img4.png', import.meta.url)
//             .href,
//         type: 3
//     }
// ]);
const discountList = computed(() => {
    const { getDiscountList } = storeToRefs(discountStore());
    return getDiscountList.value;
})
const tabClick = (id: number, i: number) => {
    groupId.value = id;
    let doc = document.getElementsByClassName('bottom_line')[0];
    // let left = this.$refs.label[i].offsetLeft + "px"; //返回当前元素的相对水平偏移位置的偏移容器
    // let width = this.$refs.label[i].clientWidth + "px"; //	在页面上返回内容的可视宽度（不包括边框，边距或滚动条）
    // (doc as any).style.width = `${width}`;
    // (doc as any).style.transform = `translateX(${left})`;
    // (doc as any).style.transition = ".3s";
};
onMounted(async () => {
    await dispatchDiscounts();
})
</script>

<style scoped lang="scss">
.tab_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid #e9e9e9;
    padding-top: 4px;
    margin-bottom: 60px;

    .box_list {
        background: #F9FAFF;
        margin-bottom: 5px;
        position: relative;
        width: 351px;
        height: 142px;

        .back_img {
            width: 100%;
        }

        .icon_img {
            position: absolute;
            width: 53px;
            height: 55px;
            top: 0;
            left: -4px;
        }
    }

    .discount-title {
        margin-top: 30px;
        text-align: center;
        font-weight: 600;
        font-size: 26px;
    }
    .discount-content {
        font-size: 24px;
        // margin-top: 10px;
        font-size: 18px;
        text-align: center;
        word-wrap: break-word;
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
