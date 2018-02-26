<template>
   <div id="app">
    	<img src="../../../src/assets/logo.png">
    </div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	created(){
		this.$http({
			url:'/api/login',
			method:'post'
		}).then((res)=>{
			console.log(res)
		})
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
