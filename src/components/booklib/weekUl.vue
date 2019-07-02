<template>
    <ul class="time-list">
      <li @click="handleClick('timeDif1',WeekDay,data.timeDif1.state)" 
	  :class="['time-item',getClass(data.timeDif1.state)]" 
	  v-mouseover v-mouseout>{{data.timeDif1.state >=2? "&#xe683;":""}}</li>
      <li @click="handleClick('timeDif2',WeekDay,data.timeDif2.state)" 
	  :class="['time-item',getClass(data.timeDif2.state)]" 
	  v-mouseover v-mouseout></li>
      <!-- <week-li v-show="data.d7" :item="data.d7"></week-li> -->
	  <!-- {{data.timeDif1.state ==5? 'hasChecked':''}} -->
    </ul>
</template>



<script>
export default {
	props : ['data','WeekDay',"week"],
	methods : {
		// 根据传过来的状态值，返回不同的类，为其绑定不同的样式
		getClass(state){
			// state number
			switch(state){
				case 0: 
					return "grey";
					break;
				case 1:
					return "white";
					break;
				case 2:
				case 3:
					return "red iconfont"
					break;
				case 5:
					return "hasChecked";
					break;
			}
		},
		// 当点击按钮的时候，为当前元素添加样式
		handleClick(interval,WeekDay,state){
			// 状态值为1或者5的才会执行函数
			if(state==1|| state == 5){
				let obj = {interval,WeekDay,week:this.week};
				this.$store.commit("changeState",obj)
			}
		}
		
	},
	directives : {
		// 当鼠标移入的时候，提示用户 ‘点击选中’
		mouseover : {
			inserted(el){
				el.onmouseover = function(){
					// 判断当前元素是不是可以被选中
					let classList = el.getAttribute("class");
					if(classList.includes("white")&&!classList.includes("hasChecked")){
						// 为当前元素添加样式
						el.classList.add("hover")
					}

				}
			}
		},
		mouseout:{
			inserted(el){
				el.onmouseout = function(){
					// 判断当前元素是不是可以被选中
					//el.getAttribute("class").includes("white");
					if(el.getAttribute("class").includes("hover")){
						// 为当前元素添加样式
						el.classList.remove("hover")
					}

				}
			}
		}
	}
};
</script>

<style scoped="scoped">
.time-list .time-item {
  position: relative;
  width: 1.6rem;
  height: .8rem;
  line-height: 1rem;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
  font-size: .24rem;
}

/* .time-list .time-item .mask {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background-color: #f55d54;
  color: #fff;
} */

/* 设置单元格状态的类样式 */
.time-list .red{
	font-size: .24rem;
	line-height: .8rem;
	background-color: #f55d54;
	color: #fff;
	cursor: not-allowed;
	position: relative;
}
.time-list .red::after{
	content : "已被预约";
	/* position: absolute;
	top: -1px;
	left: -1px;
	right: -1px;
	bottom: -1px; */
	
}
.time-list .grey{
	background-color: #eee;
	cursor: not-allowed;
}
.time-list .white{
	background-color: none;
}
.time-list .hover{
	position: relative;
}
.time-list .hover::after{
	position: absolute;
	top: -1px;
	left: -1px;
	right: -1px;
	bottom: -1px;
	content : "点击选中";
	background-color: rgba(245, 93, 84, .6);
	color: #fff;
	line-height: .8rem;
	font-size: .24rem;
	box-sizing: border-box
}
/* 元素被选中的样式 */
.hasChecked::after{
	position: absolute;
	top: 0px;
	left: 0px;
	right: -0.5px;
	bottom: 0px;
	content : "已选中";
	/* background-color: rgba(245, 93, 84); */
	background-color: green;
	color: #fff;
	line-height: .8rem;
	font-size: .24rem;
}




</style>
