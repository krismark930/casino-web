<template>
  <div class="animated fadeInLeft" v-if="scheduleItem != null">
    <van-nav-bar class="border-b-2 border-gray-300" fixed @click-left="onClickLeft">
      <template #left>
        <img class="w-1" referrerpolicy="no-referrer" src="@/assets/images/my/arrow-left.png" />
      </template>
      <template #title>
        <span class="pt-[1px]">彩票</span>
      </template>
      <template #right>
        <div class="text-[14px] p-[4px] bg-gray-100 rounded-full flex items-center h-[20px]">
          <img src="@/assets/images/fastthree/icon-yarn.png" class="w-[20px]" />
          {{ user.Money }}
        </div>
        <van-icon style="margin-left: 10px;" size="30" name="wap-nav" @click="showRightMenu" />
      </template>
    </van-nav-bar>
    <div class="pt-[47px] pb-[60px] h-screen bg-gray-100 text-[15px]">
      <div class="relative text-white">
        <div class="px-2 pt-[15px] relative z-10">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <!-- <img src="@/assets/images/fastthree/arrow-left.png" class="w-[10px] h-[15px] mr-1" /> -->
              <p>{{ title }}</p>
            </div>
            <div>{{ scheduleItem.qishu }}期</div>
            <div class="flex">
              <p>投注中</p>
              <seven-segment value="8" :rounded="false" :segment-width="25" :segment-height="5" on-color="#ffffff"
                off-color="transparent" />
              <van-count-down :time="time" @finish="onFinish" @change="onChangeTime">
                <template #default="timeData">
                  <div
                    class="bg-[#d0dfed] border-2 border-white rounded-sm px-[2px] text-[12px] font-bold ml-1 text-black py-[3px]">
                    {{
                      (timeData.days * 24 + timeData.hours).toString().length === 1
                      ? "0" + (timeData.hours + timeData.days * 24)
                      : timeData.hours + timeData.days * 24
                    }}
                    :
                    {{
                      timeData.minutes.toString().length === 1
                      ? "0" + timeData.minutes
                      : timeData.minutes
                    }}
                    :
                    {{
                      timeData.seconds.toString().length === 1
                      ? "0" + timeData.seconds
                      : timeData.seconds
                    }}
                  </div>
                </template>
              </van-count-down>
            </div>
          </div>
          <div class="flex justify-between items-center mt-[10px] px-1 h-[40px]">
            <div class="text-[10px]" v-if="lotteryResult != null">{{ lotteryResult.qishu }}期</div>
            <div class="flex justify-around" style="width: 70%; padding: 0px 2px;">
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_1)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_1)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_1 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_2)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_2)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_2 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_3)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_3)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_3 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_4)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_4)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_4 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_5)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_5)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_5 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_6)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_6)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_6 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_7)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_7)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_7 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(lotteryResult.ball_8)" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(lotteryResult.ball_8)" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ lotteryResult.ball_8 }}
                  </div>
                </div>
              </div>
            </div>
            <img src="@/assets/images/fastthree/icon-down.png" class="w-[9px] h-[7px]" />
          </div>
          <div class="mx-2 absolute bottom-[3px] left-0" @click="showBirthHistory">
            <img src="@/assets/images/fastthree/bg-drop.png" alt="bg" class="w-screen" />
          </div>
        </div>
        <div class="absolute top-0">
          <img src="@/assets/images/fastthree/lottery-bg.png" class="w-screen" />
        </div>
      </div>
      <div v-if="is_open" class="overflow-y-auto" style="height: calc(100vh - 200px)">
        <OneWordPosition :lotteryOddsList="lotteryOddsList" :initialize="initialize" :disabled="disabled"
          @submitItem1="submitItem1" />
        <DragonTigerSum :lotteryOddsList="lotteryOddsList" :initialize="initialize" :disabled="disabled"
          @submitItem2="submitItem2" />
      </div>
      <div v-else class="text-center text-[24px]">{{ closed_reason }}</div>
      <div class="rounded-t-md bg-white absolute bottom-0 right-0 w-full">
        <div class="relative rounded-t-md">
          <div class="flex justify-between text-[12px] px-2 mb-1 mt-1">
            <div class="w-16">
              <p class="text-end text-red-500">
                详情: {{ selectedCount }}注，{{ selectedBetAmount }}元
              </p>
              <p class="text-end">
                可赢金额：<span class="text-green-500">{{ winAmount.toFixed(2) }}元</span>
              </p>
            </div>
            <el-button type="primary" @click="showPopUp">立即投注</el-button>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model:show="historyShow" position="bottom" :style="{ height: 'calc(100% - 150px)' }"
      style="z-index: 5000 !important">
      <el-table v-loading="loading" :data="birthHistoryList" stripe style="width: 100%">
        <el-table-column prop="version" width="100">
          <template #default="scope">
            <Font color="red">{{ scope.row.qishu }}期</Font>
          </template>
        </el-table-column>
        <el-table-column prop="result">
          <template #default="scope">
            <div class="w-full flex justify-around px-1">
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_1))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_1))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_1 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_2))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_2))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_2 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_3))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_3))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_3 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_4))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_4))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_4 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_5))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_5))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_5 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_6))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_6))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_6 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_7))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_7))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_7 }}
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="flex justify-center items-center">
                  <img v-if="redColor.includes(Number(scope.row.ball_8))" src="@/assets/images/fastthree/red.png"
                    class="w-[35px]" />
                  <img v-if="blueColor.includes(Number(scope.row.ball_8))" src="@/assets/images/fastthree/blue.png"
                    class="w-[35px]" />
                  <div class="absolute text-black font-bold number-position text-[16px]">
                    {{ scope.row.ball_8 }}
                  </div>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </van-popup>
    <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '30%' }">
      <div>
        <el-table v-loading="loading" :data="selectedItemList" stripe style="width: 100%">
          <el-table-column label="内容" width="120">
            <template #default="scope">
              <Font color="red">{{ scope.row.quick_type }} @ [{{ scope.row.number }}]</Font>
            </template>
          </el-table-column>
          <el-table-column prop="odds" label="赔率"></el-table-column>
          <el-table-column prop="betAmount" label="下注金额"></el-table-column>
          <!-- <el-table-column prop="winableAmount" label="可赢金额"></el-table-column> -->
        </el-table>
      </div>
      <div style="text-align: center">
        <el-button type="danger" @click="cancelBet">放弃</el-button>
        <el-button type="primary" @click="saveLotteryBet">确定</el-button>
      </div>
    </van-popup>
    <van-popup v-model:show="showRight" position="right" :style="{ width: '70%', height: '100%' }">
      <div class="right-menu">
        <div class="head-bg">
          <img src="@/assets/images/stadiums/user.png" class="user-info-img" alt="">
          <p class="user-name">{{ user.UserName }}</p>
          <p class="user-money">余额：<span>{{ user.Money }}</span>元</p>
        </div>
        <van-cell-group>
          <van-cell title="游戏规则" icon="column" size="large" is-link @click="showDescriptionDialog" />
        </van-cell-group>
      </div>
    </van-popup>
    <van-dialog v-model:show="descriptionShow" :title="descriptionTitle">
      <div class="p-2 h-[400px] overflow-y-scroll">
        <p>每期天津快乐十分开奖球数共八粒。每粒球除了总和玩法，其它都有单独的投注页面。天津快乐十分每天开42期，每期间隔20分钟。投注时间为18分钟，等待开奖时间为2分钟，北京时间（GMT+8）每天白天从上午09：00开到晚上23：00。</p>
        <div class="font-bold text-red-500"> 1、第一球 ~ 第八球</div>
        <div class="text-blue-500">第一球~第八球：</div>
        <p>第一球、第二球、第三球、第四球、第五球、第六球、第七球、第八球：指下注的每一球特码与开出之号码其开奖顺序及开奖号码相同，视为中奖，如第一球开出号码 8，下注第一球为 8 者视为中奖，其余情形视为不中奖。</p>
        <div class="text-blue-500">两面：</div>
        <p>指单、双；大、小、尾大、尾小。</p>
        <p>单、双：号码为双数叫双，如8、16；号码为单数叫单，如19、5。</p>
        <p>大、小：开出之号码大于或等于11为大，小于或等于10为小。</p>
        <p>尾大、尾小：开出之尾数大于或等于5为尾大，小于或等于4为尾小。</p>
        <p>每一个号码为一投注组合，假如投注号码为开奖号码并在所投的球位置，视为中奖，其余情形视为不中奖。</p>
        <div class="text-blue-500">中发白：</div>
        <p>中：开出之号码为01、02、03、04、05、06、07</p>
        <p>发：开出之号码为08、09、10、11、12、13、14</p>
        <p>白：开出之号码为15、16、17、18、19、20</p>
        <div class="text-blue-500">方位：</div>
        <p>东：开出之号码为01、05、09、13、17</p>
        <p>南：开出之号码为02、06、10、14、18</p>
        <p>西：开出之号码为03、07、11、15、19</p>
        <p>北：开出之号码为04、08、12、16、20</p>


        <div class="font-bold text-red-500">2、总和</div>
        <div class="text-blue-500">总和单双：</div>
        <p>所有8个开奖号码的数字总和值是单数为总和单，如数字总和值是31、51；所有8个开奖号码的数字总和值是双数为总和双，如数字总和是42、80；假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。</p>
        <div class="text-blue-500">总和大小：</div>
        <p>所有8个开奖号码的数字总和值85到132为总大；所有8个开奖号码的数字总和值36到83为总分小；所有8个开奖号码的数字总和值为84打和；如开奖号码为01、20、02、08、17、09、11，数字总和是68，则总分小。假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖，打和不计算结果。</p>
        <div class="text-blue-500">总尾大小：</div>
        <p>所有8个开奖号码的数字总和数值的个位数大于或等于5为总尾大，小于或等于4为总尾小；假如投注组合符合中奖结果，视为中奖，其余情形视为不中奖。</p>


        <div class="font-bold text-red-500">3、龙虎</div>
        <div class="text-blue-500">龙：</div>
        <p>开出之号码第一球的中奖号码大于第八球的中奖号码。如 第一球开出14 第八球开出09；第一球开出17 第八球开出08；第一球开出05 第八球开出01...中奖为龙。</p>
        <div class="text-blue-500">虎：</div>
        <p>开出之号码第一球的中奖号码小于第八球的中奖号码。如 第一球开出14 第八球开出16；第一球开出13 第八球开出18；第一球开出05 第八球开出08...中奖为虎。</p>
      </div>
    </van-dialog>
    <van-dialog v-model:show="alertShow" title="提示">
      <div class="text-center">当前彩票已经封盘，请稍后再进行下注！</div>
      <div class="text-center">{{title}}开盘时间为：09:00 - 22:50</div>
    </van-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watchEffect, watch, toRefs } from "vue";
