<template>
<div>
    <!--    导航栏-->
    <NavBar></NavBar>
    <aside class="slide d-none d-md-block">
        <!--  图片轮播   -->
        <pic-slide></pic-slide>
    </aside>
    <!--  main start  -->
    <main>
        <div class="container">
            <div class="row">
                <div class="span10 col-md-12 col-lg-9">
                    <!--主体内容-->
                    <function-list></function-list>
                </div>
                <div class="span2 d-none d-lg-block ">
                    <!--边栏内容-->
                </div>
            </div>
        </div>
        <aside class="w-25"></aside>
    </main>
    <!--    main end -->
    <!--    footer stard -->
    <Footer></Footer>

</div>
</template>

<script>
import NavBar from "components/content/nav/NavBar";
import PicSlide from "components/content/index/slide/PicSlide";
import Footer from "../../components/content/footer/Footer";
import Function from "components/common/function/Function";
import FunctionList from "../../components/content/index/funlist/FunctionList";
import {mapGetters} from 'vuex'

export default {
    name: 'Index',
    components: {
        NavBar,
        PicSlide,
        Footer,
        Function,
        FunctionList
    },
    data() {
        return {

        }
    },
    computed: {
        // ...mapGetters({
        //     currentQuery: "admin/power/currentQuery"
        // })
    },
    mounted() {
        this.$store.dispatch('admin/power/loadAll')
        this.$store.dispatch('admin/power/loadQuery', {uId:32}).then(() => {
            window.console.log(this.$store.state.admin.power.query)
        })
        // let data = [{
        //     id:23,
        //     pid:2,
        //     uid:32
        // },{
        //     pid:1,
        //     uid:32
        // },{
        //     pid:5,
        //     uid:32
        // }]
        // this.$store.commit('admin/power/updateUp',data)
        // this.$store.dispatch('admin/power/updateUserPowers').then(res=>window.console.log(res))

    }
};
</script>

<style scoped>
@import url('~@/assets/css/index.css');
</style>
