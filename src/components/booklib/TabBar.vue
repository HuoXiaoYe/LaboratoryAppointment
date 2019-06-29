<template>
	<ul class="slide-bar">
		<li class="item">
			<div class="title">
				<i class="iconfont">&#xe6df;</i>&nbsp;<p class="content">实验室预约</p>
			</div>
			<ul class="inner-list">
				<router-link tag="li" to="/book/booklib" class="inner-item">实验室预约</router-link>
				<router-link tag="li" to="/book/mybook" class="inner-item">我的预约</router-link>
			</ul>
		</li>
		<li class="item">
			<div class="title">
				<i class="iconfont">&#xe6e7;</i>&nbsp;<p class="content">实验管理</p>
			</div>
			<ul class="inner-list">
				<li class="inner-item">规章制度</li>
			</ul>
		</li>
	</ul>
</template>

<script>
</script>

<style>
	.main .slide-bar {
		flex: 0 0 2.4rem;
		height: 8rem;
		background-color: #ececec;
	}
	.main .slide-bar .item .title{
		height: .8rem;
		display: flex;
		line-height: .8rem;
		padding-left: .3rem;
		justify-content: flex-start;
		font-size: .24rem;
		color: #888;
		border-bottom: 1px solid #e0e0e0;
	}
	.main .slide-bar .item .title .iconfont{
		font-size: .28rem;
	}
</style>