import OneWordPosition from "./tjsf/OneWordPosition.vue";
import DragonTigerSum from "./tjsf/DragonTigerSum.vue";
import { ElLoading } from "element-plus";
import router from "@/router";
import { showToast } from "vant";
import { useAuthStore } from "@/stores/auth";
import { lotteryScheduleStore } from "@/stores/lottery_schedule";
import { lotteryResultStore } from "@/stores/lottery_result";
import { lotteryOddsStore } from "@/stores/lottery_odds";
import { lotterySaveStore } from "@/stores/lottery_save";
import { lotteryConfigStore } from "@/stores/lottery_config";
import { storeToRefs } from "pinia";
import moment from "moment-timezone";
const { dispatchUserMoney } = useAuthStore();
const { dispatchLotteryStatus } = lotteryScheduleStore();
const { dispatchLotterySchedule } = lotteryScheduleStore();
const { dispatchBeforeLotteryResult } = lotteryResultStore();
const { dispatchBirthHistory } = lotteryResultStore();
const { dispatchLotteryOdds } = lotteryOddsStore();
const { dispatchSaveLottery } = lotterySaveStore();
const { dispatchLotteryUserConfig } = lotteryConfigStore();

const blueColor = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
const redColor = ref([19, 20]);
const alertShow = ref(false);
const title = ref("天津十分彩");
const g_type = ref("tjsf");
const closed_reason = ref("目前没有开盘!");
const descriptionTitle = ref("天津快乐十分游戏规则");
const time = ref(0);
const historyShow = ref(false);
const descriptionShow = ref(false);
const showRight = ref(false);
const initialize = ref(false);
const disabled = ref(false);

