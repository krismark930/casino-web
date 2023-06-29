<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot v-if="this.bettingOrderData['gameType'] == 'FT'" :name="header">
          足球 {{ this.bettingOrderData['title'] }}
        </slot>
        <slot v-if="this.bettingOrderData['gameType'] == 'BK'" :name="header">
          篮球 {{ this.bettingOrderData['title'] }}
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>
      <van-loading color="#1989fa" class="loading-position" v-if="loading" size="40" />
      <section class="modal-body">
        {{ this.bettingOrderData['league'] }}
      </section>

      <section class="modal-body" v-if="this.bettingOrderData.title.includes('让球')">
        {{ this.bettingOrderData['mbTeam'] }} <Font color="red">{{ this.bettingOrderData.text.replace("+",
          "").replace("-", "") }}</Font> {{ this.bettingOrderData['tgTeam'] }} <Font color="red">({{
    this.bettingOrderData.m_ball }}:{{ this.bettingOrderData.t_ball }})</Font>
      </section>
      <section class="modal-body" v-else>
        {{ this.bettingOrderData['mbTeam'] }} <Font color="red">VS</Font> {{ this.bettingOrderData['tgTeam'] }} <Font
          color="red">({{ this.bettingOrderData.m_ball }}:{{ this.bettingOrderData.t_ball }})</Font>
      </section>

      <section class="modal-body" v-if="this.bettingOrderData.title.includes('大小') || this.bettingOrderData.title.includes('大/小')">
        <Font color="red">{{ this.bettingOrderData['text'] }}</Font> @ <Font color="red">{{
          this.bettingOrderData['rate'] }}</Font>
      </section><section class="modal-body" v-if="this.bettingOrderData.title.includes('单双') || this.bettingOrderData.title.includes('单/双')">
        <Font color="red">{{ this.bettingOrderData['text'] }}</Font> @ <Font color="red">{{
          this.bettingOrderData['rate'] }}</Font>
      </section>
      <section class="modal-body" v-else-if="this.bettingOrderData.title.includes('独赢')">
        <template v-if="this.bettingOrderData['selectedTeam'] != undefined && this.bettingOrderData.selectedTeam != ''">
          <Font color="red">{{ this.bettingOrderData['selectedTeam'] }}</Font> @ <Font color="red">{{
            this.bettingOrderData['rate'] }}</Font>
        </template>
        <template v-else>
          <Font color="red">{{ this.bettingOrderData.text }}</Font> @ <Font color="red">{{
            this.bettingOrderData['rate'] }}</Font>
        </template>
      </section>
      <section class="modal-body" v-else>
        <Font color="red">{{ this.bettingOrderData['selectedTeam'] }}</Font> @ <Font color="red">{{
          this.bettingOrderData['rate'] }}</Font>
      </section>
      <section class="modal-body">
        <div class="list_input">
          <input type="text" placeholder="输入投注金额" v-model="bettingValue" @focus="showpanel">
          <div>
            <span class="win_text green">可贏金額： {{ winValue }}</span>
            <span class="max">单注最高： 50000</span>
            <span class="min">单注最低： 10</span>
          </div>
        </div>
      </section>
      <div v-if="openKeyboard" class="grid-container">
        <button class="item1" value="1" @click="addValue($event)">1</button>
        <button class="item2" value="2" @click="addValue($event)">2</button>
        <button class="item3" value="3" @click="addValue($event)">3</button>
        <button class="item4" value="4" @click="addValue($event)">4</button>
        <button class="item5" value="5" @click="addValue($event)">5</button>
        <button class="item6" value="6" @click="addValue($event)">6</button>
        <button class="item7" value="7" @click="addValue($event)">7</button>
        <button class="item8" value="8" @click="addValue($event)">8</button>
        <button class="item9" value="9" @click="addValue($event)">9</button>
        <button class="item10" @click="backSpace"><i class="material-icons">backspace</i></button>
        <button class="item11" value="0" @click="addValue($event)">0</button>
        <button class="item12" value="." @click="addValue($event)">.</button>
        <button class="item13" value="100" @click="addValue($event)">+100</button>
        <button class="item14" value="1000" @click="addValue($event)">+1000</button>
        <button class="item15" @click="setValue">关闭</button>
      </div>
      <footer class="modal-footer">
        <div class="footer_btns">
          <button type="button" class="btn-green" @click="bettingOrder">
            确定交易
          </button>
          <button type="button" class="btn-green" @click="saveTempData">
            加单
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>
  
