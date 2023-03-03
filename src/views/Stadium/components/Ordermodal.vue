<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot v-if="this.type=='FT'" :name="header">
            足球 {{this.title}}
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </header>
  
        <section class="modal-body">
            {{this.league}}
         </section>

        <section class="modal-body">
            {{this.m_team}} VS {{this.t_team}}
         </section>

        <section class="modal-body">
            {{this.select_team}} {{this.rate.text}} @ {{this.rate.num}}
         </section>
        <section class="modal-body">
            <div class="list_input">
						<input type="text" placeholder="输入投注金额" v-model="input_value" @focus="showpanel">
						<div>
							<span v-if="input_value" class="grey">可赢额</span>
							<span v-if="input_value<=20000" class="win_text green">{{Number(input_value)*Number(this.rate.num)}}</span>
							<span v-if="input_value==20000" class="max">最大投注金额 20000</span>
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
          <button class="item15" @click="setValue">OK</button>
        </div>
        <footer class="modal-footer">
            <div class="footer_btns">

                <button
                  type="button"
                  class="btn-green"                  
                  :disabled="this.is_status"
                  @click="bet"
                >
                  Bet
                </button>
                <button
                  type="button"
                  class="btn-green"
                  @click="close"
                >
                  Close
                </button>
            </div>
        </footer>
      </div>
    </div>
  </template>
  
<script>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';
import axios from "axios";
import config from "@/config"
export default {
  name: 'Modal',
  props: {
    mid: 0,
    type: "",
    m_team: "",
    t_team: "",
    select_team: "",
    line: 0,
    g_type: "",
    title: "",
    rate: 0,
    league: ""
  },
  data() {
    return {
        input_value: '',
        openKeyboard: false,
        value_s: '',
        vaiue_n: 0,
        is_status: true,
        userData: []
    }
  },
  mounted() {
      const {
          getToken,
          getUser,
      } = storeToRefs(useAuthStore());
      this.userData=getUser.value;
  },
  methods: {
    close() {
      this.$emit('close');
    },
    async bet() {
      try {
        let url = config.api.BET_FT;
        let data = {
          id : this.userData.id,
          gold : this.value_n,
          gid : this.mid,
          type : this.g_type,
          line_type : this.line,
          active : 1
        }
        console.log(data);
        if(this.input_value != ''){
          const response = (await axios.post(url, data)).data
          console.log(response)
          this.userData.Money = response.data
          return response;
        }
      }catch (e) {
        return e;
      }
     },
    showpanel() {
      this.openKeyboard = true;
      document.onkeydown = function (e) 
      {
        return false;
      }
    },
    setValue() {
      this.openKeyboard = false;
      if(this.input_value != '') {
        this.is_status = false;
      }
    },
    backSpace() {
      this.value_s = this.value_s.substr(0, this.value_s.length-1)
      this.value_n = Number(this.value_s)
      this.input_value = this.value_s
    },
    addValue(e) {
      switch (e.target.value){
        case '100': 
          this.value_n += 100
          this.value_s = String(this.value_n)
          this.input_value = this.value_s
          break
        
        case '1000': 
          this.value_n += 1000
          this.value_s = String(this.value_n)
          this.input_value = this.value_s
          break
        
        default:
          this.value_s += e.target.value
          this.value_n = Number(this.value_s)
          this.input_value = this.value_s
      }
      if (this.value_n > 20000) {
        this.value_n = 20000
        this.value_s = '20000'
        this.input_value = '20000'
      }
    }
  },
};
</script>

<style scoped lang="scss">
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

    .grid-container > button {
      background-color: rgba(255, 255, 255, 0);
      text-align: center;
      padding: 10px 0;
      font-size: 15px;
      color: white;
    }
</style>