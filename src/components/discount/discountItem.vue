<script setup lang="ts">
// const { groupId , imgList} = defineProps<{ image: string }>();
</script>

<template>
    <div  class="tab_box animated fadeInLeft">
        <!-- <div v-for="(item, index) in imgList[0]" :key="index" class="box_list">
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
        </div> -->
    </div>
</template>

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
</style>