const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const winAmount = ref(0);
const selectedItemList = ref([]);

const selectedCount1 = ref(0);
const selectedBetAmount1 = ref(0);
const winAmount1 = ref(0);
const selectedItemList1 = ref([]);


const selectedCount2 = ref(0);
const selectedBetAmount2 = ref(0);
const winAmount2 = ref(0);
const selectedItemList2 = ref([]);


const selectedCount3 = ref(0);
const selectedBetAmount3 = ref(0);
const winAmount3 = ref(0);
const selectedItemList3 = ref([]);


const selectedCount4 = ref(0);
const selectedBetAmount4 = ref(0);
const winAmount4 = ref(0);
const selectedItemList4 = ref([]);

const is_open = ref(true);
const loading = ref(false);
const showBottom = ref(false);
const showRightMenu = () => {
  showRight.value = true;
}
const showDescriptionDialog = () => {
  showRight.value = false;
  descriptionShow.value = true;
}
const onClickLeft = () => {
  router.push({ name: 'lottery' })
  // router.go(-1);
};
const timerId = ref(0);
const runCount = ref(0);
const onFinish = async () => {
  if (scheduleItem.value.is_open) {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    disabled.value = false;
    await dispatchLotteryStatus({});
    await dispatchBirthHistory({ g_type: g_type.value, type: "other" });
    await dispatchLotterySchedule({ g_type: g_type.value, type: "other" });
    await dispatchBeforeLotteryResult({ g_type: g_type.value, type: "other" });
    loading.close();
  }
  timerId.value = setInterval(async () => {
    runCount.value++;
    await dispatchBeforeLotteryResult({ g_type: g_type.value, type: "other" });
    if(runCount.value > 5) {
      clearInterval(timerId.value);
      timerId.value = null;
      runCount.value = 0;
    }
  }, 30000)
};
const cancelBet = () => {
  showBottom.value = false;
  selectedItemList.value = [];
  selectedCount.value = 0;
  selectedBetAmount.value = 0;
  winAmount.value = 0;
  selectedItemList1.value = [];
  selectedCount1.value = 0;
  selectedBetAmount1.value = 0;
  winAmount1.value = 0;
  selectedItemList2.value = [];
  selectedCount2.value = 0;
  selectedBetAmount2.value = 0;
  winAmount2.value = 0;
  selectedItemList3.value = [];
  selectedCount3.value = 0;
  selectedBetAmount3.value = 0;
  winAmount3.value = 0;
  selectedItemList4.value = [];
  selectedCount4.value = 0;
  selectedBetAmount4.value = 0;
  winAmount4.value = 0;
  initialize.value = !initialize.value
};
const saveLotteryBet = async () => {
  if (user.value.id == undefined) {
    showToast("你必须先登录。");
    router.push({ name: "login" });
    return;
  }
  if (selectedBetAmount.value > user.value.Money) {
    showToast("下注金额不可大于信用额度。");
  } else {
    loading.value = true;
    let data = {
      type: "other",
      g_type: g_type.value,
      qishu: scheduleItem.value.qishu,
      winAmount: winAmount.value,
      selectedBetAmount: selectedBetAmount.value,
      selectedItemList: selectedItemList.value
    };
    await dispatchSaveLottery(data, token.value);
    if (success.value) {
      dispatchUserMoney(selectedBetAmount.value);
      showToast("操作成功。");
      cancelBet();
    } else {
      showToast(errMessage.value);
    }
    loading.value = false;
  }
};
const lotteryOddsList = computed(() => {
  const { getLotteryOddsList } = storeToRefs(lotteryOddsStore());
  return getLotteryOddsList.value;
})
const birthHistoryList = computed(() => {
  const { getBirthHistoryList } = storeToRefs(lotteryResultStore());
  return getBirthHistoryList.value;
});
const lotteryStatus = computed(() => {
  const { getLotteryStatus } = storeToRefs(lotteryScheduleStore());
  if (Number(getLotteryStatus.value.tjsf.close) === 1) {
    is_open.value = false;
    closed_reason.value = getLotteryStatus.value.tjsf.des;
  }
  return getLotteryStatus.value;
});
const lotteryResult = computed(() => {
  const { getBeforeLotteryResult } = storeToRefs(lotteryResultStore());
  return getBeforeLotteryResult.value;
})
const scheduleItem = computed(() => {
  const { getScheduleItem } = storeToRefs(lotteryScheduleStore());
  if (getScheduleItem.value == null) {
    return;
  }
  // let current_date = moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD");
  // let end = moment(current_date + " " + getScheduleItem.value.kaijiang_time);
  // const now = moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss");
  // var duration = moment.duration(end.diff(now));
  // time.value = Number(duration.valueOf()) + 60000;
  time.value = getScheduleItem.value.diff_time;
  if (!getScheduleItem.value.is_open || time.value <= 0) {
    alertShow.value = true;
    disabled.value = true;
  }
  return getScheduleItem.value;
})
const user = computed(() => {
  const { getUser } = storeToRefs(useAuthStore());
  return getUser.value;
});
const token = computed(() => {
  const { getToken } = storeToRefs(useAuthStore());
  return getToken.value;
});
const success = computed(() => {
  const { getSuccess } = storeToRefs(lotterySaveStore());
  return getSuccess.value;
});
const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(lotterySaveStore());
  return getErrMessage.value;
});
const lotteryUserConfigItem = computed(() => {
  const { getLotteryUserConfigItem } = storeToRefs(lotteryConfigStore());
  return getLotteryUserConfigItem.value;
})

