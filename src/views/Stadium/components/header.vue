<script lang="ts">
    import { defineComponent } from 'vue'
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '@/stores/auth';
    export default defineComponent({
        data() {
        return {
            userData: []
        }
    },
        mounted() {
            const {
                getToken,
                getUser,
            } = storeToRefs(useAuthStore());
            this.userData=getUser.value;
            // if(!getUser.value.id){
            //     router.push({name:'my'})
            // }

        },
        
    })
</script>
<template>
	<div class="header">
		<img @click="onClickLeft" class="back_icon" src="@/assets/images/stadiums/back.png" alt="">
		<div class="user_box">
			<img @click="goSubHome" src="@/assets/images/stadiums/user.png" alt="">
			<div class="money">
				<span>{{userData.UserName}}</span>
				<span>{{userData.Money}}</span>
			</div>
		</div>
		<img @click="openPopup" class="search" src="@/assets/images/stadiums/search.png" alt="">
	</div>
</template>

<script setup lang="ts">
import router from '@/router'
import {useRoute} from 'vue-router'
const emit = defineEmits(['openPopup'])
const route = useRoute()
const onClickLeft = () => {
	if(route.name == 'stadiumshomepage') {
		router.push({name: 'home'})
	}else{
		router.go(-1)
	}
}

const openPopup = () => {
	
	emit('openPopup')
}

const goSubHome = () => {
	router.push({name: 'Subhome'})
}
</script>

<style scoped lang="scss">
	
	.header {
		height: 43px;
		padding: 0 13px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 0;
		background-color: #F3FAFF;
		z-index: 5;
		.back_icon {
			width: 9px;
			height: 16px;
			margin-right: 26px;
		}
		.user_box {
			display: flex;
			width: 293px;
	
			img {
				width: 33px;
				height: 33px;
			}
	
			.money {
				display: flex;
				flex-direction: column;
				font-size: 14px;
				color: #000000;
				align-items: center;
			}
		}
	
		.search {
			width: 21px;
			height: 22px;
		}
	}
	
</style>