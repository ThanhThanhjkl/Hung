import App from '@/App.vue';
import defaultLayout from '@/layouts/default.vue';
import accountSettings from '@/pages/account-settings.vue';
import dashboard from '@/pages/dashboard.vue';
import login from '@/pages/login.vue';
import register from '@/pages/register.vue';
import tables from '@/pages/tables.vue';
import vuetify from '@/plugins/vuetify'; // Assume this is where you import and configure Vuetify
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/register',
            name: 'register',
            component: register,
        },
        {
            path: '/',
            component: defaultLayout, // Specify the layout component
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: dashboard,
                    // Other dashboard route configurations
                },
                {
                    path: '/account-settings',
                    name: 'account-settings',
                    component: accountSettings,
                    // Other dashboard route configurations
                },
                {
                    path: '/tables',
                    name: 'tables',
                    component: tables,
                    // Other dashboard route configurations
                },
            ]
        },
    ],
})

app.use(router)
app.use(vuetify) // Use Vuetify plugin
app.mount('#app')
