<template>
  <div class="animated fadeInLeft">
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
              <p>澳门六合彩</p>
            </div>
            <div>{{ gameVersion }}期</div>
            <div class="flex">
              <p>投注中</p>
              <seven-segment value="8" :rounded="false" :segment-width="25" :segment-height="5" on-color="#ffffff"
                off-color="transparent" />
              <van-count-down :time="time as number" @finish="onFinish" format="HH:mm:ss">
                <template #default="timeData">
                  <div
                    class="bg-[#d0dfed] border-2 border-white rounded-sm px-[2px] text-[12px] font-bold ml-1 text-black py-[3px]">
                    {{
                      (timeData.days * 24 + timeData.hours).toString().length === 1 ? "0" + (timeData.hours +
                        timeData.days * 24) : timeData.hours + timeData.days * 24
                    }}
                    :
                    {{
                      timeData.minutes.toString().length === 1 ? "0" + timeData.minutes : timeData.minutes
                    }}
                    :
                    {{
                      timeData.seconds.toString().length === 1 ? "0" + timeData.seconds : timeData.seconds
                    }}
                  </div>
                </template>
              </van-count-down>
            </div>
          </div>
          <div class="flex justify-between items-center mt-[10px] px-1 h-[40px]">
            <div class="text-[10px]" v-if="orderNumber != 0">{{ orderNumber }}期</div>
            <div class="flex justify-around px-1 mb-[4px]" style="width: 80%">
              <div v-for="(item, index) in gameResult" :key="index">
                <div class="flex justify-center items-center">
                  <div class="relative">
                    <img v-if="redColor.includes(item)" src="@/assets/images/fastthree/red.png" style="width: 35px;" />
                    <img v-if="blueColor.includes(item)" src="@/assets/images/fastthree/blue.png" style="width: 35px;" />
                    <img v-if="greenColor.includes(item)" src="@/assets/images/fastthree/green.png"
                      style="width: 35px;" />
                    <div class="absolute text-black font-bold number-position" style="font-weight: 900; font-size: 18px">
                      {{ item }}
                    </div>
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
      <div>
        <div class="flex justify-start bg-white gap-1 h-[39px] px-2 shadow-md text-[12px] z-10 overflow-y-scroll">
          <button :class="[
            item.id === parentButtonActive
              ? 'bg-[#2674ff] text-white'
              : 'bg-white text-[#2674ff]',
          ]" class="text-white rounded-sm my-[5px] border-blue-300 border min-w-[60px]"
            v-for="(item, index) in parentButtonList" :key="index" @click="selectButton(item)">
            {{ item.name }}
          </button>
        </div>
        <div v-if="subButtonList.length > 0"
          class="flex justify-start gap-1 h-[39px] bg-[#e8f6ff] px-2 shadow-md text-[12px] z-10 overflow-y-scroll">
          <div class="flex" v-if="buttonShowArray.includes(class1)">
            <button :class="[
              item.id === activeTap ? 'bg-[#2674ff] text-white' : 'bg-[#e8f6ff]',
            ]" class="my-[5px] rounded-sm text-center mr-1 border-blue-300 border px-[10px] min-w-[65px]"
              v-for="(item, index) in tapItems" :key="index" @click="changeTap(item.id)">
              {{ item.name }}
            </button>
          </div>
          <div class="flex" v-if="class1 == '合肖' && animalShowArray.includes(class2)">
            <button :class="[
              item.id === activeAnimal ? 'bg-[#2674ff] text-white' : 'bg-[#e8f6ff]',
            ]" class="my-[5px] rounded-sm text-center mr-1 border-blue-300 border px-[10px] min-w-[65px]"
              v-for="(item, index) in animalItems" :key="index" @click="changeAnimal(item.id)">
              {{ item.name }}
            </button>
          </div>
          <button :class="[item.subId === subButtonActive
            ? 'bg-[#2674ff] text-white'
            : 'bg-white text-[#2674ff]',
          ]" class="text-white rounded-sm my-[5px] border-blue-300 border min-w-[60px]"
            v-for="(item, index) in subButtonList" :key="index" @click="selectSubButton(item)">
            {{ item.name }}
          </button>
        </div>
        <div v-if="class1 == '特码' && gameStatus['zfb'] != 0 && gameStatus['kitm'] != 0">
          <FastDisk v-if="activeTap === 1" :class2="class2" :class1="class1" :initialize="initialize"
            :betAmount="betAmount" @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
          <SpecialGeneralDisk v-if="activeTap === 2" :class2="class2" :class1="class1" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '正码' && gameStatus['zfb'] != 0 && gameStatus['kizm'] != 0">
          <FastDisk v-if="activeTap === 1" :class2="class2" :class1="class1" :initialize="initialize"
            :betAmount="betAmount" @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
          <MainGeneralDisk v-if="activeTap === 2" :class2="class2" :class1="class1" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '正特' && gameStatus['zfb'] != 0 && gameStatus['kizt'] != 0
          ">
          <FastDisk v-if="activeTap === 1" :class2="class2" :class1="class1" :initialize="initialize"
            :betAmount="betAmount" @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
          <MainSpecialGeneralDisk v-if="activeTap === 2" :class2="class2" :class1="class1" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '正1-6' && gameStatus['zfb'] != 0 && gameStatus['kizt'] != 0">
          <Main1_6GeneralDisk :class2="class2" :class1="class1" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '过关' && gameStatus['zfb'] != 0 && gameStatus['kigg'] != 0">
          <LotteryParlayDisk :class1="class1" :betAmount="betAmount" :initialize="initialize"
            @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '连码' && gameStatus['zfb'] != 0 && gameStatus['kilm'] != 0">
          <EvenCodeDisk :class1="class1" :initialize="initialize" :betAmount="betAmount" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '半波' && gameStatus['zfb'] != 0 && gameStatus['kibb'] != 0">
          <HalfWaveDisk :class1="class1" :betAmount="betAmount" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '生肖' && gameStatus['zfb'] != 0 && gameStatus['kisx'] != 0">
          <OneXiaoDisk :class1="class1" :class2="class2" :betAmount="betAmount" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '尾数' && gameStatus['zfb'] != 0 && gameStatus['kisx'] != 0
          ">
          <MantissaDisk :class1="class1" :class2="class2" :betAmount="betAmount" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '特码生肖' && gameStatus['zfb'] != 0 && gameStatus['kisx'] != 0
          ">
          <SpecialZodiacDisk :class1="class1" :class2="class2" :betAmount="betAmount" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '合肖' && gameStatus['zfb'] != 0 && gameStatus['kisx'] != 0
          ">
          <CompatibleDisk :class2="class2" :activeAnimal="activeAnimal" :allCompatible="allCompatible"
            :initialize="initialize" :betAmount="betAmount" @changeBetItem="changeBetItem"
            @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '生肖连' && gameStatus['zfb'] != 0 && gameStatus['kisx'] != 0
          ">
          <ZodaicEvenDisk :class1="class1" :class2="class2" :initialize="initialize" :betAmount="betAmount"
            @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '尾数连' && gameStatus['zfb'] != 0 && gameStatus['kisx'] != 0
          ">
          <MantissaEvenDisk :class1="class1" :class2="class2" :initialize="initialize" :betAmount="betAmount"
            @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
        </div>
        <div v-else-if="class1 == '全不中' && gameStatus['zfb'] != 0 && gameStatus['kilm'] != 0
          ">
          <MissAllDisk :class1="class1" :class2="class2" :betAmount="betAmount" :initialize="initialize"
            @changeBetItem="changeBetItem" @submitItemList="submitItemList" />
        </div>
        <div v-else class="text-center text-[24px]">目前没有开盘!</div>
      </div>
      <div class="rounded-t-md bg-white absolute bottom-0 right-0 w-full">
        <div class="relative rounded-t-md">
          <div v-if="activeTap === 1 && inputShowArray.includes(class1)"
            class="flex justify-between h-[39px] px-2 text-[12px] items-center my-1">
            <div class="flex w-10 text-gray-400 items-center w-[50px]" @click="removeBetAmount">
              <img src="@/assets/images/fastthree/icon-delete.png" alt="remove icon" class="w-[12px] h-[13px] mr-[5px]" />
              <p>清空</p>
            </div>
            <div class="w-[180px] flex rounded-sm shadow-sm bg-[#e8f6ff] text-[12px] text-[#2674ff]">
              <button type="button" @click="betAmount10"
                class="px-[5px] py-[6px] w-full bg-transparent border border-[#2674ff] rounded-l-sm">
                10
              </button>
              <button type="button" @click="betAmount50"
                class="px-[5px] py-[6px] w-full bg-transparent border-t border-r border-b border-[#2674ff]">
                50
              </button>
              <button type="button" @click="betAmount100"
                class="px-[5px] py-[6px] w-full bg-transparent border-t border-r border-b border-[#2674ff]">
                100
              </button>
              <button type="button" @click="betAmount500"
                class="px-[5px] py-[6px] w-full bg-transparent border-t border-b border-[#2674ff]">
                500
              </button>
              <button type="button" @click="betAmount1000"
                class="px-[5px] py-[6px] w-full bg-transparent border border-[#2674ff] rounded-r-sm">
                1000
              </button>
            </div>
            <div
              class="w-[90px] h-[30px] inline-flex items-center rounded-sm shadow-sm text-[14px] border border-1 border-[#2674ff]">
              <div class="bg-[#e8f6ff] w-[23px] h-full pt-[7px] px-[3px] border-r border-1 border-[#2674ff] rounded-sm">
                <img src="@/assets/images/fastthree/icon-pen.png" class="w-full" />
              </div>
              <input type="number" style="width: 60px" v-model="betAmount" @mousedown="showKeyBoard" />
              <!-- <p class="text-[11px] ml-[5px] text-gray-400">输入金额</p> -->
            </div>
          </div>
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
    <van-popup v-model:show="historyShow" position="bottom" :style="{ height: 'calc(100% - 150px)' }">
      <el-table v-loading="loading" :data="birthHistoryList" stripe style="width: 100%">
        <el-table-column prop="version" width="100">
          <template #default="scope">
            <Font color="red">{{ scope.row.version }}期</Font>
          </template>
        </el-table-column>
        <el-table-column prop="result">
          <template #default="scope">
            <div class="w-full flex justify-around px-1">
              <div class="relative" v-for="(item, index) in scope.row.result" :key="index">
                <div class="flex justify-center items-center">
                  <div class="relative">
                    <img v-if="redColor.includes(item)" src="@/assets/images/fastthree/red.png" style="width: 40px;" />
                    <img v-if="blueColor.includes(item)" src="@/assets/images/fastthree/blue.png" style="width: 40px;" />
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
    </van-popup>
    <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '30%' }">
      <div v-if="class1 == '过关'">
        <el-table v-loading="loading" :data="selectedItemList" stripe style="width: 100%">
          <el-table-column prop="class2" label="内容">
            <template #default="scope">
              <Font color="red">{{ scope.row.class2 }} : {{ scope.row.name }}</Font>
            </template>
          </el-table-column>
          <el-table-column prop="odds" label="赔率"></el-table-column>
        </el-table>
        <div style="text-align: center">
          <Font color="red">模式 : </Font>
          <Font>{{ selectedItemList.length }}串1 @ {{ totalOdds }}</Font>
        </div>
      </div>
      <div v-else>
        <el-table v-loading="loading" :data="selectedItemList" stripe style="width: 100%">
          <el-table-column prop="class2" label="内容" width="150">
            <template #default="scope">
              <Font color="red">{{ scope.row.class2 }} : {{ scope.row.num }}</Font>
            </template>
          </el-table-column>
          <el-table-column prop="odds" label="赔率"></el-table-column>
          <el-table-column prop="betAmount" label="下注金额"></el-table-column>
          <el-table-column prop="winableAmount" label="可赢金额"></el-table-column>
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
        <p>具体规则如下</p>
        <div class="font-bold text-red-500">特码</div>
        <p>选1个或1个以上号码，若开奖号码的特别码与所选号码一致，即为中奖；如投注方案为45，开奖号码为：04,25,36,22,44,30 + 45，即中特码。</p>

        <div class="font-bold text-red-500">两面</div>
        <p>选1个或1个以上号码，如果当期特码开出符合投注选择种类，即为中奖； 若当期特别码为49，则特大,特小,特尾大,特尾小,特单,特双,特大单,特大双,特小单,特小双,特合大,特合小,特合单,特合双都为和局。</p>
        <div class="text-blue-500">特大、特小：</div>
        <p>开出之特码大于或等于25为特码大，小于或等于24为特码小，</p>
        <div class="text-blue-500">特单、特双：</div>
        <p>特码为偶数叫特双，为奇数叫特单，</p>
        <div class="text-blue-500">特大单：</div>
        <p>开出之特码大于或等于25的单数为特码大单，如33、37，</p>
        <div class="text-blue-500">特小单：</div>
        <p>开出之特码小于或等于23的单数为特码小单，如17、21,</p>
        <div class="text-blue-500">特大双：</div>
        <p> 开出之特码大于或等于26的双数为特码大双，如28、32， </p>
        <div class="text-blue-500">特小双：</div>
        <p> 开出之特码小于或等于24的双数为特码小双，如18、22， </p>
        <div class="text-blue-500">特码合数：</div>
        <p>特码个位数和十位数之和值，</p>
        <p>特合小：和值小于或等于6合数小，如1； 特合大：和值大于或等于7，如26；</p>
        <p>特合单：和值为奇数，如21，特合双：和值为偶数，如33；</p>
        <p>特尾小：开出之特码尾数（0-4），特尾大：开出之特码尾数（5-9）,</p>
        <div class="text-blue-500">总单、总双：</div>
        <p>所有七个开奖号码的分数总和是单数叫(总分单) ，如分数总和是103、193；分数总和是双数叫(总分双)，如分数总和是108、160；</p>
        <div class="text-blue-500">总大、总小：</div>
        <p>所有七个开奖号码的分数总和大于或等于175为总分大；分数总和小于或等于174为总分小。如开奖号码为01、07、15、29、38、46、24，分数总和是160，则总分小。</p>
        <div class="font-bold text-red-500">合肖</div>
        <p>选2~11生肖(排列如同生肖)为一组合，若开奖号码的特码亦在此组合内，即视为中奖</p>
        <div class="font-bold text-red-500">特肖</div>
        <p>选1个或1个以上生肖，所选生肖与特别码所属生肖一致，即为中奖。</p>
        <div class="font-bold text-red-500">正码</div>
        <p>当期开出之前6个号码叫正码。第一时间出来的叫正码1，依次叫正码2、正码3……正码6，不以大小排序。</p>
        <p>选1个或1个以上号码，所选号码在当期开奖号码的正码内，即为中奖。</p>
        <div class="font-bold text-red-500">正码特1-6</div>
        <p>正1特、正2特、正3特、正4特、正5特、正6特:指下注的正码特与开出之正码其开奖顺序及开奖号码相同，视为中奖，如第一个正码开奖为13号，下注第一个正码特为13则视为中奖，其它号码视为不中奖。</p>
        <div class="font-bold text-red-500">正码1-6</div>
        <p>正码1、正码2、正码3、正码4 、正码5、正码6的大小单双、波色、合数单双与特码的大小单双、波色、合数单双规则相同， 如正码1为25，则正码1为大，为单，为蓝波，为尾大；正码2为2， 则正码2为小，为双，为红波，为尾小；号码为49时退还本金，则大小单双、合数单双为和，波色为绿波，尾数大小为和。</p>
        <div class="font-bold text-red-500">色波</div>
        <p>选1个或1个以上波色，所选波色与当期特别码的波色一致，即为中奖</p>
        <p class="text-red-500">红波 01, 02, 07, 08, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46；</p>
        <p class="text-blue-500">蓝波 03, 04, 09, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48；</p>
        <p class="text-green-500">绿波 05, 06, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49。</p>
        <div class="text-blue-500">半波半半波：</div>
        <p>以特别码色波和特别码单双及特别码大小等三种游戏为一个投注组合，当期特别码开出符合投注组合，即视为中奖；若特别码为49算作和局。</p>
        <p>红单 : 红波中的奇数；红双 : 红波中的偶数；红大 : 红波中大于或等于25的数；红小 : 红波中小于或等于24的数。</p>
        <p>蓝单 : 蓝波中的奇数；蓝双 : 蓝波中的偶数；蓝大 : 蓝波中大于或等于25的数；蓝小: 蓝波中小于或等于24的数。</p>
        <p>绿单 : 绿波中的奇数；绿双 : 绿波中的偶数；绿大 : 绿波中大于或等于25的数；绿小 : 绿波中小于或等于24的数。</p>
        <p>红大单 : 红波中大于或等于25，且是奇数；红大双 : 红波中大于或等于25，且是偶数；红小单 : 红波中小于或等于24，且是奇数；红小双 : 红波中小于或等于24，且为偶数。</p>
        <p>蓝大单 : 蓝波中大于或等于25，且是奇数；蓝大双 : 蓝波中大于或等于25，且是偶数；蓝小单 : 蓝波中小于或等于24，且是奇数；蓝小双 : 蓝波中小于或等于24，且为偶数。</p>
        <p>绿大单 : 绿波中大于或等于25，且是奇数；绿大双 : 绿波中大于或等于25，且是偶数；绿小单 : 绿波中小于或等于24，且是奇数；绿小双 : 绿波中小于或等于24，且为偶数。</p>
        


        <div class="font-bold text-red-500">连码</div>
        <div class="text-blue-500">三全中：</div>
        <p>每三个号码为一组合，若三个号码都是开奖号码之正码，视为中奖，其余情形视为不中奖。如03、04、05三个都是开奖号码之正码，视为中奖，如两个正码加上一个特别号码视为不中奖。</p>
        <div class="text-blue-500">三中二：</div>
        <p>所投注的每三个号码为一组合，若其中2个是开奖号码中的正码，视为中奖，叫三中二；若3个都是开奖号码中的 正码，叫三中二之中三，其余情形视为不中奖， 如03、04、05为一组合，开奖号码中有03 、04两个正码，没有05，叫三中二，按三中二赔付；如开奖号码中有03、04、05三个正码，叫三中二之中三，按中三赔付；如出现1个或没有，视为不中奖。</p>
        <div class="text-blue-500">二全中：</div>
        <p>          每二个号码为一组合，二个号码都是开奖号码之正码，视为中奖，其余情形视为不中奖（含一个正码加一个特别号码之情形）。        </p>
        <div class="text-blue-500">二中特：</div>
        <p>
          每二个号码为一组合，二个号码都是开奖号码之正码，叫二中特之二中；若其中一个是正码，一个是特别号码，叫二中特之中特；其余情形视为不中奖。
        </p>
        <div class="text-blue-500">特串：</div>
        <p>每二个号码为一组合，其中一个是正码，一个是特别号码，视为中奖，其余情形视为不中奖（含二个号码都是正码之情形）。</p>
        <div class="text-blue-500">四全中：</div>
        <p>每四个号码为一个组合，若四个号码都是开奖号码之正码，视为中奖，其余情形视为不中奖。如03、04、05、06四个都是开奖号码之正码，视为中奖，如三个正码加上一个特别号码视为不中奖</p>

        <div class="font-bold text-red-500">总肖</div>
        <p>当期号码(所有正码与最后开出的特别码)开出的不同生肖总数，与所投注之预计开出之生肖总和数(不用指定特定生肖)，则视为中奖，其余情形视为不中奖；当期号码（正码和特别码）开出的不同生肖总数若为单数则为单，若为双数则为双。</p>
        

        <div class="font-bold text-red-500">正肖</div>
        <p>当期开奖的前6个号码(不含特别码，不分先后顺序)，其中有一个号码在投注的生肖范围即算中奖。如果有多个球号开在投注生肖范围内，派彩金额将自动倍增。</p>
        


        <div class="font-bold text-red-500">一肖</div>
        <p>指开出的7个开奖号码中含有投注所属生肖的一个或多个号码，即视为中奖，不论同生肖的号码出现一个或多个，派彩只派一次。</p>

        <div class="font-bold text-red-500">尾数</div>
        <p>指7个开奖号码中含有所属​​尾数的一个或多个号码，不论同尾数的号码出现一个或多个，派彩只派一次。</p>

        <div class="font-bold text-red-500">头尾数</div>
        <p>所选头、尾数与特别码的十位、个位一致，即为中奖。</p>
        <p>0头 01，02，03，04，05，06，07，08，09；</p>
        <p>1头 10，11，12，13，14，15，16，17，18，19；</p>
        <p>2头 20，21，22，23，24，25，26，27，28，29；</p>
        <p>3头 30，31，32，33，34，35，36，37，38，39；</p>
        <p>4头 40，41，42，43，44，45，46，47，48，49；</p>
        <p>0尾 10，20，30，40;</p>
        <p>1尾 01，11，21，31，41；</p>
        <p>2尾 02，12，22，32，42；</p>
        <p>3尾 03，13，23，33，43；</p>
        <p>4尾 04，14，24，34，44；</p>
        <p>5尾 05，15，25，35，45；</p>
        <p>6尾 06，16，26，36，46；</p>
        <p>7尾 07，17，27，37，47；</p>
        <p>8尾 08，18，28，38，48；</p>
        <p>9尾 09，19，29，39，49；</p>

        <div class="font-bold text-red-500">连肖</div>
        <p>挑选2~5生肖（排列如同生肖）为一个组合，一个生肖对应多个号码，不论同生肖的号码出现一个或多个，派彩只派一次。每个生肖都有自己的赔率，下注组合的总赔率，取该组合生肖的最低赔率为总赔率。请注意49亦算输赢，不为和</p>
        <div class="text-blue-500">二连肖：</div>
        <p>选择二个生肖为一投注组合进行下注。该注的二个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
        <div class="text-blue-500">三连肖</div>
        <p>选择三个生肖为一投注组合进行下注。该注的三个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
        <div class="text-blue-500">四连肖</div>
        <p>选择四个生肖为一投注组合进行下注。该注的四个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>
        <div class="text-blue-500">五连肖</div>
        <p>选择五个生肖为一投注组合进行下注。该注的五个生肖必须在当期开出的7个开奖号码相对应的生肖中，视为中奖。</p>



        <div class="font-bold text-red-500">连尾</div>
        <p>挑选2~5个尾数为一组合；一个尾数对应多个号码，不论同尾数的号码出现一个或多个，派彩只派一次。每个尾数都有自己的赔率，下注组合的总赔率，取该组合尾数的最低赔率为总赔率。请注意49亦算输赢，不为和</p>
        <div class="text-blue-500">二连尾</div>
        <p>选择二个尾数为一投注组合进行下注。该注的二个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
        <div class="text-blue-500">三连尾</div>
        <p>选择三个尾数为一投注组合进行下注。该注的三个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
        <div class="text-blue-500">四连尾</div>
        <p>选择四个尾数为一投注组合进行下注。该注的四个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>
        <div class="text-blue-500">五连尾</div>
        <p>选择五个尾数为一投注组合进行下注。该注的五个尾数必须在当期开出的7个开奖号码相对应的尾数中，视为中奖。</p>

        <div class="font-bold text-red-500">全不中</div>
        <div class="text-blue-500">五不中</div>
        <p>选择5个或5个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5，开奖号码为6,7,8,9,10,11 + 12，即中五不中。</p>
        <div class="text-blue-500">六不中</div>
        <p>选择6个或6个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13，开奖号码为6,7,8,9,10,11 + 12，即中六不中。</p>
        <div class="text-blue-500">七不中</div>
        <p>选择7个或7个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13-14，开奖号码为6,7,8,9,10,11 + 12，即中七不中。</p>
        <div class="text-blue-500">八不中</div>
        <p>选择8个或8个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13-14-15，开奖号码为6,7,8,9,10,11 + 12，即中八不中。</p>
        <div class="text-blue-500">九不中</div>
        <p>选择9个或9个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13-14-15-16，开奖号码为6,7,8,9,10,11 + 12，即中九不中。</p>
        <div class="text-blue-500">十不中</div>
        <p>选择10个或10个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13-14-15-16-17，开奖号码为6,7,8,9,10,11 + 12，即中十不中。</p>
        <div class="text-blue-500">十一不中</div>
        <p>选择11个或11个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13-14-15-16-17-18，开奖号码为6,7,8,9,10,11 + 12，即中十一不中。</p>
        <div class="text-blue-500">十二不中</div>
        <p>选择12个或12个以上号码组成1注，所选号码不包含在开奖号码中，即为中奖。如投注方案为1-2-3-4-5-13-14-15-16-17-18-19，开奖号码为6,7,8,9,10,11 + 12，即中十二不中。</p>
        <div class="text-blue-500">根据十二生肖其动物特性来区分【应用于特码生肖、6肖等项目】</div>
        <p>天肖 : 兔 马 猴 猪 牛 龙</p>
        <p>地肖 : 鼠 虎 蛇 羊 鸡 狗</p>
        <p>家肖 : 羊 马 牛 猪 狗 鸡</p>
        <p>野肖 : 猴 蛇 龙 兔 虎 鼠</p>
        <p>前肖 : 鼠 牛 虎 兔 龙 蛇</p>
        <p>后肖 : 马 羊 猴 鸡 狗 猪</p>
        
      </div>
    </van-dialog>
    <van-number-keyboard v-model="betAmount" :show="keyboardShow" :maxlength="20" @blur="keyboardShow = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect, watch } from "vue";
