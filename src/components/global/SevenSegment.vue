<template>
    <div id="vertical-center">
        <div id="clock-container">
            <div
                id="display-1"
                class="display-container display-size-12 display-no-0"
            >
                <div class="segment-x segment-a">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-b">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-c">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-d">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-e">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-f">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-g">
                    <span class="segment-border"></span>
                </div>
            </div>
            <div
                id="display-2"
                class="display-container display-size-12 display-no-1"
            >
                <div class="segment-x segment-a">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-b">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-c">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-d">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-e">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-f">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-g">
                    <span class="segment-border"></span>
                </div>
            </div>
            <div
                id="display-3"
                class="display-container display-size-12 display-no-2"
            >
                <div class="segment-x segment-a">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-b">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-c">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-d">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-e">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-f">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-g">
                    <span class="segment-border"></span>
                </div>
            </div>
            <div
                id="display-4"
                class="display-container display-size-12 display-no-3"
            >
                <div class="segment-x segment-a">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-b">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-c">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-d">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-e">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-f">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-g">
                    <span class="segment-border"></span>
                </div>
            </div>
            <div
                id="display-5"
                class="display-container display-size-12 display-no-4"
            >
                <div class="segment-x segment-a">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-b">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-c">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-d">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-e">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-f">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-g">
                    <span class="segment-border"></span>
                </div>
            </div>
            <div
                id="display-6"
                class="display-container display-size-12 display-no-5"
            >
                <div class="segment-x segment-a">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-b">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-c">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-d">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-e">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-y segment-f">
                    <span class="segment-border"></span>
                </div>
                <div class="segment-x segment-g">
                    <span class="segment-border"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
var currentdisplayNo = 0;
var display1 = document.getElementById('display-1');
var display2 = document.getElementById('display-2');
var display3 = document.getElementById('display-3');
var display4 = document.getElementById('display-4');
var display5 = document.getElementById('display-5');
var display6 = document.getElementById('display-6');

function zeroFill(string: string, length: number) {
    for (var i = 0, l = length - string.length; i < l; i++) {
        string = '0' + string;
    }
    return string;
}

function setdisplays() {
    var d = new Date();
    var h = zeroFill(d.getHours().toString(), 2);
    var m = zeroFill(d.getMinutes().toString(), 2);
    var s = zeroFill(d.getSeconds().toString(), 2);

    var baseClass = 'display-container display-size-12 display-no-';

    // display1.className = baseClass + h[0];
    // display2.className = baseClass + h[1];
    // display3.className = baseClass + m[0];
    // display4.className = baseClass + m[1];
    // display5.className = baseClass + s[0];
    // display6.className = baseClass + s[1];

    //document.body.style.backgroundColor = '#' + (s + m + h).toString(16);
}

setInterval(setdisplays, 1000);
setdisplays();
</script>
<style>
.clear {
    clear: both;
}

.display-container.display-size-12 {
    margin-bottom: 24px;
}

.display-container {
    position: relative;
    margin-right: 24px;
    float: left;
}

.display-container div.segment-x,
.display-container div.segment-y {
    position: absolute;
}

.display-container span.segment-border {
    display: block;
    position: absolute;
}

.display-container.display-size-12 {
    width: 122px;
    height: 220px;
}

.display-container.display-size-12 .segment-x {
    width: 72px;
    left: 13px;
    border-bottom: 12px solid #000;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
}

.display-container.display-size-12 .segment-x .segment-border {
    top: 12px;
    left: -12px;
    right: -12px;
    border-top: 12px solid #000;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
}

.display-container.display-size-12 .segment-y {
    height: 72px;
    width: 0;
    border-right: 12px solid #000;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
}

.display-container.display-size-12 .segment-y .segment-border {
    position: relative;
    left: 12px;
    height: 72px;
    margin-top: -12px;
    border-left: 12px solid #000;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
}

.display-container.display-size-12 .segment-a {
    top: 0;
}

.display-container.display-size-12 .segment-b {
    top: 13px;
    left: 98px;
}

.display-container.display-size-12 .segment-c {
    top: 111px;
    left: 98px;
}

.display-container.display-size-12 .segment-d {
    top: 196px;
}

.display-container.display-size-12 .segment-e {
    top: 111px;
    left: 0px;
}

.display-container.display-size-12 .segment-f {
    top: 13px;
    left: 0px;
}

.display-container.display-size-12 .segment-g {
    top: 98px;
}

.display-no-1 .segment-a,
.display-no-1 .segment-d,
.display-no-1 .segment-e,
.display-no-1 .segment-f,
.display-no-1 .segment-g {
    /*display: none;*/
    opacity: 0.1;
    filter: alpha(opacity=10);
}

.display-no-2 .segment-c,
.display-no-2 .segment-f {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-3 .segment-e,
.display-no-3 .segment-f {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-4 .segment-a,
.display-no-4 .segment-d,
.display-no-4 .segment-e {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-5 .segment-b,
.display-no-5 .segment-e {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-6 .segment-b {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-7 .segment-d,
.display-no-7 .segment-e,
.display-no-7 .segment-f,
.display-no-7 .segment-g {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-8 {
}

.display-no-9 .segment-e {
    /*display: none;*/
    opacity: 0.1;
}

.display-no-0 .segment-g {
    /*display: none;*/
    opacity: 0.1;
}

/* clock */

#display-2,
#display-4 {
    margin-right: 60px;
}

#vertical-center {
    position: absolute;
    height: 0;
    top: 50%;
    left: 50%;
}

#clock-container {
    margin-top: -110px;
    margin-left: -462px;
    width: 924px;
    height: 220px;
}

#clock-container .display-container:last-child {
    margin: 0;
}

#clock-container:after {
    display: block;
    content: '.';
    visibility: hidden;
    clear: both;
}
</style>
