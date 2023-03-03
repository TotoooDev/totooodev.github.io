<script setup>
</script>

<template>
    <div class="centered">
        
        <h1><img src="../assets/toto.png" alt="Hey, it's me!"/> Hi!</h1>
        <p>I'm Tom, a computer science student.</p>
        <p>You can take a look at my projects <a href="https://github.com/TotoooDev" target="_blank">here</a>!</p>
    </div>
</template>

<style scoped>
.centered {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    width: 2em;
    border-radius: 100%;
    vertical-align: middle;
}

p {
    font-size: 150%;
    text-align: center;
}

a:visited {
    color: whitesmoke;
}
</style>
