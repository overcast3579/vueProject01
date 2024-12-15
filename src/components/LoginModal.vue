<template>
    <div class="modalOverlay" @click.self="closeModal">
        <div class="modalContent">
            <button class="closeButton" @click="closeModal">×</button>
            <h2>登入</h2>
            <form @submit.prevent="handleLogin">
                <div class="formGroup">
                    <label for="username">帳號</label>
                    <input
                        type="text"
                        id="username"
                        v-model="username"
                        required
                    />
                </div>
                <div class="formGroup">
                    <label for="password">密碼</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        required
                    />
                </div>
                <div class="modalActions">
                    <button type="submit" class="submitButton">登入</button>
                    <button
                        type="button"
                        class="registerButton"
                        @click="handleRegister"
                    >
                        申請帳號
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginModal",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
        handleLogin() {
            alert(`登入帳號: ${this.username}`);
            this.closeModal();
        },
        handleRegister() {
            alert("跳轉到註冊頁面");
        },
    },
};
</script>

<style scoped>
.modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modalContent {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: relative;
}

.closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.modalContent h2 {
    margin-top: 0;
}

.formGroup {
    margin-bottom: 15px;
}

.formGroup label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.formGroup input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.modalActions {
    display: flex;
    justify-content: space-between;
}

.submitButton {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
}

.registerButton {
    background-color: #6c757d;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
