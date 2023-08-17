<!-- 体育 -->
<template>
	<div class="stadium_box">
		<router-view />
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.stadium_box {
	background-color: #F3FAFF;

}

.stadium_bottom {
	min-height: 570px;
	padding-bottom: 100px;
}

.stadium_box::-webkit-scrollbar {
	display: none;
}
</style>
