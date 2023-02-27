<template>
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
            {{this.m_team}} {{this.rate.text}} @ {{this.rate.num}}
         </section>
        <section class="modal-body">
            <div class="list_input">
						<input type="text" placeholder="输入投注金额" v-model="input_value">
						<div>
							<span v-if="input_value" class="grey">可赢额</span>
							<span v-if="Number(input_value)>20000" class="max">最大投注金额 20000</span>
							<span v-if="Number(input_value)<=20000" class="win_text green">{{Number(input_value)*Number(this.rate.num)}}</span>
							<span v-else="Number(input_value)<=20000" class="win_text green">{{20000*Number(this.rate.num)}}</span>
						</div>
					</div>
         </section>
  
        <footer class="modal-footer">
            <div class="footer_btns">

                <button
                  type="button"
                  class="btn-green"
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
export default {
  name: 'Modal',
  props: {
    type: "",
    m_team: "",
    t_team: "",
    title: "",
    rate: 0,
    league: ""
  },
  data() {
    return {
        input_value: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    bet() {
        alert("really?")
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
</style>