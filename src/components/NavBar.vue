<script setup>
</script>

<template>
    <nav>
		<ul>
			<li>
				<router-link to="/">Home</router-link>
			</li>
            <li>
				<router-link to="/durian">Durian</router-link>
			</li>
			<li>
				<router-link to="/about">About me</router-link>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
}

li a {
    font-size: 140%;
    display: block;
    text-align: center;
    padding: 1em;
}
</style>
