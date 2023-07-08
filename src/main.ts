import { createApp } from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";
import "./assets/scss/index.scss";
import "animate.css";
import "amfe-flexible";
import { DatePicker } from 'vant';
import { Loading } from 'vant';
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import socket from "@/utils/socket";
import { Collapse, CollapseItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Pagination } from 'vant';
import { Icon } from 'vant';
import { Col, Row } from 'vant';
import { CountDown } from 'vant';
import { Popup } from 'vant';
import { NumberKeyboard } from 'vant';
import { Form, Field } from 'vant';
import { i18n } from '@/i18n';
import { createHead } from '@vueuse/head'
// 引入element-plus
import ElementPlus from 'element-plus'
import './assets/style/element-variables.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHatWizard } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);
library.add(faHatWizard);
const app = createApp(App);
const head = createHead()
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia().use(piniaPersist));
app.use(router);
app.use(Vant);
app.use(i18n);
app.use(DatePicker);
app.use(Loading);
app.use(Collapse);
app.use(CollapseItem);
app.use(Cell);
app.use(CellGroup);
app.use(Icon);
app.use(Col);
app.use(Row);
app.use(Popup);
app.use(NumberKeyboard);
app.use(Pagination);
app.use(CountDown);
app.use(Form);
app.use(Field);
app.use(ElementPlus);
app.use(socket);
app.use(head)
app.provide('i18n', i18n)
app.mount("#app");
