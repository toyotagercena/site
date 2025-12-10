<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-lg-and-up">
            <v-list>
                <v-list-tile v-for="(item, i) in menuItems" :key="`navdrawer${i}`" :to="item.route" @click.stop="scrollUpLogout(item);">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar app>
            <v-toolbar-side-icon @click.stop="drawerClick" class="hidden-lg-and-up">
                <v-icon v-html='`reorder`'></v-icon>
            </v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title>
                    TOYODA на Герцена <br>
                    <a></a><!-- затычка чтоб первый номер не перебивала основная хреф -->
                    Магазин: <a href="tel:244640" style="text-decoration: none; color: white">24-46-40</a> |
                    СТО: <a href="tel:+79136338216" style="text-decoration: none; color: white">33-82-16</a> | 
                    <v-icon color="green">{{ 'fab fa-whatsapp' }}</v-icon>
                    +7(953)398-9565
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-md-and-down">
                <v-btn flat v-for="(item, i) in menuItems" :key="'menuItem'+i" :to="item.route" @click.stop="scrollUpLogout(item);">
                    <div v-if="windowWidth < 1450">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-icon left v-html="item.icon" :color="item.color" v-on="on" size="250%"></v-icon>
                            </template>
                        <span v-html="item.title"></span>
                        </v-tooltip>
                    </div>
                    <div v-else>
                        <v-icon left v-html="item.icon" :color="item.color"></v-icon>
                        {{item.title}}
                    </div>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                drawer: false,
                windowWidth: window.innerWidth
            }
        },
        mounted() {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            }
        },
        computed:{
            isAuth(){
                return this.$store.getters.getToken !== '';
            },
            menuItems(){
                return this.isAuth
                ?[
                    {
                        icon: 'fa-home',
                        title: 'Главная',
                        route: '/'
                    },
                    {
                        icon: 'fa-cog',
                        title: 'Сервис',
                        route: '/service'
                    },
                    {
                        icon: 'fa-info',
                        title: 'Полезно',
                        route: '/polezno'
                    },
                    {
                        icon: 'fa-tachometer-alt',
                        title: 'Регламент ТО',
                        route: '/to'
                    },
                    {
                        icon: 'fa-address-book',
                        title: 'Контакты',
                        route: '/contacts'
                    },
                    //{
                    //    icon: 'fa-shopping-basket',
                    //    title: 'Распродажа',
                    //    route: '/sale',
                    //    color: 'blue'
                    //},
                    // {
                    //     icon: 'account_circle',
                    //     title: 'Профиль',
                    //     route: '/profile',
                    //     color: 'blue-grey'
                    // },
                    // {
                    //     icon: 'exit_to_app',
                    //     title: 'Выйти',
                    //     route: ''
                    // }
                ]
                :[
                    {
                        icon: 'fa-home',
                        title: 'Главная',
                        route: '/'
                    },
                    {
                        icon: 'fa-cog',
                        title: 'Сервис',
                        route: '/service'
                    },
                    {
                        icon: 'fa-info',
                        title: 'Полезно',
                        route: '/polezno'
                    },
                    {
                        icon: 'fa-tachometer-alt',
                        title: 'Регламент ТО',
                        route: '/to'
                    },
                    {
                        icon: 'fa-address-book',
                        title: 'Контакты',
                        route: '/contacts'
                    },
                    {
                        icon: 'fa-shopping-basket',
                        title: 'Распродажа',
                        route: '/sale',
                        color: 'blue'
                    },
                    // {
                    //     icon: 'assignment_ind',
                    //     title: 'Войти',
                    //     route: '/login'
                    // },
                    // {
                    //     icon: 'lock_open',
                    //     title: 'Регистрация',
                    //     route: '/reg'
                    // }
                ]
            }
        },
        methods:{
            scrollUpLogout(item){
                window.scrollTo(0, top);
                if(item.title === 'Выйти'){
                    this.$store.commit('delToken');
                    this.$router.push('/')
                }
            },
            drawerClick(){
                this.drawer = !this.drawer;
                window.scrollTo(0, top);
            }
        }
    }
</script>
