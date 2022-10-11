<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
    dialog{
        margin: 0;
        position: fixed;
        top: 5vh;
        width: 40%;
        left: 2%;
        background-color: rgb(239, 239, 239);
        font-size: medium;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        border: 0.5px solid rgb(215, 215, 215)

    }
</style>