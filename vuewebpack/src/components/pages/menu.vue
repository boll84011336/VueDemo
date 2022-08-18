<template>
  <div class="hello"> 
		<ul class="nav mr-auto">
			<li class="nav-item">
					<router-link class="nav-link" to="/page/">child</router-link>
			</li>
			<li class="nav-item">
					<router-link class="nav-link" to="/page/child2">child2</router-link>
			</li>
			<li class="nav-item">
					<router-link class="nav-link" to="/page/child3">child3</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>


