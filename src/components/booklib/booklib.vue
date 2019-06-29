<template>
	<div>
		<div class="booklib-container">
			<div class="title">
				<p>实</p>
				<p>验</p>
				<p>室</p>
				<p>预</p>
				<p>约</p>
			</div>
			<div class="book-info">
				<el-form ref="form">
					<ul class="form-list">
						<li class="info">
							<el-form-item label="实验室名称">
								<el-select placeholder="—请选择—" v-model="userInfo.libName">
									<el-option class="input" label="实验室804" @click="changeLibHandle('实验室804')" value="实验室804"></el-option>
									<el-option label="实验室805" @click="changeLibHandle('实验室805')" value="实验室805"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="申请人">
								<el-input v-model="userInfo.name" placeholder="请输入姓名"></el-input>
							</el-form-item>
							<el-form-item label="申请人电话">
								<el-input v-model="userInfo.tel" @blur="show" placeholder="请输入电话"></el-input>
							</el-form-item>
						</li>

						<li class="item">
							<el-form-item label="所需设备">
								<el-input v-model="userInfo.equipment" placeholder="请输入实验所需设备"></el-input>
							</el-form-item>
						</li>

						<li class="item">
							<el-form-item label="所需材料">
								<el-input placeholder="请输入实验所需材料" v-model="userInfo.materials"></el-input>
							</el-form-item>
						</li>
						<li class="item">
							<el-form-item label="课程名称">
								<el-input placeholder="请输入课程名称" v-model="userInfo.projectName"></el-input>
							</el-form-item>
						</li>
						<li class="item info teacher">
							<el-form-item label="任课老师">
								<el-input v-model="userInfo.teacherInfo.name" placeholder="请输入教师姓名"></el-input>
							</el-form-item>
							<el-form-item label="任课老师联系方式">
								<el-input v-model="userInfo.teacherInfo.tel" placeholder="请输入联系方式"></el-input>
							</el-form-item>
							<el-form-item label="使用人数">
								<el-input class="totalnum" placeholder="请输入使用人数" v-model="userInfo.totalNum"></el-input>
							</el-form-item>
							
						</li>
					</ul>
				</el-form>
				<div class="week-container">
					<div class="book-time">
						<p class="content">预约时间</p>
						<div class="time-box">
							<div class="book-time-item" v-for="(item,index) of currentCheckedArr" :key="index">
								<span class="badge" @click="deleteCheck(item.id,index)">X</span>
								<p class="time-content">{{item.content}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<week @func="getCurrentChecked" ref="week"></week>
		</div>

</template>

<script>
	import week from './weekchoice.vue'
	export default {
		data() {
			return {
				currentCheckedArr : [],
				userInfo: {
					libName: '',
					name: '',
					tel: '',
					materials: '',
					equipment: "",
					projectName: '',
					teacherInfo: {
						name: '',
						tel: ''
					},
					totalNum: ''
				},
				deleteId : ''
			}
		},
		methods: {
			show() {
				console.log(this.userInfo)
			},
			changeLibHandle(libName) {
				this.userInfo.libName = libName
			},
			getCurrentChecked(obj){
				let flag =true;
				this.currentCheckedArr.forEach((item,i)=>{
					if(item.id == obj.id){
						this.currentCheckedArr.splice(i,1);
						flag = false;
						return;
					}
				})
				
				if(flag){
					this.currentCheckedArr.push(obj)
				}
				
				
			},
			deleteCheck(id,index){
				this.currentCheckedArr.splice(index,1);
				this.$refs.week.ChangeCurrentCheck(id,true); 
			}
		},
		components: {
			week
		}
	}
</script>

<style>
	.booklib-container {
		display: flex;
	}

	.booklib-container .title {
		padding-top: 1.1rem;
		width: .8rem;
		background-color: #b7b6b6;
		text-align: center;
		height: 2.9rem;
	}

	.booklib-container .title p {
		line-height: .36rem;
	}

	.booklib-container .book-info {
		/* flex: 1; */
		padding-left: .2rem;
		font-size: .18rem !important;
	}



	.booklib-container .book-info .el-form-item {
		display: flex;
		margin-left: .3rem;
		height: .48rem;
	}

	/* 	.booklib-container .book-info .info .el-input__inner {
		height: .6rem;
		line-height: .6rem;
		width: 3rem;
	} */

	.booklib-container .book-info .el-form-item:nth-child(1) {
		margin-left: 0;
	}

	.booklib-container .book-info .el-form-item__label {
		padding-top: .3rem;
		font-size: .24rem;
		line-height: .25rem;
	}

	.booklib-container .book-info .item {
		margin-top: .05rem;
		padding-left: .24rem;
		border-bottom: 1px solid #e0e0e0;
	}

	.booklib-container .book-info .item .el-input__inner {
		width: 295%;
	}

	.booklib-container .book-info .info {
		display: flex;
		border-bottom: 1px solid #e0e0e0;
	}

	.booklib-container .book-info .info .el-input__inner,
	.booklib-container .book-info .el-input__inner {
		height: .6rem;
		line-height: .6rem;
		width: 3rem;
	}

	.booklib-container .book-info .teacher .el-input__inner {
		width: 2.65rem;
	}

	.booklib-container .book-info .book-time {
		display: flex;
		width: 10rem;
		padding-left: .24rem;
		/* height: .8rem; */
		line-height: .8rem;
		font-size: .24rem;
		border-bottom: 1px solid #ccc;

	}
	
	.booklib-container .book-info .book-time .time-box{
		display: flex;
		flex-wrap: wrap;
	}

	.booklib-container .book-info .book-time .time-box .book-time-item {
		position: relative;
		height: .4rem;
		margin-top: .2rem;
		margin-left: .15rem;
		line-height: .4rem;
		padding: 0 .1rem;
		border: 1px solid #ccc;
		border-radius: 3px;
	}

	.booklib-container .book-info .book-time .time-box .book-time-item .badge {
		position: absolute;
		right: -.12rem;
		top: -.12rem;
		background-color: #000;
		width: .22rem;
		height: .22rem;
		line-height: .22rem;
		border-radius: 50%;
		text-align: center;
		color: #fff;
		cursor: pointer;
	}

	/* 	<div class="book-time">
		<p class="content">预约时间</p>
		<div class="book-time-item">
			<span class="badge">X</span>
			<p class="time-content">第八周/星期一/14:00-18:00</p>
		</div>
		<div class="book-time-item">
			<span class="badge">X</span>
			<p class="time-content">第八周/星期一/14:00-18:00</p>
		</div>
	</div> */
</style>
