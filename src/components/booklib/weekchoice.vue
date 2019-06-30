<template>
  <div class="week-container">
    <div class="week-search">
      <p class="content">请选择查询周次</p>
      <ul class="week-search-list">
        <li
          class="week-search-item"
          v-for="(item,index) of week"
          :key="index"
          :class="{active : item == weekActive}"
          @click="changeActiveWeek(item)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="week-view">
      <div class="header">
        <ul class="header-list">
          <li class="header-item" style="border-left : 1px solid #ccc">时间日期</li>
          <li class="header-item" v-for="(item,index) of weekData" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="week-main">
        <!-- 定义左侧时间段 -->
        <ul class="timeInterval">
          <li class="interval-item">08:10-11:10</li>
          <li class="interval-item">14:00-17:00</li>
        </ul>

        <!-- 所有的时间选择组件 -->
        <div class="choice-container">
          <week-ul :data="$store.state.data.Mon" WeekDay="Mon" :week="weekActive"></week-ul>
          <week-ul :data="$store.state.data.Tues" WeekDay="Tues" :week="weekActive"></week-ul>
          <week-ul :data="$store.state.data.Wed" WeekDay="Wed" :week="weekActive"></week-ul>
          <week-ul :data="$store.state.data.Thurs" WeekDay="Thurs" :week="weekActive"></week-ul>
          <week-ul :data="$store.state.data.Fri" WeekDay="Fri" :week="weekActive"></week-ul>
          <week-ul :data="$store.state.data.Sat" WeekDay="Sat" :week="weekActive"></week-ul>
          <week-ul :data="$store.state.data.Sun" WeekDay="Sun" :week="weekActive"></week-ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weekUl from "./weekUl.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      checkedTime: {},
      week: [8, 9, 10, 11, 12, 13, 14, 15, 16],
      weekActive: 8,
      weekData: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ]
    };
  },
  methods: {
    ...mapMutations(["show"]),
    changeActiveWeek(week) {
      this.weekActive = week;
    }
  },
  created() {
    // this.$axios
    //   .get("http://10.128.10.189:8000/book/applyTime/json/list")
    //   .then(data => {
    //     this.msg = data.data;
    //     this.getInfoAboutChoice();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.show();
  },
  components: {
    weekUl
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "msg2"
  ])
};
</script>

<style scoped="scoped">
.week-container {
  margin-left: 1.1rem;
}

.week-container .week-search {
  display: flex;
}

.week-container .week-search .content {
  line-height: 1.2rem;
}

.week-container .week-search .week-search-list {
  display: flex;
}

.week-container .week-search .week-search-list .week-search-item {
  margin: 0.3rem 0 0 0.1rem;
  width: 0.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border: 1px solid #f55d54;
  color: #f55d54;
  cursor: pointer;
}

.week-container .week-search .week-search-list .active {
  background-color: #f55d54;
  color: #fff;
}

.week-container .week-view .header .header-list {
  display: flex;
}

.week-container .week-view .header .header-list .header-item {
  width: 1.6rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
}

.week-container .week-view .week-main {
  display: flex;
}

.week-container .week-view .timeInterval .interval-item {
  width: 1.6rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  /* border: 1px solid #ccc;  */
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
}
.week-container .week-view .choice-container {
  display: flex;
}
</style>
