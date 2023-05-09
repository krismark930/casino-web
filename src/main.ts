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
import VueSocketIO from 'vue-3-socket.io';
import { SOCKET_URL } from "@/config";
import { Collapse, CollapseItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Col, Row } from 'vant';
import { Popup } from 'vant';

import { i18n } from '@/i18n'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHatWizard } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret);
library.add(faHatWizard);
const app = createApp(App);
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
app.use(
    new VueSocketIO({
        debug: true,
        connection: SOCKET_URL,
    })
);
app.provide('i18n', i18n)
app.mount("#app");
