import { createRouter, createWebHistory } from 'vue-router';
import Game from '@/views/game/Game.vue';
import MainPage from '@/views/game/Main.vue';
import BattlePage from '@/views/game/Battle.vue';
import EquipmentPage from '@/views/game/Equipment.vue';
import InventoryPage from '@/views/game/Inventory.vue';
import AboutPage from '@/views/about/About.vue';

const routes = [
    {
        path: '/',
        redirect: '/game',
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
        children: [
            { 
                path: 'main', 
                name: 'MainPage', 
                component: MainPage 
            },
            { 
                path: 'battle', 
                name: 'BattlePage', 
                component: BattlePage 
            },
            { 
                path: 'equipment', 
                name: 'EquipmentPage', 
                component: EquipmentPage 
            },
            { 
                path: 'inventory', 
                name: 'InventoryPage', 
                component: InventoryPage 
            },
        ],
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;