<script setup>
import { ref } from 'vue';
import axios from 'axios';
const email = ref('');
const password = ref('');
</script>
<template>
    <div class="login-container">
        <h1>Login</h1>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
            <div class="signup">
                <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
            </div>
            <div class="forgot-password">
                <p><a href="#">Forgot Password</a></p>
            </div>
        </form>
    </div>
</template>
<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.login-container h1 {
    text-align: center;
    margin-bottom: 20px;
}
.login-container form {
    display: flex;
    flex-direction: column;
}
.login-container label {
    margin-bottom: 5px;
    font-weight: bold;
}
.login-container input {
    margin-bottom: 15px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
.login-container button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
.login-container button:hover {
    background-color: #218838;
}
.signup, .forgot-password {
    text-align: center;
}
.signup a, .forgot-password a {
    color: #007bff;
    text-decoration: none;
}
.signup a:hover, .forgot-password a:hover {
    text-decoration: underline;
}


</style>