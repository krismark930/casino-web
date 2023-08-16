<template>
	<div>
		<div>
			<van-nav-bar title="规则与条款" @click-left="onClickLeft" fixed left-arrow>
			</van-nav-bar>
		</div>
		<div class="content animated fadeInLeft">
			<h4>使用条款</h4>
			<p>1. 享用本公司提供的服务是客户本人的意愿，其风险应由客户本人承
				担。参与我们服务的同时就说明客户认同本公司所提供的服务是正常、
				合理、公正、公平的。<br>
				2. 某些法律规则在贵国居住的司法管辖区, 并未明文规定在线和非在线
				博彩是否允许，客户有责任确保任何时候您的博彩行为在您所属地是
				属合法行为。</p>
			<h4>投注接受条件</h4>
			<p>1. 如果阁下的投注信息正确，阁下是唯一对此投注承担责任的人。一
				旦本司确认您的注单，该注单不得取消，撤回或更改，并且该注单会
				视为您投注的有效证据。<br>
				2. 所有在本公司客户账户交易记录显示确认信息的注单，本司都视为
				有效注单。每笔交易完成后，请查您的交易记录，若有任何问题请联
				系上线核查，否则您接受您的注单是正确的。<br>
				3. 如果客户有欺诈，合谋，非法或其它不当行为，我们有权(唯一决定
				人)取消投注单或任何彩金。<br>
				4. 我们保留权利以任何理由拒绝任何交易或注单。</p>
			<h4>免责条款</h4>
			<p>1. 对于任何情况下由于卫星收讯不良或延误，网路中断，或个人使用
				网站服务时的失误，疏忽，或对网站内容的误解所产生的任何损失，
				本公司概不负责。<br>
				2. 公司不赋予任何责任对于公司的网站，服务器或网络中断，公司的
				服务器丢失信息或信息遭受破坏，不法分子攻击网站，服务器或网络
				供应商进入网站时候由于网络供应商原因造成的网络缓慢。</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from '@/router';
const onClickLeft = () => {
	router.go(-1)
}
</script>

<style scoped lang="scss">
.content {
	background-color: #F1FAFF;
	min-height: -moz-calc(100vh - 46px);
	min-height: -webkit-calc(100vh - 46px);
	min-height: calc(100vh - 46px);
	padding: 46px 20px 0 20px;

	h4 {
		font-size: 17px;
		font-family: Adobe Heiti Std;
		font-weight: normal;
		color: #000000;
		margin-top: 23px;
	}

	p {
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
