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
import router from './router';
import "./styles/style.scss";
import DialogService from 'primevue/dialogservice';
import ui from "@/components/UI/index";

const app = createApp(App);

app.use(createPinia());
app.use(DialogService);
app.use(PrimeVue);
ui.forEach(u => {
    app.component(u.name, u);
})
app.use(router);

app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app');
