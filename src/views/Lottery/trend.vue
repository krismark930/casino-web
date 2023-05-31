<template>
	<van-dropdown-menu class="header-fixed">
		<van-dropdown-item v-model="sportValue" :options="gameList" />
	</van-dropdown-menu>
	<div style="margin-top: 36px; margin-bottom: 42px;">
		<el-table v-if="sportValue == 1" v-loading="loading" :data="birthHistoryList" stripe style="width: 100%;">
			<el-table-column prop="version" width="100">
				<template #default="scope">
					<Font color="red">{{ scope.row.version }}期</Font>
				</template>
			</el-table-column>
			<el-table-column prop="result">
				<template #default="scope">
					<div class="w-full flex justify-center px-1">
						<div v-for="(item, index) in scope.row.result" :key="index">
							<div class="flex justify-center items-center">
								<div class="relative">
									<img v-if="redColor.includes(item)" src="@/assets/images/fastthree/red.png"
										style="width: 40px;" />
									<img v-if="blueColor.includes(item)" src="@/assets/images/fastthree/blue.png"
										style="width: 40px;" />
									<img v-if="greenColor.includes(item)" src="@/assets/images/fastthree/green.png"
										style="width: 40px;" />
									<div class="absolute text-black font-bold number-position text-[18px]">
										{{ item }}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-full flex justify-around px-1">
						<div v-for="(item, index) in scope.row.animal" :key="index">
							<div class="flex justify-center items-center">
								<div class="text-black font-bold text-[16px]">
									{{ item }}
								</div>
							</div>
						</div>
					</div>
				</template>
			</el-table-column>
		</el-table>
		<el-table v-else-if="sportValue == 18" v-loading="loading" :data="macaoBirthHistoryList" stripe style="width: 100%;">
			<el-table-column prop="version" width="100">
				<template #default="scope">
					<Font color="red">{{ scope.row.version }}期</Font>
				</template>
			</el-table-column>
			<el-table-column prop="result">
				<template #default="scope">
					<div class="w-full flex justify-center px-1">
						<div v-for="(item, index) in scope.row.result" :key="index">
							<div class="flex justify-center items-center">
								<div class="relative">
									<img v-if="redColor.includes(item)" src="@/assets/images/fastthree/red.png"
										style="width: 40px;" />
									<img v-if="blueColor.includes(item)" src="@/assets/images/fastthree/blue.png"
										style="width: 40px;" />
									<img v-if="greenColor.includes(item)" src="@/assets/images/fastthree/green.png"
										style="width: 40px;" />
									<div class="absolute text-black font-bold number-position text-[18px]">
										{{ item }}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-full flex justify-around px-1">
						<div v-for="(item, index) in scope.row.animal" :key="index">
							<div class="flex justify-center items-center">
								<div class="text-black font-bold text-[16px]">
									{{ item }}
								</div>
							</div>
						</div>
					</div>
				</template>
			</el-table-column>
		</el-table>
		<el-table v-else v-loading="loading" :data="birthHistoryList1" stripe style="width: 100%;">
			<el-table-column prop="version" width="100">
				<template #default="scope">
					<Font color="red">{{ scope.row.qishu }}期</Font>
				</template>
			</el-table-column>
	        <el-table-column v-if="b5Array.includes(sportValue)">
	          <template #default="scope">
	            <div class="w-full flex justify-around px-1">
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_1 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_2 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_3 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_4 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_5 }}
	                  </div>
	                </div>
	              </div>
	            </div>
	          </template>
	        </el-table-column>
	        <el-table-column v-if="b3Array.includes(sportValue)">
	          <template #default="scope">
	            <div class="w-full flex justify-around px-1">
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_1 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_2 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img src="@/assets/images/fastthree/icon-circle-active-red.png" style="width: 48px;" />
	                  <div class="absolute text-black font-bold number-position-1" style="font-weight: 900; font-size: 18px">
	                    {{ scope.row.ball_3 }}
	                  </div>
	                </div>
	              </div>
	            </div>
	          </template>
	        </el-table-column>
	        <el-table-column v-if="otherArray1.includes(sportValue)">
	          <template #default="scope">
	            <div class="w-full flex justify-around px-1">
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_1))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_1))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_1 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_2))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_2))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_2 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_3))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_3))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_3 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_4))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_4))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_4 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_5))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_5))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_5 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_6))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_6))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_6 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_7))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_7))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_7 }}
	                  </div>
	                </div>
	              </div>
	              <div class="relative">
	                <div class="flex justify-center items-center">
	                  <img v-if="redColor1.includes(Number(scope.row.ball_8))" src="@/assets/images/fastthree/red.png"
	                    class="w-[35px]" />
	                  <img v-if="blueColor1.includes(Number(scope.row.ball_8))" src="@/assets/images/fastthree/blue.png"
	                    class="w-[35px]" />
	                  <div class="absolute text-black font-bold number-position text-[16px]">
	                    {{ scope.row.ball_8 }}
	                  </div>
	                </div>
	              </div>
	            </div>
	          </template>
	        </el-table-column>
		    <el-table-column v-if="otherArray2.includes(sportValue)">
		      <template #default="scope">
		        <div class="w-full flex justify-around px-1">
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_1) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_1 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_2) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_2 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_3) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_3 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_4) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_4 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_5) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_5 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_6) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_6 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_7) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_7 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_8) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_8 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_9) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_9 }}
		          </div>
		          <div :style="{ 'background-color': colorArray[Number(scope.row.ball_10) - 1] }"
		            class="text-white rounded-sm w-[18px] h-[20px] flex items-center justify-center">
		            {{ scope.row.ball_10 }}
		          </div>
		        </div>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { ElLoading } from 'element-plus'