const onChangeTime = (time: any) => {
  if (time.total <= 120000) {
    if (!disabled.value) {
      showToast("已封盘")    
    }
    disabled.value = true;
  }
}

const submitItem1 = (data: any) => {
  selectedCount1.value = data.selectedCount;
  selectedBetAmount1.value = data.selectedBetAmount;
  winAmount1.value = data.winAmount;
  selectedItemList1.value = data.selectedItemList;

  selectedCount.value = selectedCount1.value + selectedCount2.value + selectedCount3.value + selectedCount4.value;
  selectedBetAmount.value = selectedBetAmount1.value + selectedBetAmount2.value + selectedBetAmount3.value + selectedBetAmount4.value;
  winAmount.value = winAmount1.value + winAmount2.value + winAmount3.value + winAmount4.value;
  selectedItemList.value = [...selectedItemList1.value, ...selectedItemList2.value, ...selectedItemList3.value, ...selectedItemList4.value];
};

const submitItem2 = (data: any) => {
  selectedCount2.value = data.selectedCount;
  selectedBetAmount2.value = data.selectedBetAmount;
  winAmount2.value = data.winAmount;
  selectedItemList2.value = data.selectedItemList;

  selectedCount.value = selectedCount1.value + selectedCount2.value + selectedCount3.value + selectedCount4.value;
  selectedBetAmount.value = selectedBetAmount1.value + selectedBetAmount2.value + selectedBetAmount3.value + selectedBetAmount4.value;
  winAmount.value = winAmount1.value + winAmount2.value + winAmount3.value + winAmount4.value;
  selectedItemList.value = [...selectedItemList1.value, ...selectedItemList2.value, ...selectedItemList3.value, ...selectedItemList4.value];
};

