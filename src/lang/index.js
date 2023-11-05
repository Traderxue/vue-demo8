import {createI18n} from 'vue-i18n'

import zh from './zh.js'
import zh_hk from './zh_hk.js'
import en from './en.js'

const i18n = createI18n({
    locale:'zh',
    legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
    globalInjection: true, // 全局注册$t方法
    messages:{
        zh,
        zh_hk,
        en
    }
})

export default i18n