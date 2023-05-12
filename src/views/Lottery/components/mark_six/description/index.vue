<template>    
    <van-dialog v-model:show="descriptionShow" :title="descriptionTitle">
      <div class="p-2 h-[400px] overflow-y-scroll">
        <p></p>
        <div class="font-bold text-red-500"> 1、第一球 ~ 第五球</div>
        <div class="text-blue-500">第一球~第五球：</div>
        <p>第一球、第二球、第三球、第四球、第五球：指下注的每一球特码与开出之号码其开奖顺序及开奖号码相同，视为中奖，如第一球开出号码 8，下注第一球为 8 者视为中奖，其余情形视为不中奖。</p>
        <div class="text-blue-500">单双大小：</div>
        <p>根据相应单项投注第一球 ~ 第五球开出的球号，判断胜负。</p>
        <div class="text-blue-500">大小：</div>
        <p>根据相应单项投注的第一球 ~ 第五球开出的球号大于或等于 5 为特码大，小于或等于 4 为特码小。</p>
        <div class="text-blue-500">单双：</div>
        <p>根据相应单项投注的第一球 ~ 第五球开出的球号为双数则为特码双，如 2、6；球号为单数则为特码单，如 1、3。</p>


        <div class="font-bold text-red-500">2、总和</div>
        <div class="text-blue-500">大小：</div>
        <p>根据相应单项投注的第一球 ~ 第五球开出的球号数字总和值大于或等于 23 为总和大，小于或等于 22 为总和小。</p>
        <div class="text-blue-500">单双：</div>
        <p>根据相应单项投注的第一球 ~ 第五球开出的球号数字总和值是双数为总和双，数字总和值是单数为总和单。</p>


        <div class="font-bold text-red-500">3、前三特殊玩法： 豹子 > 顺子 > 对子 > 半顺 > 杂六</div>
        <div class="text-blue-500">豹子：</div>
        <p>开奖号码的万位千位百位数字都相同。如中奖号码为：222XX、666XX、888XX...开奖号码的万位千位百位数字相同，则投注前三豹子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">顺子：</div>
        <p>开奖号码的万位千位百位数字都相连，不分顺序（数字9、0、1相连）。如中奖号码为：123XX、901XX、321XX、798XX...开奖号码的万位千位百位数字相连，则投注前三顺子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">对子：</div>
        <p>
          开奖号码的万位千位百位任意两位数字相同（不包括豹子）。如中奖号码为：001XX，288XX、696XX...开奖号码的万位千位百位有两位数字相同，则投注前三对子者视为中奖，其它视为不中奖。如果开奖号码为前三豹子，则前三对子视为不中奖。
        </p>
        <div class="text-blue-500">半顺：</div>
        <p>
          开奖号码的万位千位百位任意两位数字相连，不分顺序（不包括顺子、对子）。如中奖号码为：125XX、540XX、390XX、160XX...开奖号码的万位千位百位有两位数字相连，则投注前三半顺者视为中奖，其它视为不中奖。如果开奖号码为前三顺子、前三对子，则前三半顺视为不中奖。如开奖号码为：123XX、901XX、556XX、233XX...视为不中奖。
        </p>
        <div class="text-blue-500">杂六：</div>
        <p>不包括豹子、对子、顺子、半顺的所有开奖号码。如开奖号码为：157XX、268XX...开奖号码位数之间无关联性，则投注前三杂六者视为中奖，其它视为不中奖。</p>


        <div class="font-bold text-red-500">4、中三特殊玩法： 豹子 > 顺子 > 对子 > 半顺 > 杂六</div>
        <div class="text-blue-500">豹子：</div>
        <p>开奖号码的千位百位十位数字都相同。如中奖号码为：222XX、666XX、888XX...开奖号码的万位千位百位数字相同，则投注前三豹子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">顺子：</div>
        <p>开奖号码的千位百位十位数字都相连，不分顺序（数字9、0、1相连）。如中奖号码为：123XX、901XX、321XX、798XX...开奖号码的万位千位百位数字相连，则投注前三顺子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">对子：</div>
        <p>
          开奖号码的千位百位十位任意两位数字相同（不包括豹子）。如中奖号码为：001XX，288XX、696XX...开奖号码的万位千位百位有两位数字相同，则投注前三对子者视为中奖，其它视为不中奖。如果开奖号码为前三豹子，则前三对子视为不中奖。
        </p>
        <div class="text-blue-500">半顺：</div>
        <p>
          开奖号码的千位百位十位任意两位数字相连，不分顺序（不包括顺子、对子）。如中奖号码为：125XX、540XX、390XX、160XX...开奖号码的万位千位百位有两位数字相连，则投注前三半顺者视为中奖，其它视为不中奖。如果开奖号码为前三顺子、前三对子，则前三半顺视为不中奖。如开奖号码为：123XX、901XX、556XX、233XX...视为不中奖。
        </p>
        <div class="text-blue-500">杂六：</div>
        <p>不包括豹子、对子、顺子、半顺的所有开奖号码。如开奖号码为：157XX、268XX...开奖号码位数之间无关联性，则投注前三杂六者视为中奖，其它视为不中奖。</p>


        <div class="font-bold text-red-500">5、后三特殊玩法： 豹子 > 顺子 > 对子 > 半顺 > 杂六</div>
        <div class="text-blue-500">豹子：</div>
        <p>开奖号码的万位千位百位数字都相同。如中奖号码为：222XX、666XX、888XX...开奖号码的万位千位百位数字相同，则投注前三豹子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">顺子：</div>
        <p>开奖号码的万位千位百位数字都相连，不分顺序（数字9、0、1相连）。如中奖号码为：123XX、901XX、321XX、798XX...开奖号码的万位千位百位数字相连，则投注前三顺子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">对子：</div>
        <p>
          开奖号码的万位千位百位任意两位数字相同（不包括豹子）。如中奖号码为：001XX，288XX、696XX...开奖号码的万位千位百位有两位数字相同，则投注前三对子者视为中奖，其它视为不中奖。如果开奖号码为前三豹子，则前三对子视为不中奖。
        </p>
        <div class="text-blue-500">半顺：</div>
        <p>
          开奖号码的万位千位百位任意两位数字相连，不分顺序（不包括顺子、对子）。如中奖号码为：125XX、540XX、390XX、160XX...开奖号码的万位千位百位有两位数字相连，则投注前三半顺者视为中奖，其它视为不中奖。如果开奖号码为前三顺子、前三对子，则前三半顺视为不中奖。如开奖号码为：123XX、901XX、556XX、233XX...视为不中奖。
        </p>
        <div class="text-blue-500">杂六：</div>
        <p>不包括豹子、对子、顺子、半顺的所有开奖号码。如开奖号码为：157XX、268XX...开奖号码位数之间无关联性，则投注前三杂六者视为中奖，其它视为不中奖。</p>


        <div class="font-bold text-red-500">6、龙虎和特殊玩法： 龙 > 虎 > 和 （0为最小，9为最大）</div>
        <div class="text-blue-500">龙：</div>
        <p>开奖号码的万位千位百位数字都相同。如中奖号码为：222XX、666XX、888XX...开奖号码的万位千位百位数字相同，则投注前三豹子者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">虎：</div>
        <p>开奖第一球（万位）的号码 小于 第五球（个位）的号码。如：第一球开出 2，第五球开出 6、第一球开出 6，第五球开出 8、第一球开出 1，第五球开出 5...开奖为虎，投注虎者视为中奖，其它视为不中奖。</p>
        <div class="text-blue-500">和：</div>
        <p>
          开奖第一球（万位）的号码 等于 第五球（个位）的号码。如：2XXX2、6XXX6、8XXX8...开奖为和，投注和者视为中奖，其它视为不中奖。
        </p>


        <div class="font-bold text-red-500">7、牛牛玩法</div>
        <div class="text-blue-500">牛牛：</div>
        <p>三个号码的总和为10的倍数，另外两个号码的总和也为10的倍数，如开奖结果： 1 ，2 ，7 ，4 ，6。</p>
        <div class="text-blue-500">牛1~牛9：</div>
        <p>三个号码的总和为10的倍数，另外两个号码的总和除以10余几为牛几，如开奖结果： 1 ，2 ，7 ，4 ，5为牛9。</p>
        <div class="text-blue-500">无牛：</div>
        <p>
          任意三个号码的总和都不为10的倍数，如开奖结果为：1，2，6，9，8为无牛
        </p>
        <div class="text-blue-500">牛大：</div>
        <p>
          牛6，牛7，牛8，牛9，牛牛 为 牛大
        </p>
        <div class="text-blue-500">牛小：</div>
        <p>牛1，牛2，牛3，牛4，牛5 为 牛小</p>
        <div class="text-blue-500">牛单：</div>
        <p>牛1，牛3，牛5，牛7，牛9 为 牛单</p>
        <div class="text-blue-500">牛双：</div>
        <p>牛2，牛4，牛6，牛8，牛牛 为 牛双</p>
      </div>
    </van-dialog>
</template>
<script lang="ts" setup>
import { ref, toRefs, watch } from "vue";
const props = defineProps<{ descriptionTitle: string, descriptionShow: boolean }>();
const { descriptionTitle, descriptionShow } = toRefs(props);
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
</style>