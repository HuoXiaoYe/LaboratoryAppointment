<template>
	<div class="mybook-container">
		<h3 class="title">预约信息</h3>
		<div class="no-book">
			<p>对不起，您暂时没有任何预约信息</p>
		</div>
		<ul class="book-list">
			
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.mybook-container {
		
	}
	.mybook-container .title{
		padding-bottom: .2rem;
		border-bottom: 2px solid #ccc;
	}
	.mybook-container .no-book{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: .4rem;
		height: 4rem;
		border: 1px solid #ccc;
	}
</style>
