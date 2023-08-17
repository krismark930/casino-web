<template>
    <div class="w-full text-[10px]">
        <div class="flex h-[34px] w-full border-b border-gray-300">
            <div
                class="w-[100px] flex items-center justify-center border-r border-gray-300"
            >
                期号
            </div>
            <div class="w-full flex-cols items-center justify-between">
                <p
                    class="border-b border-gray-300 w-full text-center py-[1.5px]"
                >
                    {{headerTitle}}
                </p>
                <div class="flex justify-between">
                    <div
                        v-for="(item, index) in dataList[0].values.length"
                        :key="index"
                        class="w-full h-full border-r border-gray-300 text-center"
                    >
                        {{ index }}
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full text-[10px]">
            <div
                class="flex justify-between"
                :class="[index % 2 === 1 ? ' bg-white' : 'bg-[#f4faff]']"
                v-for="index in 16"
                :key="index"
            >
                <div class="w-[100px] h-[23px] border-r border-gray-300">
                    <div
                        v-if="dataList[index - 1]"
                        class="w-full flex items-center justify-center h-[23px]"
                    >
                        {{ dataList[index - 1].day }}
                    </div>
                </div>
                <div class="w-full">
                    <div
                        v-if="dataList.length > index - 1"
                        class="flex justify-between h-[23px]"
                    >
                        <p
                            class="w-full h-full border-r border-gray-300 flex items-center justify-center"
                            v-for="(subItem, subIndex) in dataList[index - 1]
                                .values"
                            :key="subIndex"
                            :class="[
                                    subItem.bg === 'transparent'
                                        ? ''
                                        : 'point z-10'
                                ]"
                        >
                            <span
                                :style="{ 'background-color': subItem.bg }"
                                :class="[
                                    subItem.bg === 'transparent'
                                        ? 'text-black'
                                        : 'text-white'
                                ]"
                                class="rounded-full p-[1px] px-[2.5px]"
                                >{{ subItem.bg === 'transparent' ? '' : '0'
                                }}{{ subItem.value }}
                            </span>
                        </p>
                    </div>

                    <div v-else class="flex justify-between h-[23px]">
                        <p
                            class="w-full h-full border-r border-gray-300 flex items-center justify-center"
                            v-for="(subItem, subIndex) in dataList[0].values.length"
                            :key="subIndex"
                        ></p>
                    </div>
                </div>
                <div class="line bg-red-500 text-black h-[1px] absolute" ></div>
            </div>
        </div>
        <div
            class="h-[34px] bg-[#2674ff] justify-center flex items-center text-white rounded-b-md shadow-lg"
        >
            关闭
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, toRefs } from 'vue';

const data = defineProps<{dataList:Array<any> ,headerTitle:string}>();
const {dataList, headerTitle} = toRefs(data);

const drawLind = (point1: any, point2: any, line: any) => {
    
    console.log(line)
    // Find the points based off the elements left and top
    var p1 = { x: (point1 as any).offsetLeft, y: (point1 as any).offsetTop };
    var p2 = { x: (point2 as any).offsetLeft, y: (point2 as any).offsetTop };

    // Get distance between the points for length of line
    var a = p1.x - p2.x;
    var b = p1.y - p2.y;
    var length = Math.sqrt(a * a + b * b);

    // Get angle between points
    var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

    // Get distance from edge of point to center
    var pointWidth = point1.clientWidth / 2;
    var pointHeight = point1.clientWidth / 2;
    // Set line distance and position
    // Add width/height from above so the line starts in the middle instead of the top-left corner
    var radian = angleDeg* Math.PI/180
    var moveY = (length/2) * Math.sin(radian);
    var moveX = length/2 - (length/2) * Math.cos(radian);
    (line as any).style.width = length + 'px';
    (line as any).style.left = p1.x - moveX + pointWidth + 'px';
    (line as any).style.top = p1.y  + moveY + pointHeight + 'px';
    
    console.log(moveX);
    // Rotate line to match angle between points
    (line as any).style.transform = 'rotate(' + angleDeg + 'deg)';
}

onMounted(() => {

    for(var i = 0; i < document.getElementsByClassName('point').length -1 ; i++){
        drawLind(document.getElementsByClassName('point')[i] ,document.getElementsByClassName('point')[i+1], document.getElementsByClassName('line')[i]);
    }
});
</script>
