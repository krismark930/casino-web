import { createI18n } from 'vue-i18n'

import { messages } from './lang/index.js'

// 通过选项创建 VueI18n 实例
export const i18n = createI18n({
  locale: 'en',
  allowComposition: true, 
  messages: messages
})
