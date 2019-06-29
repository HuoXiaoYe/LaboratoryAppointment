<template>
    <ul class="time-list">
      <li :class="['time-item',getClass(data.timeDif1.state)]">{{data.timeDif1.state >=2 ? "&#xe683;":""}}</li>
      <li :class="['time-item',getClass(data.timeDif2.state)]"></li>

      <!-- <week-li v-show="data.d7" :item="data.d7"></week-li> -->
    </ul>
</template>



<script>
export default {
	props : ['data'],
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
}

.time-list .time-item .mask {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background-color: #f55d54;
  color: #fff;
}

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
	content : "已被预约"
}
.time-list .grey{
	background-color: #eee;
	cursor: not-allowed;
}
.time-list .white{
	background-color: none;
}



</style>