import Description from "./components/macao_mark_six/description/index.vue";
import FastDisk from "./components/macao_mark_six/special_code/fast_disk/index.vue";
import SpecialGeneralDisk from "./components/macao_mark_six/special_code/general_disk/index.vue";
import MainGeneralDisk from "./components/macao_mark_six/main_code/general_disk/index.vue";
import MainSpecialGeneralDisk from "./components/macao_mark_six/main_special_code/general_disk/index.vue";
import Main1_6GeneralDisk from "./components/macao_mark_six/main_code_1_6/general_disk/index.vue";
import LotteryParlayDisk from "./components/macao_mark_six/lottery_parlay/index.vue";
import EvenCodeDisk from "./components/macao_mark_six/even_code/index.vue";
import HalfWaveDisk from "./components/macao_mark_six/half_wave/index.vue";
import OneXiaoDisk from "./components/macao_mark_six/onexiao_mantissa/one_xiao.vue";
import MantissaDisk from "./components/macao_mark_six/onexiao_mantissa/mantissa.vue";
import SpecialZodiacDisk from "./components/macao_mark_six/special_zodiac/index.vue";
import CompatibleDisk from "./components/macao_mark_six/compatible_code/index.vue";
import ZodaicEvenDisk from "./components/macao_mark_six/zodiac_even/index.vue";
import MantissaEvenDisk from "./components/macao_mark_six/mantissa_even/index.vue";
import MissAllDisk from "./components/macao_mark_six/miss_all/index.vue";
import router from "@/router";
import { showToast } from "vant";
import { useAuthStore } from "@/stores/auth";
import { macaoKatanStore } from "@/stores/macao_katan";
import { storeToRefs } from "pinia";
import moment from "moment-timezone";
const { dispatchLotteryBet } = macaoKatanStore();
const { dispatchParlayLotteryBet } = macaoKatanStore();
const { dispatchGameStatus } = macaoKatanStore();
const { dispatchGameVersion } = macaoKatanStore();
const { dispatchGameResult } = macaoKatanStore();
const { dispatchEvenLotteryBet } = macaoKatanStore();
const { dispatchCompatibleLotteryBet } = macaoKatanStore();
const { dispatchZodaicEvenLotteryBet } = macaoKatanStore();
const { dispatchMantissaEvenLotteryBet } = macaoKatanStore();
const { dispatchMissAllLotteryBet } = macaoKatanStore();
const { dispatchSixMarkBirthHistory } = macaoKatanStore();
const { dispatchUserMoney } = useAuthStore();
const time = ref(0);
const show = ref(false);
const historyShow = ref(false);
const descriptionShow = ref(false);
const descriptionTitle = ref("澳门六合彩游戏规则");
const showRight = ref(false);
const initialize = ref(false);
const activeTap = ref(1);
const activeAnimal = ref(0);
const allCompatible = ref(false);
const betAmount = ref("");
const selectedCount = ref(0);
const selectedBetAmount = ref(0);
const selectedAmount = ref("");
const winAmount = ref(0);
const totalOdds = ref(1);
const loading = ref(false);
const redColor = ref([1, 2, 7, 8, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46]);
const blueColor = ref([3, 4, 9, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48]);
const greenColor = ref([5, 6, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49]);
const buttonShowArray = ref(["特码", "正码", "正特"]);
const inputShowArray = ref([
  "特码",
  "正码",
  "正特",
  "过关",
  "连码",
  "合肖",
  "生肖连",
  "尾数连",
  "全不中",
]);
const animalShowArray = ref([
  "六肖",
  "七肖",
  "八肖",
  "九肖",
  "十肖",
  "十一肖",
])
const showBottom = ref(false);
const keyboardShow = ref(false);
const selectedItemList = ref([]);
const class1 = ref("特码");
const class2 = ref("特A");
const display_class2 = ref("特A");
const class3 = ref("");
const onClickLeft = () => {
  router.go(-1);
};
const animalItems = ref([
  {
    id: 1,
    name: "家禽",
  },
  {
    id: 2,
    name: "野獸",
  },
  {
    id: 3,
    name: "反选",
  },
])
const tapItems = ref([
  {
    id: 1,
    name: "快捷",
  },
  {
    id: 2,
    name: "一般",
  },
]);
const removeBetAmount = () => {
  betAmount.value = "";
};
const betAmount10 = () => {
  betAmount.value = 10;
};

