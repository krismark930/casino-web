import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import messages from './lang/index.js'

// 通过选项创建 VueI18n 实例
export default new VueI18n({
  locale: 'cn', // 设置地区
  messages, // 设置地区信息
})
