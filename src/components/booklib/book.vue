<template>
	<div class="book-container">
		<div class="header-container">
			<div class="header">
				<div class="desc">
					<img width="60" height="60" class="logo" src="../../assets/image/logo.jpg" alt="">
					<div class="content">
						<p class="school-name">北京交通大学(威海)</p>
						<p class="small">实验室预约平台</p>
					</div>
				</div>
				<div class="student-info">
					<div class="great">您好&nbsp;&nbsp;学生{{studentname}}</div>
					<div class="log-out">
						<p class="iconfont">&#xe609;&nbsp;退出</p>
					</div>
				</div>
			</div>
		</div>
		<div class="main">
			<TabBar></TabBar>
			<div class="main-view">
				<router-view></router-view>
			</div>
			
		</div>
		
	</div>

</template>

<script>
	import TabBar from './TabBar.vue'
	export default {
		data() {
			return {
				studentname: '李明',
				id : '17711034',
				address : 'weihai'
			}
		},
		components : {
			TabBar
		}
	}
</script>

<style>
	.book-container .header-container {
		width: 100%;
		background-color: #f3f5f7;
	}

	.book-container .header-container .header {
		display: flex;
		height: 1.6rem;
		width: 1080px;
		justify-content: space-between;
		margin: 0 auto;
	}

	.book-container .header-container .header .desc {
		display: flex;
	}

	.book-container .header-container .header .desc .logo {
		margin-top: .2rem;
	}

	.book-container .header-container .header .desc .content {
		padding-top: .55rem;
		display: flex;
		padding-left: .2rem;
		line-height: .5rem;
		font-size: .48rem;
	}

	.book-container .header-container .header .desc .content .small {
		padding-top: .09rem;
		padding-left: .1rem;
		font-size: .30rem;
	}

	.book-container .header-container .header .student-info {
		display: flex;
		line-height: 1.6rem;
		font-size: .24rem;
	}

	.book-container .header-container .header .student-info .log-out .iconfont {
		padding-left: .2rem;
		font-size: .24rem;
		color: rgb(240, 20, 20);
	}

	.book-container .main {
		width: 1080px;
		margin: .4rem auto 0;
		display: flex;
	}

	.book-container .main .slide-bar {
		flex: 0 0 2.4rem;
		height: 8rem;
		background-color: #ececec;
	}
	.book-container .main .slide-bar .item .title{
		height: .8rem;
		display: flex;
		line-height: .8rem;
		padding-left: .3rem;
		justify-content: flex-start;
		font-size: .24rem;
		color: #888;
		border-bottom: 1px solid #e0e0e0;
	}
	.book-container .main .slide-bar .item .title .iconfont{
		font-size: .28rem;
	}
	.book-container .main .slide-bar .item .inner-list .inner-item{
		height: .8rem;
		padding-left: .7rem;
		line-height: .8rem;
		text-align: left;
		font-size: .24rem;
		border-bottom: 1px solid #e0e0e0;
		cursor: pointer;
		transition: background-color 0.1s linear; 
	}
	/* .book-container .main .slide-bar .item .inner-list .inner-item:hover{
		background-color: #ccc;
	} */
	.book-container .main .active{
		background-color: #f55d54;
		color: #fff8f7;
	}
	.book-container .main .main-view{
		width: 100%;
		margin-left: .3rem;
	}
</style>
