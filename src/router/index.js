import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/Views/HomeView.vue'
import JobsView from '@/Views/JobsView.vue';
import NotFoundView from '@/Views/NotFoundView.vue';
import JobView from '@/Views/JobView.vue';
import AddJobView from '@/Views/AddJobView.vue';
import EditJobVue from '@/Views/EditJobVue.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.Base_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobVue
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
        
    ]
});

export default router