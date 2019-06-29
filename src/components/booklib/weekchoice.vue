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
        <week-ul :data="$store.state.data.Mon"></week-ul>
        <week-ul :data="$store.state.data.Tues"></week-ul>
        <week-ul :data="$store.state.data.Wed"></week-ul>
        <week-ul :data="$store.state.data.Thurs"></week-ul>
        <week-ul :data="$store.state.data.Fri"></week-ul>
        <week-ul :data="$store.state.data.Sat"></week-ul>
        <week-ul :data="$store.state.data.Sun"></week-ul>
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
    },
    ChangeCurrentCheck(obj, flag) {
      this.currentChecked[obj.checked] = !this.currentChecked[obj.checked];
      if (!flag) {
        let week = this.getWeek();
        let day = this.getDay(obj.checked[1]);
        let mornOrafter = this.getMornOrafter(obj.checked[2]);

        var str = `第${week}周/星期${day}/${mornOrafter}`;

        var obj = {
          id: obj.checked,
          content: str
        };
        this.$emit("func", obj);
      }
    },
    getWeek() {
      switch (this.weekActive) {
        case 8:
          return "八";
        case 9:
          return "九";
        case 10:
          return "十";
        case 11:
          return "十一";
        case 12:
          return "十二";
        case 13:
          return "十三";
        case 14:
          return "十四";
        case 15:
          return "十五";
        case 16:
          return "十六";
      }
    },
    getDay(num) {
      switch (num) {
        case "1":
          return "一";
        case "2":
          return "二";
        case "3":
          return "三";
        case "4":
          return "四";
        case "5":
          return "五";
      }
    },
    getMornOrafter(id) {
      switch (id) {
        case "1":
          return "09:00-11:00";
        case "2":
          return "14:00-17:00";
      }
    },
    getInfoAboutChoice() {
      var newObj = {};
      for (let i in this.msg) {
        if (!newObj[i]) {
          newObj[i] = {};
        }
        for (let j in this.msg[i]) {
          let color = "";
          switch (this.msg[i][j]) {
            case "0":
              color = "gray";
              break;
            case "1":
              color = "red";
              break;
            case "2":
              color = "yellow";
              break;
            case "3":
              color = "blue";
              break;
          }

          newObj[i][j] = {
            class: color,
            checked: false
          };
        }
      }
      this.aaa = newObj;
      console.log(this.aaa);
    }
  },
  created() {
    this.$axios
      .get("http://10.128.10.189:8000/book/applyTime/json/list")
      .then(data => {
        this.msg = data.data;
        this.getInfoAboutChoice();
      })
      .catch(err => {
        console.log(err);
      });
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

.week-container .week-view .week-main{
	display: flex;
}
/* .week-container .week-view .timeInterval{

	} */

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
.week-container .week-view .choice-container{
	display: flex;
}
</style>
