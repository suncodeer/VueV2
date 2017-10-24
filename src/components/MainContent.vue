<template>
	<div id="content">
		main content{{msg}}
		message has been changd as we want
	</div>
</template>

<script>
export default {
	name: 'MainContent',
	data() {
		return {
			'msg': 'Your message from data function'
		}
	}
}
</script>
<style scoped>
	
</style>