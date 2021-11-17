<template>
    <button :class="['nh-button', type, isClick ? 'nh-button-click' : '']" @click="click">
        <slot></slot>
    </button>
</template>

<script setup>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },

    data() {
        return {
            isClick: true,
            timer: null,
        }
    },

    methods: {
        click() {
            this.timer && clearTimeout(this.timer)
            this.isClick = false
            setTimeout(() => this.isClick = true, 0);
            this.timer = setTimeout(() => this.isClick = false, 1400);
            this.$emit('click')
        }
    }

}

</script>

<style scoped>
.nh-button {
    position: relative;
    margin: 0 4px;
    padding: 4px 15px;
    border: 1px solid transparent;
    border-radius: 2px;
    border-color: #d9d9d9;
    box-shadow: 0 2px #0000000b;

    background-color: #fefefe;

    font-size: 14px;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);

    transition: 0.3s;
    cursor: pointer;
}

.nh-button-click::after {
    position: absolute;
    inset: 0;
    content: "";

    border-radius: 2px;
    box-shadow: 0 0 0 6px transparent;
    opacity: 0.2;

    animation: fadeEffect 1.4s;
    animation-fill-mode: forwards;
}

@keyframes fadeEffect {
    0% {
        box-shadow: 0 0 0 0px #1890ff;
        opacity: 0.2;
    }

    15% {
        box-shadow: 0 0 0 6px #1890ff;
        opacity: 0.05;
    }

    100% {
        box-shadow: 0 0 0 6px;
        opacity: 0;
    }
}

.primary {
    background-color: #1890ff;
    border-color: #1890ff;
    color: #fefefe;
}

.primary:active {
    background-color: #096dd9;
    border-color: #096dd9;
}
</style>