const betAmount50 = () => {
  betAmount.value = 50;
};

const betAmount100 = () => {
  betAmount.value = 100;
};

const betAmount500 = () => {
  betAmount.value = 500;
};
const betAmount1000 = () => {
  betAmount.value = 1000;
};
const showRightMenu = () => {
  showRight.value = true;
}
const showDescriptionDialog = () => {
  showRight.value = false;
  descriptionShow.value = true;
}
const onFinish = () => { };
const cancelBet = () => {
  showBottom.value = false;
  activeAnimal.value = 0;
  selectedItemList.value = [];
  class3.value = "";
  selectedAmount.value = "";
  betAmount.value = "";
  selectedCount.value = 0;
  selectedBetAmount.value = 0;
  winAmount.value = 0;
  totalOdds.value = 1;
  initialize.value = !initialize.value;
  console.log(selectedCount.value);
};
const saveLotteryBet = async () => {
  if (user.value.id == undefined) {
    showToast("你必须先登录。");
    router.push("login");
    return;
  }
  await dispatchGameStatus({ class1: class1.value });
  if (
    class1.value == "特码" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kitm"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "正码" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kizm"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "正特" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kizt"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "正1-6" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kizt"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "过关" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kigg"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "连码" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kilm"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "半波" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kibb"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "生肖" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kisx"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "尾数" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kisx"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "特码生肖" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kisx"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "合肖" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kisx"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "生肖连" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kisx"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "尾数连" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kisx"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (
    class1.value == "全不中" &&
    (gameStatus.value["zfb"] == 0 || gameStatus.value["kilm"] == 0)
  ) {
    showToast("目前没有开盘!");
    return;
  }
  if (selectedBetAmount.value > user.value.Money) {
    showToast("下注金额不可大于信用额度。");
  } else {
    loading.value = true;
    if (class1.value == "过关") {
      let data = {
        class1: class1.value,
        class2: class2.value,
        class3: class3.value,
        gold: selectedBetAmount.value,
        total_odds: totalOdds.value,
      };
      await dispatchParlayLotteryBet(data, token.value);
    } else if (class1.value == "连码") {
      await dispatchEvenLotteryBet(selectedItemList.value, token.value);
    } else if (class1.value == "生肖连") {
      await dispatchZodaicEvenLotteryBet(selectedItemList.value, token.value);
    } else if (class1.value == "尾数连") {
      await dispatchMantissaEvenLotteryBet(selectedItemList.value, token.value);
    } else if (class1.value == "全不中") {
      await dispatchMissAllLotteryBet(selectedItemList.value, token.value);
    } else if (class1.value == "合肖") {
      let data = {
        class1: "生肖",
        class2: class2.value,
        class3: class3.value,
        gold: selectedBetAmount.value,
        rate: totalOdds.value,
      };
      await dispatchCompatibleLotteryBet(data, token.value);
    } else {
      let data = {
        class1: class1.value,
        class2: class1.value == "正1-6" ? class1.value : class2.value,
        class3: class3.value,
        selectedAmount: selectedAmount.value,
      };
      await dispatchLotteryBet(data, token.value);
    }
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
const showKeyBoard = () => {
  keyboardShow.value = true;
};
const orderNumber = computed(() => {
  const { getOrderNumber } = storeToRefs(macaoKatanStore());
  return getOrderNumber.value;
});
const birthHistoryList = computed(() => {
  const { getBirthHistoryList } = storeToRefs(macaoKatanStore());
  return getBirthHistoryList.value;
});
const gameVersion = computed(() => {
  const { getGameVersion } = storeToRefs(macaoKatanStore());
  return getGameVersion.value;
});
const gameResult = computed(() => {
  const { getGameResult } = storeToRefs(macaoKatanStore());
  return getGameResult.value;
});
const gameStatus = computed(() => {
  const { getGameStatus } = storeToRefs(macaoKatanStore());
  const now = moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss");
  let end: any = 0;
  // switch (class1.value) {
  //   case "特码":
  //     end = moment(getGameStatus.value["kitm1"]);
  //     break;
  //   case "正码":
  //     end = moment(getGameStatus.value["kizm1"]);
  //     break;
  //   case "正特":
  //     end = moment(getGameStatus.value["kizt1"]);
  //     break;
  //   case "正1-6":
  //     end = moment(getGameStatus.value["kizt1"]);
  //     break;
  //   case "过关":
  //     end = moment(getGameStatus.value["kigg1"]);
  //     break;
  //   case "连码":
  //     end = moment(getGameStatus.value["kilm1"]);
  //     break;
  //   case "半波":
  //     end = moment(getGameStatus.value["kibb1"]);
  //     break;
  //   case "生肖":
  //     end = moment(getGameStatus.value["kisx1"]);
  //     break;
  //   case "尾数":
  //     end = moment(getGameStatus.value["kisx1"]);
  //     break;
  //   case "特码生肖":
  //     end = moment(getGameStatus.value["kisx1"]);
  //     break;
  //   case "合肖":
  //     end = moment(getGameStatus.value["kisx1"]);
  //     break;
  //   case "生肖连":
  //     end = moment(getGameStatus.value["kisx1"]);
  //     break;
  //   case "尾数连":
  //     end = moment(getGameStatus.value["kisx1"]);
  //     break;
  //   case "全不中":
  //     end = moment(getGameStatus.value["kilm1"]);
  //     break;
  // }

  // end = moment(getGameStatus.value["nd"]);
  // var duration = moment.duration(end.diff(now));
  // time.value = duration.valueOf();

  // var days = duration.days();
  // var hours = duration.hours();
  // var minutes = duration.minutes();
  // var seconds = duration.seconds();
  // time.value = ((Number(days) * 24 + Number(hours)) * 3600 + Number(minutes) * 60 + seconds) * 1000;

  time.value = getGameStatus.value["diff_time"];

  return getGameStatus.value;
});

// watch(
//   class1,
//   () => {
//     // const now = moment.utc();
//     const now = moment(new Date());
//     let end: any = 0;
//     switch (class1.value) {
//       case "特码":
//         end = moment(gameStatus.value["kitm1"]);
//         break;
//       case "正码":
//         end = moment(gameStatus.value["kizm1"]);
//         break;
//       case "正特":
//         end = moment(gameStatus.value["kizt1"]);
//         break;
//       case "正1-6":
//         end = moment(gameStatus.value["kizt1"]);
//         console.log(gameStatus.value["kizt1"]);
//         break;
//       case "过关":
//         end = moment(gameStatus.value["kigg1"]);
//         break;
//       case "连码":
//         end = moment(gameStatus.value["kilm1"]);
//         break;
//       case "半波":
//         end = moment(gameStatus.value["kibb1"]);
//         break;
//       case "生肖":
//         end = moment(gameStatus.value["kisx1"]);
//         break;
//       case "尾数":
//         end = moment(gameStatus.value["kisx1"]);
//         break;
//       case "特码生肖":
//         end = moment(gameStatus.value["kisx1"]);
//         break;
//       case "合肖":
//         end = moment(gameStatus.value["kisx1"]);
//         break;
//       case "生肖连":
//         end = moment(gameStatus.value["kisx1"]);
//         break;
//       case "尾数连":
//         end = moment(gameStatus.value["kisx1"]);
//         break;
//       case "全不中":
//         end = moment(gameStatus.value["kilm1"]);
//         break;
//     }
//     var duration = moment.duration(end.diff(now));
//     time.value = duration.valueOf();
//   },
//   { deep: true }
// );

watch(
  betAmount,
  () => {
    if (keyboardShow && betAmount.value != "") {
      showToast(betAmount.value);
    }
  },
  { deep: true }
);

const user = computed(() => {
  const { getUser } = storeToRefs(useAuthStore());
  return getUser.value;
});
const token = computed(() => {
  const { getToken } = storeToRefs(useAuthStore());
  return getToken.value;
});
const success = computed(() => {
  const { getSuccess } = storeToRefs(macaoKatanStore());
  return getSuccess.value;
});
const errMessage = computed(() => {
  const { getErrMessage } = storeToRefs(macaoKatanStore());
  return getErrMessage.value;
});
const changeBetItem = (data: any) => {
  selectedCount.value = data.selectedCount;
  selectedBetAmount.value = data.selectedBetAmount;
  winAmount.value = data.winAmount;
  class3.value = data.class3;
  selectedAmount.value = data.selectedAmount;
  totalOdds.value = data.totalOdds;
  class2.value = data.class2;
  console.log(class2.value);
};
const submitItemList = (data: any) => {
  selectedItemList.value = [];
  selectedItemList.value = [...selectedItemList.value, ...data];
};
const showPopUp = () => {
  if (class1.value === "过关") {
    if (betAmount.value == "") {
      showToast("输入投注金额。");
    } else if (selectedItemList.value.length == 0) {
      showToast("该彩票注单最高金额：0。00");
    } else if (selectedItemList.value.length == 1) {
      showToast("请选择二组以上玩法，若只要单一下注请前往正特投注!");
    } else if (selectedItemList.value.length > 9) {
      showToast("超出下注范围!");
    } else {
      showBottom.value = true;
    }
  } else {
    if (inputShowArray.value.includes(class1)) {
      if (betAmount.value == "") {
        showToast("输入投注金额。");
      } else if (selectedItemList.value.length == 0) {
        showToast("该彩票注单最高金额：0。00");
      } else {
        showBottom.value = true;
      }
    } else {
      if (selectedItemList.value.length == 0) {
        showToast("该彩票注单最高金额：0。00");
      } else {
        showBottom.value = true;
      }
    }
  }
};
const changeTap = (id: number) => {
  show.value = false;
  activeTap.value = id;
};
const changeAnimal = (id: number) => {
  activeAnimal.value = id;
  if (id == 3) {
    allCompatible.value = !allCompatible.value;
    console.log(allCompatible.value);
  }
};
const showBirthHistory = () => {
  historyShow.value = !historyShow.value;
};
const parentButtonActive = ref(1);
const subButtonActive = ref(1);

const parentButtonList = ref([
  {
    id: 1,
    name: "特码",
    subButtons: [
      {
        subId: 1,
        name: "特A",
      },
      {
        subId: 2,
        name: "特B",
      },
    ],
  },
  {
    id: 2,
    name: "正码",
    subButtons: [
      {
        subId: 1,
        name: "正码A",
      },
      {
        subId: 2,
        name: "正码B",
      },
    ],
  },
  {
    id: 3,
    name: "正码特",
    subButtons: [
      {
        subId: 1,
        name: "正1特",
      },
      {
        subId: 2,
        name: "正2特",
      },
      {
        subId: 3,
        name: "正3特",
      },
      {
        subId: 4,
        name: "正4特",
      },
      {
        subId: 5,
        name: "正5特",
      },
      {
        subId: 6,
        name: "正6特",
      },
    ],
  },
  {
    id: 4,
    name: "正码1-6",
    subButtons: [
      {
        subId: 1,
        name: "正码一",
      },
      {
        subId: 2,
        name: "正码二",
      },
      {
        subId: 3,
        name: "正码三",
      },
      {
        subId: 4,
        name: "正码四",
      },
      {
        subId: 5,
        name: "正码五",
      },
      {
        subId: 6,
        name: "正码六",
      },
    ],
  },
  {
    id: 5,
    name: "过关",
    subButtons: [],
  },
  {
    id: 6,
    name: "连码",
    subButtons: [],
  },
  {
    id: 7,
    name: "半波",
    subButtons: [],
  },
  {
    id: 8,
    name: "一肖/尾数",
    subButtons: [
      {
        subId: 1,
        name: "一肖",
      },
      {
        subId: 2,
        name: "尾数",
      },
    ],
  },
  {
    id: 9,
    name: "特码生肖",
    subButtons: [],
  },
  {
    id: 10,
    name: "合肖",
    subButtons: [
      {
        subId: 1,
        name: "二肖",
      },
      {
        subId: 2,
        name: "三肖",
      },
      {
        subId: 3,
        name: "四肖",
      },
      {
        subId: 4,
        name: "五肖",
      },
      {
        subId: 5,
        name: "六肖",
      },
      {
        subId: 6,
        name: "七肖",
      },
      {
        subId: 7,
        name: "八肖",
      },
      {
        subId: 8,
        name: "九肖",
      },
      {
        subId: 9,
        name: "十肖",
      },
      {
        subId: 10,
        name: "十一肖",
      },
    ],
  },
  {
    id: 11,
    name: "生肖连",
    subButtons: [
      {
        subId: 1,
        name: "二肖连中",
      },
      {
        subId: 2,
        name: "三肖连中",
      },
      {
        subId: 3,
        name: "四肖连中",
      },
      {
        subId: 4,
        name: "五肖连中",
      },
      {
        subId: 5,
        name: "二肖连不中",
      },
      {
        subId: 6,
        name: "三肖连不中",
      },
      {
        subId: 7,
        name: "四肖连不中",
      },
    ],
  },
  {
    id: 12,
    name: "尾数连",
    subButtons: [
      {
        subId: 1,
        name: "二尾连中",
      },
      {
        subId: 2,
        name: "三尾连中",
      },
      {
        subId: 3,
        name: "四尾连中",
      },
      {
        subId: 4,
        name: "二尾连不中",
      },
      {
        subId: 5,
        name: "三尾连不中",
      },
      {
        subId: 6,
        name: "四尾连不中",
      },
    ],
  },
  {
    id: 13,
    name: "全不中",
    subButtons: [
      {
        subId: 1,
        name: "五不中",
      },
      {
        subId: 2,
        name: "六不中",
      },
      {
        subId: 3,
        name: "七不中",
      },
      {
        subId: 4,
        name: "八不中",
      },
      {
        subId: 5,
        name: "九不中",
      },
      {
        subId: 6,
        name: "十不中",
      },
      {
        subId: 7,
        name: "十一不中",
      },
      {
        subId: 8,
        name: "十二不中",
      },
    ],
  },
]);

const subButtonList = ref([
  {
    subId: 1,
    name: "特A",
  },
  {
    subId: 2,
    name: "特B",
  },
] as Array<{ subId: number; name: string }>);

const selectButton = (item: any) => {
  //   show.value = true;
  cancelBet();
  activeTap.value = 1;
  subButtonList.value = item.subButtons;
  parentButtonActive.value = item.id;
  subButtonActive.value = 1;
  switch (item.name) {
    case "特码":
      class1.value = "特码";
      class2.value = "特A";
      display_class2.value = "特A";
      break;
    case "正码":
      class1.value = "正码";
      class2.value = "正A";
      display_class2.value = "正码A";
      break;
    case "正码特":
      class1.value = "正特";
      class2.value = "正1特";
      display_class2.value = "正1特";
      break;
    case "正码1-6":
      class1.value = "正1-6";
      class2.value = "正码1";
      display_class2.value = "正码一";
      break;
    case "过关":
      show.value = false;
      class1.value = item.name;
      display_class2.value = "";
      break;
    case "连码":
      show.value = false;
      class1.value = "连码";
      display_class2.value = "";
      break;
    case "半波":
      show.value = false;
      class1.value = "半波";
      display_class2.value = "";
      break;
    case "一肖/尾数":
      class1.value = "生肖";
      class2.value = "一肖";
      display_class2.value = "一肖";
      break;
    case "特码生肖":
      class1.value = "特码生肖";
      class2.value = "特肖";
      display_class2.value = "特肖";
      break;
    case "合肖":
      activeAnimal.value = 0;
      class1.value = "合肖";
      class2.value = "二肖";
      display_class2.value = "二肖";
      break;
    case "生肖连":
      class1.value = "生肖连";
      class2.value = "二肖连中";
      display_class2.value = "二肖连中";
      break;
    case "尾数连":
      class1.value = "尾数连";
      class2.value = "二尾连中";
      display_class2.value = "二尾连中";
    case "全不中":
      class1.value = "全不中";
      class2.value = "五不中";
      display_class2.value = "五不中";
    default:
      class1.value = item.name;
      break;
  }
};
const selectSubButton = (item: any) => {
  cancelBet();
  show.value = false;
  activeAnimal.value = 0;
  subButtonActive.value = item.subId;
  switch (item.name) {
    case "正码A":
      class2.value = "正A";
      display_class2.value = "正码A";
      break;
    case "正码B":
      class2.value = "正B";
      display_class2.value = "正码B";
      break;
    case "正码一":
      class2.value = "正码1";
      display_class2.value = "正码一";
      break;
    case "正码二":
      class2.value = "正码2";
      display_class2.value = "正码二";
      break;
    case "正码三":
      class2.value = "正码3";
      display_class2.value = "正码三";
      break;
    case "正码四":
      class2.value = "正码4";
      display_class2.value = "正码四";
      break;
    case "正码五":
      class2.value = "正码5";
      display_class2.value = "正码五";
      break;
    case "正码六":
      class2.value = "正码6";
      display_class2.value = "正码六";
      break;
    case "尾数":
      class2.value = "尾数";
      class1.value = "尾数";
      display_class2.value = "尾数";
      break;
    case "一肖":
      class2.value = "一肖";
      class1.value = "生肖";
      display_class2.value = "一肖";
      break;
    default:
      class2.value = item.name;
      display_class2.value = item.name;
      break;
  }
};
onMounted(async () => {
  await dispatchGameStatus({ class1: class1.value });
  await dispatchGameVersion({});
  await dispatchGameResult({});
  await dispatchSixMarkBirthHistory({});
});
</script>

<style scoped>
.van-dialog__header {
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
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
