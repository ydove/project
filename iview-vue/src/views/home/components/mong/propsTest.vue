<template>
	<div class="propsTest">
		<ul>
			<li v-for='item in propsTest'>{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['propsTest'],
		data(){
			return{}
		},
		mounted:function(){
			console.log(this.propsTest);
		}
	}
</script>

<style></style>