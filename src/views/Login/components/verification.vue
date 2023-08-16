<template>
    <div>
        <!-- <div v-show="!confirmSuccess" class="drag-wrapper" ref="dragDiv">
            <div class="drag_bg"></div>
            <div class="drag_text f14">
                <p>{{ confirmWords }}</p>
            </div>
            <div
                ref="moveDiv"
                @touchmove="move($event)"
                :class="{ handler_ok_bg: confirmSuccess }"
                class="handler handler_bg"
            ></div>
        </div>
        <div v-show="confirmSuccess" class="drag_ok">
            <img src="../../../assets/images/login/verification2.png" alt="" />
            <p>验证通过</p>
        </div> -->
    </div>
    <!-- @touchstart="mousedownFn($event)" -->
    <!-- @touchstart="down" @touchmove="move" @touchend="end" -->
</template>

<script setup lang="ts">
// export default {
//   data() {
//     return {
//       beginClientX: 0 /*距离屏幕左端距离*/,
//       mouseMoveStata: false /*触发拖动状态  判断*/,
//       maxwidth: "" /*拖动最大宽度，依据滑块宽度算出来的*/,
//       confirmWords: "点击按钮进行验证" /*滑块文字*/,
//       confirmSuccess: false /*验证成功判断*/,
//     };
//   },
//   mounted() {
//     this.maxwidth =
//       this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth - 13;
//     document
//       .getElementsByTagName("html")[0]
//       .addEventListener("touchmove", this.mouseMoveFn);
//     document
//       .getElementsByTagName("html")[0]
//       .addEventListener("touchend", this.moseUpFn);
//   },
//   methods: {
//     move(e) {
//       // console.log(e.targetTouches[0].clientX)
//       var w = e.targetTouches[0].clientX - 13;

//       let width = e.targetTouches[0].clientX - this.beginClientX;
//       if (width > 0 && width <= this.maxwidth) {
//         document.getElementsByClassName("handler")[0].style.left = width + "px";
//         document.getElementsByClassName("drag_bg")[0].style.width =
//           width + 13 + "px";
//       } else if (width > this.maxwidth) this.successFunction();
//     },
//     //mousedoen 事件
//     successFunction() {
//       // console.log("1111")
//       this.confirmSuccess = true;
//       this.confirmWords = "验证通过";
//       this.$emit("onValidation", true);
//       if (window.addEventListener) {
//         document
//           .getElementsByTagName("html")[0]
//           .removeEventListener("touchmove", this.mouseMoveFn);
//         document
//           .getElementsByTagName("html")[0]
//           .removeEventListener("mouseup", this.moseUpFn);
//       } else
//         document
//           .getElementsByTagName("html")[0]
//           .removeEventListener("mouseup", () => {});
//       document.getElementsByClassName("drag_text")[0].style.color = "#fff";
//       document.getElementsByClassName("handler")[0].style.left =
//         this.maxwidth + "px";
//       document.getElementsByClassName("drag_bg")[0].style.width =
//         this.maxwidth + "px";
//     },
//   },
// };
</script>

<style scoped lang="scss">
.drag_ok {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: 44px;
    width: 100%;
    border-radius: 44px;
    border: 1px solid #e8e8e8;
    img {
        width: 23px;
        height: 23px;
        margin-left: 13px;
    }
    p {
        font-size: 14px;
        color: #00870d;
        margin-left: 14px;
    }
}
.drag-wrapper {
    position: relative;
}
.drag {
    position: relative;
    background-color: #e8e8e8;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.handler {
    width: 23px;
    height: 23px;
    position: absolute;
    top: 10px;
    left: 13px;
}
.handler_bg {
    background: url('../../../assets/images/login/verification1.png');
    background-size: cover;
}
.handler_ok_bg {
    background: url('../../../assets/images/login/verification1.png');
    background-size: cover;
}
.drag_bg {
    background-color: #7ac23c;
    height: 44px;
    width: 0px;
    border-radius: 44px;
    position: relative;
    z-index: 2;
}
.drag_text {
    position: absolute;
    background-color: #caced8;
    height: 44px;
    border-radius: 44px;
    top: 0px;
    width: 100%;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    p {
        line-height: 44px;
        margin-left: 50px;
        color: #ffffff;
        font-size: 14px;
    }
}
</style>
