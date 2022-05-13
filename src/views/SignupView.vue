<template>
    <div>
        <p>Let's make an account!</p>
        <input type="text" placeholder="username"><br>
        <input type="password" placeholder="password"><br>
        <button>Sign Up</button>
        <span>or go back to <router-link to='/login'>login</router-link></span>
    </div>
</template>

<script>
export default ({
    name: "signUp",
    data() {
        return{}
    },
    methods: {}
})
</script>

<style scoped>
.signUp {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 10px;
    font-size: 11px;
}
</style>