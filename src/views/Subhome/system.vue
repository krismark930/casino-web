<template>
	<div>
		<div>
			<van-nav-bar title="系统需求" @click-left="onClickLeft" fixed left-arrow>
			</van-nav-bar>
		</div>
		<div class="content animated fadeInLeft">
			<h4>手机操作系统</h4>
			<div class="title_box">
				<span>操作系统</span>
				<span>需求</span>
			</div>
			<div>
				<span>安卓</span>
				<span>安卓7或以上</span>
			</div>
			<div>
				<span>IOS苹果</span>
				<span>IOS12或以上</span>
			</div>
			<h4>手机浏览器</h4>
			<div class="title_box">
				<span>安卓浏览器</span>
				<span>需求</span>
			</div>
			<div>
				<span>chrome</span>
				<span>版本87或以上</span>
			</div>
			<div>
				<span>QQ浏览器</span>
				<span>版本10或以上</span>
			</div>
			<div class="title_box">
				<span>IOS浏览器</span>
				<span>需求</span>
			</div>
			<div>
				<span>safari</span>
				<span>版本11或以上</span>
			</div>
			<div>
				<span>chrome</span>
				<span>版本87或以上</span>
			</div>
			<div>
				<span>QQ浏览器</span>
				<span>版本10或以上</span>
			</div>
			<h4>桌面操作系统</h4>
			<div class="title_box">
				<span>windows 浏览器</span>
				<span>需求</span>
			</div>
			<div>
				<span>chrome</span>
				<span>版本87或以上</span>
			</div>
			<div>
				<span>火狐</span>
				<span>版本60或以上</span>
			</div>
			<div class="title_box">
				<span>Mac 浏览器</span>
				<span>需求</span>
			</div>
			<div>
				<span>safari</span>
				<span>版本11或以上</span>
			</div>
			<div>
				<span>chrome</span>
				<span>版本75或以上</span>
			</div>
			<div>
				<span>火狐</span>
				<span>版本60或以上</span>
			</div>
			<h4>不支援的浏览器和操作系统</h4>
			<p>   为了提供最佳的用户体验，我们将保持所支援的浏览器或操作系统
				的清单简短。如果有漏洞或错误出现在那些我们所没有支援的浏览器或
				操作系统里面，我们保留不给予修正的权利。倘若您还是坚持使用那些
				不被我们所支援的浏览器或操作系统，您可能会遇到系统的效能问题或
				关于画面上的问题。<br><br>
				  因此，我们建议您使用我们所支援的浏览器或操作系统，以确保在
				安全性、效能和使用体验的最优化。</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import router from '@/router';
const tableList = ref([{

}])
const onClickLeft = () =>{
	router.go(-1)
}
</script>

<style scoped lang="scss">
	.content {
		background-color: #F1FAFF;
		min-height: -moz-calc(100vh - 46px);
		min-height: -webkit-calc(100vh - 46px);
		min-height: calc(100vh - 46px);
		padding: 46px 20px 60px 20px;
		font-size: 17px;

		h4 {
			margin-top: 13px;
			margin-bottom: 10px;
		}

		div {
			height: 36px;
			display: flex;
			align-items: center;
			padding-left: 9px;
			border-bottom: 1px solid #e3e3e3;

			span {
				width: 50%;
				color: #5C546A;
			}

			span:first-child {
				color: #4EABFF;
			}
		}

		.title_box {
			background-color: #4EABFF;

			span {
				color: #000000 !important;
			}
		}
		p{
			font-size: 11px;
			font-family: Adobe Heiti Std;
			font-weight: normal;
			color: #666666;
			line-height: 20px;
			margin-top: 5px;
			padding-left: 3px;
		}
	}
</style>