import { katanStore } from "@/stores/katan";
import { macaoKatanStore } from "@/stores/macao_katan";
import { lotteryResultStore } from "@/stores/lottery_result";
import { storeToRefs } from 'pinia';
const { dispatchSixMarkBirthHistory } = katanStore();
const { dispatchMacaoSixMarkBirthHistory } = macaoKatanStore();
const { dispatchBirthHistory } = lotteryResultStore();
const redColor = ref([1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46]);
const blueColor = ref([3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48])
const greenColor = ref([5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49]);

const sportValue = ref(1);
const gType1 = ref("cq");
const gType2 = ref("ffc5");
const gType3 = ref("azxy5");
const gType4 = ref("jx");
const gType5 = ref("tj");
const gType6 = ref("d3");
const gType7 = ref("p3");
const gType8 = ref("t3");
const gType9 = ref("azxy10");
const gType10 = ref("gd11");
const gType11 = ref("gdsf");
const gType12 = ref("gxsf");
const gType13 = ref("cqsf");
const gType14 = ref("tjsf");
const gType15 = ref("bjpk");
const gType16 = ref("xyft");

const b5Array = ref([2, 3, 4, 9, 8, 12, 15]);
const b3Array = ref([14, 16, 17]);
const otherArray1 = ref([13, 11, 10]);
const otherArray2 = ref([5, 6, 7]);

const blueColor1 = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
const redColor1 = ref([19, 20]);

const colorArray = ref(['#f8f02b', '#00a5ff', '#535351', '#d15000', '#2da695', '#1600ca', '#cecdd2', '#f10104', '#af0600', '#166410']);

const gameList = ref([
	{
		text: '香港六合彩',
		value: 1
	},
	{
		text: '澳门六合彩',
		value: 18
	},
	{
		text: '重庆时时彩',
		value: 2
	},
	{
		text: '河内五分彩',
		value: 3
	},
	{
		text: '澳洲幸运5',
		value: 4
	},
	{
		text: '澳洲幸运10',
		value: 5
	},
	{
		text: '幸运飞艇',
		value: 6
	},
	{
		text: '北京PK拾',
		value: 7
	},
	{
		text: '天津时时彩',
		value: 8
	},
	{
		text: '新疆时时彩',
		value: 9
	},
	{
		text: '重庆十分彩',
		value: 10
	},
	{
		text: '广东十分彩',
		value: 11
	},
	{
		text: '广西十分彩',
		value: 12
	},
	{
		text: '天津十分彩',
		value: 13
	},
	{
		text: '上海时时乐',
		value: 14
	},
	{
		text: '广东11选5',
		value: 15
	},
	{
		text: '福彩3D',
		value: 16
	},
	{
		text: '排列3',
		value: 17
	},
]);
const loading = ref(false);
const birthHistoryList = computed(() => {
	const { getBirthHistoryList } = storeToRefs(katanStore());
	return getBirthHistoryList.value;
})
const macaoBirthHistoryList = computed(() => {
	const { getMacaoBirthHistoryList } = storeToRefs(macaoKatanStore());
	return getMacaoBirthHistoryList.value;
})
const birthHistoryList1 = computed(() => {
  const { getBirthHistoryList } = storeToRefs(lotteryResultStore());
  return getBirthHistoryList.value;
});
watch(sportValue, async () => {
	const loading = ElLoading.service({
		lock: true,
		text: '加载中...',
		background: 'rgba(0, 0, 0, 0.7)',
	})
	switch (sportValue.value) {
		case 1:
			await dispatchSixMarkBirthHistory({});
			break;
		case 18:
			await dispatchMacaoSixMarkBirthHistory({});
			break;
		case 2:
			await dispatchBirthHistory({ g_type: gType1.value, type: "b5" });
			break;
		case 3:
			await dispatchBirthHistory({ g_type: gType2.value, type: "b5" });
			break;
		case 4:
			await dispatchBirthHistory({ g_type: gType3.value, type: "b5" });
			break;
		case 5:
			await dispatchBirthHistory({ g_type: gType9.value, type: "other" });
			break;
		case 6:
			await dispatchBirthHistory({ g_type: gType16.value, type: "other" });
			break;
		case 7:
			await dispatchBirthHistory({ g_type: gType15.value, type: "other" });
			break;
		case 8:
			await dispatchBirthHistory({ g_type: gType5.value, type: "b5" });
			break;
		case 9:
			await dispatchBirthHistory({ g_type: gType4.value, type: "b5" });
			break;
		case 10:
			await dispatchBirthHistory({ g_type: gType13.value, type: "other" });
			break;
		case 11:
			await dispatchBirthHistory({ g_type: gType11.value, type: "other" });
			break;
		case 12:
			await dispatchBirthHistory({ g_type: gType12.value, type: "other" });
			break;
		case 13:
			await dispatchBirthHistory({ g_type: gType14.value, type: "other" });
			break;
		case 14:
			await dispatchBirthHistory({ g_type: gType8.value, type: "b3" });
			break;
		case 15:
			await dispatchBirthHistory({ g_type: gType10.value, type: "other" });
			break;
		case 16:
			await dispatchBirthHistory({ g_type: gType6.value, type: "b3" });
			break;
		case 17:
			await dispatchBirthHistory({ g_type: gType7.value, type: "b3" });
			break;
	}
	loading.close();
}, {deep: true});
onMounted(async () => {
	const loading = ElLoading.service({
		lock: true,
		text: '加载中...',
		background: 'rgba(0, 0, 0, 0.7)',
	})
	await dispatchSixMarkBirthHistory({});
	loading.close();
})
</script>
<style scoped>
.header-fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2000;
}

.number-position {
	word-break: normal;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.number-position-1 {
	word-break: normal;
	top: 48%;
	left: 44%;
	transform: translate(-50%, -50%);
}
</style>