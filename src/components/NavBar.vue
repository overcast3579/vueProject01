<template>
    <nav>
        <div class="navCenter">
            <router-link to="/game" class="navButton">Game</router-link>
            <router-link to="/about" class="navButton">About</router-link>
        </div>
        <button class="loginButton" @click="showLoginModal = true">
            登入
        </button>
        <!-- 登入 -->
        <LoginModal v-if="showLoginModal" @close="showLoginModal = false" />
    </nav>
</template>

<script>
import LoginModal from "./LoginModal.vue";

export default {
    name: "NavBar",
    components: {
        LoginModal,
    },
    data() {
        return {
            showLoginModal: false,
        };
    },
};
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 15px;
}

.navCenter {
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.navButton {
    color: #fff;
    background-color: #555;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.navButton:hover {
    background-color: #777;
    transform: scale(1.1);
    cursor: pointer;
}

.navButton.router-link-exact-active {
    background-color: #009688;
}

.loginButton {
    color: #fff;
    background-color: #007bff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.loginButton:hover {
    background-color: #0056b3;
}
</style>