<script lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import { bettingStore } from '@/stores/betting';
import router from "@/router";
import { showToast } from 'vant';
export default {
  name: 'Modal',
  setup() {
    const { dispatchUserMoney } = useAuthStore();
    const {
      dispatchBettingInplay,
      setBetSlip,
      dispatchBettingToday,
      dispatchBettingChampion,
      dispatchBKBettingInplay,
      setBKBetSlip,
      dispatchBKBettingToday,
      dispatchBKBettingChampion,
      dispatchBettingTemp } = bettingStore();

    return {
      dispatchBettingInplay,
      dispatchBettingToday,
      setBetSlip,
      dispatchBettingChampion,
      dispatchUserMoney,
      dispatchBettingTemp,
      dispatchBKBettingInplay,
      dispatchBKBettingToday,
      setBKBetSlip,
      dispatchBKBettingChampion,
    };
  },
  props: {
    bettingOrderData: {},
    bettingType: ""
  },
  data() {
    return {
      bettingValue: "",
      openKeyboard: false,
      winValue: "",
      loading: false
    }
  },
  mounted() {
    console.log(this.bettingOrderData);
  },
  computed: {
    success: function () {
      const { getSuccess } = bettingStore();
      return getSuccess;
    },
    token: function () {
      const { getToken } = useAuthStore();
      return getToken;
    },
    user: function () {
      const { getUser } = useAuthStore();
      return getUser;
    },
    errMessage: function () {
      const { getErrMessage } = bettingStore();
      return getErrMessage;
    }
  },
  watch: {
    bettingValue: function (value) {
      let changedRate = Number(this.bettingOrderData["rate"]) >= 2 ? Number(this.bettingOrderData["rate"]) : Number(this.bettingOrderData["rate"]) + 1
      if (value == 0) {
        this.winValue = "";
        this.bettingValue = "";
      } else if (value >= 50000) {
        this.bettingValue = 50000;
      }
      this.winValue = (value * (changedRate - 1)).toFixed(2);
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    async bettingOrder() {
      if (this.user.id == undefined) {
        showToast('你必须先登录。')
        router.push("login")
        return;
      }
      if (this.user.Status == 1) {
        showToast("您的帐户已禁用。")
        return;
      }
      if (this.bettingValue > this.user.Money) {
        showToast('下注金额不可大于信用额度。')
      } else {
        let data = {
          id: this.user.id,
          gold: Number(this.bettingValue),
          m_id: this.bettingOrderData['mID'],
          type: this.bettingOrderData["selectedType"],
          line_type: this.bettingOrderData['lineType'],
          odd_f_type: this.bettingOrderData['oddFType'],
          active: this.bettingOrderData['active'],
          order_rate: Number(this.bettingOrderData['rate']),
          r_type: this.bettingOrderData['r_type']
        }
        console.log(data);
        if (this.bettingValue > 10) {
          this.loading = true;
          if (this.bettingOrderData['gameType'] === "BK") {
            switch (this.bettingType) {
              case "Inplay":
                await this.dispatchBKBettingInplay(data, this.token);
                break;
              case "Today":
                await this.dispatchBKBettingToday(data, this.token);
                break;
              case "Early":
                await this.dispatchBKBettingToday(data, this.token);
                break;
              case "Champion":
                await this.dispatchBKBettingChampion(data, this.token);
                break;
            }
          } else {
            switch (this.bettingType) {
              case "Inplay":
                await this.dispatchBettingInplay(data, this.token);
                break;
              case "Today":
                await this.dispatchBettingToday(data, this.token);
                break;
              case "Early":
                await this.dispatchBettingToday(data, this.token);
                break;
              case "Champion":
                await this.dispatchBettingChampion(data, this.token);
                break;
            }
          }
          if (this.success) {
            this.dispatchUserMoney(this.bettingValue);
            showToast('操作成功。')
          } else {
            showToast(this.errMessage);
          }
          this.loading = false;
          this.$emit('close');
        } else if (this.bettingValue == 0 || this.bettingValue == "") {
          showToast("请输入投注金额。")
        } else {
          showToast("最低投注额是 RMB 10.")
        }
      }
    },
    async saveTempData() {
      this.loading = true;
      let data = {
        show_type: this.bettingOrderData["show_type"],
        type: this.bettingOrderData["selectedType"],
        title: this.bettingOrderData["title"],
        league: this.bettingOrderData["league"],
        m_team: this.bettingOrderData["mbTeam"],
        t_team: this.bettingOrderData["tgTeam"],
        select_team: this.bettingOrderData["selectedTeam"],
        odd_f_type: this.bettingOrderData['oddFType'],
        text: this.bettingOrderData["text"],
        gold: this.bettingValue,
        m_win: this.winValue,
        id: this.user.id,
        m_id: this.bettingOrderData["mID"],
        g_type: this.bettingOrderData["gameType"],
        line_type: this.bettingOrderData["lineType"],
        active: this.bettingOrderData['active'],
        order_rate: Number(this.bettingOrderData['rate']),
        r_type: this.bettingOrderData['r_type'],
        m_date: this.bettingOrderData['m_date'],
        m_start: this.bettingOrderData['m_start'],
        m_ball: this.bettingOrderData["m_ball"],
        t_ball: this.bettingOrderData["t_ball"],
        m_type: this.bettingOrderData["mType"],
      }
      // await this.dispatchBettingTemp(data);
      // if (this.success) {
      //   showToast('添加成功。');
      // } else {
      //   showToast('添加失败。');
      // }
      // if (this.bettingOrderData["gameType"] === "BK") {
      //   this.setBKBetSlip(data);
      // } else {
      this.setBetSlip(data);
      // }
      this.loading = false;
      this.$emit('close');
    },
    showpanel() {
      this.openKeyboard = true;
      document.onkeydown = function (e) {
        return false;
      }
    },
    setValue() {
      this.openKeyboard = false;
    },
    backSpace() {
      this.bettingValue = Number(this.bettingValue.toString().substr(0, this.bettingValue.length - 1));
    },
    addValue(e) {
      switch (e.target.value) {
        case '100':
          this.bettingValue += 100
          break
        case '1000':
          this.bettingValue += 1000
          break
        default:
          this.bettingValue += e.target.value
      }
    }
  },
};
</script>

<style scoped lang="scss">
.loading-position {
  margin-top: 100px;
  position: absolute;
  left: 50%;
}

.modal-backdrop {
  position: sticky;
  font-size: 12px;
  top: 0;
  bottom: 6%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 100%;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 10px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 10px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  width: 48%;
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}

.list_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 0;

  input {
    width: 150px;
    padding: 10px 0 10px 7px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 5px;
    font-size: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    font-size: 13px;

    .win_text {
      margin-top: 8px;
    }

    .max {
      color: #4EABFF;
    }

    .min {
      color: red;
    }
  }

  .list_input_left {
    flex-direction: row;
    align-items: center;

    span {
      font-size: 17px;
      margin-left: 5px;
    }
  }
}

.footer_btns {
  display: flex;
  justify-content: space-between;

  button {
    height: 30px;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #6e6e79;
}

.grid-container>button {
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  padding: 10px 0;
  font-size: 15px;
  color: white;
}</style>