const submitItem3 = (data: any) => {
  selectedCount3.value = data.selectedCount;
  selectedBetAmount3.value = data.selectedBetAmount;
  winAmount3.value = data.winAmount;
  selectedItemList3.value = data.selectedItemList;

  selectedCount.value = selectedCount1.value + selectedCount2.value + selectedCount3.value + selectedCount4.value;
  selectedBetAmount.value = selectedBetAmount1.value + selectedBetAmount2.value + selectedBetAmount3.value + selectedBetAmount4.value;
  winAmount.value = winAmount1.value + winAmount2.value + winAmount3.value + winAmount4.value;
  selectedItemList.value = [...selectedItemList1.value, ...selectedItemList2.value, ...selectedItemList3.value, ...selectedItemList4.value];
};

const submitItem4 = (data: any) => {
  selectedCount4.value = data.selectedCount;
  selectedBetAmount4.value = data.selectedBetAmount;
  winAmount4.value = data.winAmount;
  selectedItemList4.value = data.selectedItemList;

  selectedCount.value = selectedCount1.value + selectedCount2.value + selectedCount3.value + selectedCount4.value;
  selectedBetAmount.value = selectedBetAmount1.value + selectedBetAmount2.value + selectedBetAmount3.value + selectedBetAmount4.value;
  winAmount.value = winAmount1.value + winAmount2.value + winAmount3.value + winAmount4.value;
  selectedItemList.value = [...selectedItemList1.value, ...selectedItemList2.value, ...selectedItemList3.value, ...selectedItemList4.value];
};
const showPopUp = () => {
  if (selectedItemList.value.length == 0) {
    showToast("该彩票注单最高金额：0。00");
  } else {
    if (g_type.value == "tjsf" && lotteryUserConfigItem.value.tjsf_max_bet == "0.00") {
      showToast("该彩票注单最高金额：0。00");
      return;
    }

    if (g_type.value == "tjsf" && selectedBetAmount.value > lotteryUserConfigItem.value.tjsf_max_bet) {
      showToast("该彩票单注最高金额：" + lotteryUserConfigItem.value.tjsf_max_bet)
      return;
    }
    if (g_type.value == "tjsf" && selectedBetAmount.value < lotteryUserConfigItem.value.tjsf_lower_bet) {
      showToast("该彩票单注最低金额：" + lotteryUserConfigItem.value.tjsf_lower_bet)
      return;
    }
    showBottom.value = true;
  }
};
const showBirthHistory = () => {
  historyShow.value = !historyShow.value;
};
onMounted(async () => {
  if (user.value.id == undefined) {
    showToast("你必须先登录。");
    router.push({ name: "login" });
    return;
  }
  alertShow.value = false;
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchLotteryStatus({});
  await dispatchBirthHistory({ g_type: g_type.value, type: "other" });
  await dispatchBeforeLotteryResult({ g_type: g_type.value, type: "other" });
  await dispatchLotteryOdds({ g_type: g_type.value, type: "other" });
  await dispatchLotterySchedule({ g_type: g_type.value, type: "other" });
  await dispatchLotteryUserConfig({}, token.value);
  console.log(lotteryStatus.value);
  loading.close();
});
onUnmounted(() => {
  clearInterval(timerId.value);
})
</script>

<style scoped>
.van-popup .van-dialog__header {
  background: #1989fa;
  color: white;
  padding-top: var(--van-dialog-header-padding-top);
  font-weight: var(--van-dialog-header-font-weight);
  line-height: var(--van-dialog-header-line-height);
  text-align: center;
}

.right-menu .head-bg {
  width: 100%;
  height: 160px;
  overflow: hidden;
  background-size: 100% 100% !important;
  background: url("@/assets/images/account/drawer-head-green.png") no-repeat;
}

.right-menu .head-bg .user-info-img {
  width: 80px;
  height: 80px;
  margin: 20px auto 0;
  border-radius: 50%;
}

.right-menu .head-bg .user-name,
.right-menu .head-bg .user-money {
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 1;
  margin-top: 6px;
}
.six-title {
  position: absolute;
  left: 164px;
  top: 8px;
}

.number-position {
  word-break: normal;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
}
</style>
