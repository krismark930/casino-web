<template>
	<div>
		<div class="header">
			<van-nav-bar title="消息中心" @click-left="onClickLeft" fixed left-arrow>
				<template #right>
					<img class="menu" src="@/assets/images/messege/menu.png" alt="">
				</template>
			</van-nav-bar>
		</div>
		<div class="center_box animated fadeInLeft">
			<div class="new_box">
				<div class="new_item" @click="selectNew(index)" v-for="(item,index) in newList" :key="index">
					<span :class="{select:active == index}" class="text">{{item.name}}</span>
					<img v-if="item.num" class="new_icon" src="@/assets/images/messege/new.png" alt="">
				</div>
			</div>
			<div class="new_list" v-if="newListItem[active].length!==0">
				<div class="new_list_item" v-for="(item,index) in newListItem[active]" :key="index" @click="goDetail">
					<div class="news_l">
						<div class="badge" v-if="item.isNew"></div>
						<img class="item_icon" src="@/assets/images/messege/icon.png" alt="">
					</div>
					<div class="news_r">
						<div class="title_box">
							<span class="title">【{{item.title}}】</span>
							<span class="time">{{item.time}}</span>
						</div>
						<span class="text">{{item.text}}</span>
					</div>
				</div>
				
			</div>
			<div v-else class="none">
				<img src="@/assets/images/messege/none.png" alt="">
				<span>无消息记录</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
const active = ref(0)
const newList = ref( [{
						name: '通知',
						num: true
					},
					{
						name: '活动',
						num: true
					},
					{
						name: '公共',
						num: true
					},
					{
						name: '充提',
						num: false
					}
				])
const newListItem = ref([
					[
						{
							title:'热门赛事快报',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:1,
							isNew:false
						},
						{
							title:'热门赛事快报',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:1,
							isNew:true
						},
						{
							title:'热门赛事快报',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:1,
							isNew:true
						},
						{
							title:'热门活动',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:2,
							isNew:true
						}
					],
					[
						{
							title:'热门活动',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:2,
							isNew:true
						}
					],
					[
						{
							title:'热门赛事快报',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:1,
							isNew:true
						},
						{
							title:'热门赛事快报',
							text:'温馨提示：热门赛事旗舰充提渠道繁忙，...',
							time:'2022-11-13',
							type:1,
							isNew:true
						}
					],
					[]
				])
const selectNew = (index:number) =>{
	active.value = index
}
const onClickLeft = () =>{
	router.go(-1)
}
const goDetail = () =>{
	router.push({name:'messageDetail'})
}

</script>

<style scoped lang="scss">
	::v-deep .van-ellipsis {
		color: #454558;
		font-size: 17px;
	}
	
	::v-deep .van-nav-bar .van-icon {
		color: #454558;
	}
	.menu {
		width: 18px;
		height: 14px;
	}
	.center_box {
		padding-top: 46px;

		.new_box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30px 0 30px;
			border-top: 2px solid #e9e9e9;

			.new_item {
				position: relative;

				.text {
					font-size: 16px;
					color: #A8ABAD;
				}

				.new_icon {
					position: absolute;
					width: 15px;
					height: 15px;
					top: 8px;
					right: -16px;
				}

				.select {
					color: #1B1B1B;
				}
			}
		}

		.new_list {
			padding: 0 14px;
			.new_list_item {
				margin-top: 35px;
				display: flex;
				align-items: center;
				width: 345px;
				.news_l{
					position: relative;
					.badge{
						position: absolute;
						top:-5px;
						right: -8px;
						width: 8px;
						height: 8px;
						background-color: #EE0000;
						border-radius: 50%;
					}
					.item_icon {
						width: 32px;
						height: 32px;
					}
				}
				.news_r{
					display: flex;
					flex-direction: column;
					margin-left: 16px;
					width: 100%;
					.title_box{
						display: flex;
						align-items: center;
						justify-content: space-between;
						.title{
							font-size: 15px;
							color: #1B1B1B;
						}
						.time{
							font-size: 11px;
							color: #A8ABAD;
						}
					}
					
					.text{
						font-size: 14px;
						color: #A8ABAD;
						margin-left: 5px;
						width: 250px;
						//超出一行省略号
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

					}
				}
			}
		}
		.none{
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 180px;
			span{
				font-size: 15px;
				color: #616171;
			}
			img{
				width: 230px;
				height: 192px;
			}
		}
	}
</style>
