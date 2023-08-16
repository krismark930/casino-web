<template>
    <div class="animated fadeInLeft">
        <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
            <template #left>
                <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
            </template>
            <template #title>
                <span class="pt-[10px] text-[#454558]">在线客服</span>
            </template>
            <template #right> </template>
        </van-nav-bar>
        <div class="pt-[90px] pb-[50px] text-[14px] w-screen relative ">
            <div class="absolute top-6 flex left-14 text-gray-400">2022-11-21 15:26:32</div>
            <div class="px-2 h-[calc(100vh-140px)] overflow-y-scroll">
                <div class="flex justify-between">
                    <img class="w-[35px] h-[35px] mr-1" src="@/assets/images/stadiums/icon-avatar.png" alt="avatar"/>
                    <div class="bg-gray-200 w-full mt-1 p-1 rounded-md rounded-tl-none">
                        在线客服<br />DSKAHIGOHE<br />DSHGHSDOGERIOGNJEIORNGOI<br />DFDSDSF,<br />HDSIOHG<br />黑寡妇海度斯还是对更好地素刚<br />法人股东法规或返点给<br />发过火法典化5<br />梵蒂冈的双方各电风扇df单方事
                    </div>
                    <div class="w-[35px] h-[35px] ml-2"></div>
                </div>
                <div class="flex justify-between mt-5 ">
                    <div class="w-[35px] h-[35px] mr-2"></div>
                    <div class="bg-blue-600  w-full mt-1 text-white p-1  rounded-md rounded-tr-none">
                        在线客服<br />DSKAHIGOHE<br />DSHGHSDOGERIOGNJEIORNGOI<br />DFDSDSF,<br />HDSIOHG<br />黑寡妇海度斯还是对更好地素刚<br />法人股东法规或返点给<br />发过火法典化5<br />梵蒂冈的双方各电风扇df单方事
                    </div>
                    <img class="w-[35px] h-[35px] ml-1" src="@/assets/images/stadiums/user.png" alt="avatar"/>
                </div>
            </div>
            
            <div class="absolute bottom-0 w-full flex justify-between p-1 bg-gray-200">
                <img class="w-[35px] h-[30px]" src="@/assets/images/stadiums/emoji.png" alt="emoji"/>
                <input class="w-full mx-1 rounded-sm"/>
                <img class="w-[30px] h-[25px]" src="@/assets/images/stadiums/send.png" alt="send"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
const onClickLeft = () => {
	router.go(-1)
}
</script>