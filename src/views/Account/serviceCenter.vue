<!-- 赛果 -->
<template>
    <div class="animated fadeInLeft">
        <van-nav-bar
            class="border-b-2 border-gray-300"
            fixed
            @click-left="onClickLeft"
        >
            <template #left>
                <img
                    class="w-1"
                    referrerpolicy="no-referrer"
                    src="@/assets/images/my/arrow-left.png"
                />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">Service Center</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class=" pt-[50px] pb-[60px] h-screen">
            <van-dropdown-menu>
                <van-dropdown-item title="Title" ref="item">
                    <div class="bg-white grid grid-cols-4 gap-1 px-[10px] py-[10px]">
                        <div v-for="(item, index) in items" :key="index" :class="['rounded-[8px] border border-[#cccccc] text-[14px] col-span-1  py-[4px] flex justify-center items-center text-[#cccccc]', active===index?'bg-blue-500':'bg-whie']" @click="setActive(index)">
                            {{item.title}}
                        </div>
                    </div>
                </van-dropdown-item>
                <van-dropdown-item title="Title" ref="item">
                    <div class="bg-white grid grid-cols-4 gap-1 px-[10px] py-[10px] relative ">
                        
                        <div v-for="(item, index) in items" :key="index" :class="['rounded-[8px] border border-[#cccccc] text-[14px] col-span-1  py-[4px] flex justify-center items-center text-[#cccccc]', active===index?'bg-blue-500':'bg-whie']" @click="setActive(index)">
                            {{item.title}}
                        </div>
                    </div>
                </van-dropdown-item>
                <van-dropdown-item title="Title" ref="item">
                    <div class="bg-white grid grid-cols-4 gap-1 px-[10px] py-[10px]">
                        <div v-for="(item, index) in items" :key="index" :class="['rounded-[8px] border border-[#cccccc] text-[14px] col-span-1  py-[4px] flex justify-center items-center text-[#cccccc]', active===index?'bg-blue-500':'bg-whie']" @click="setActive(index)">
                            {{item.title}}
                        </div>
                    </div>
                </van-dropdown-item>
            </van-dropdown-menu>
            <p class="mt-[400px] text-center">
                this is test message
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openSelect = ref(false);
const index = ref(0);
const item = ref({});
const value = ref(0);
const switch1 = ref(false);
const switch2 = ref(false);
const options = [
    { text: 'Option1', value: 0 },
    { text: 'Option2', value: 1 },
    { text: 'Option3', value: 2 }
];
const items = ref([
    {
        title:'Chinese'
    },
    {
        title:'Chinese'
    },
    {
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },{
        title:'Chinese'
    },
])
const active = ref(0)

const setActive = (value:number) =>{
    active.value = value
}
const onClickLeft = () => {

}
</script>
<style>
.van-dropdown-menu__bar{
    padding-right: 50px !important;
}
.van-dropdown-menu__item{
    width: 2px !important;
    background: rgb(235, 231, 231);
    margin: 10px;
    border-radius: 50px;
    color: #000;
    

}
</style>