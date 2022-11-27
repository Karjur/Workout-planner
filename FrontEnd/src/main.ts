import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'virtual:windi.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import './assets/global.css'
import router from './router';
import "./styles/style.scss";
import DialogService from 'primevue/dialogservice';
import ui from "./components/UI/index";
import { setApiUrl } from './modules/api';

const app = createApp(App);

app.use(createPinia());
app.use(DialogService);
app.use(PrimeVue);
ui.forEach(u => {
    app.component(u.name, u);
})

app.component('Datepicker', Datepicker);
app.use(router);

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Datepicker', Datepicker);

app.mount('#app');

setApiUrl("https://localhost:5000/")

export default {
    // ...
    components: {
      Datepicker
    }
    // ...
  }