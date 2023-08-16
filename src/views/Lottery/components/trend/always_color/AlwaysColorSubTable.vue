<template>
    <div style="margin-top: 60px; margin-bottom: 42px;">
        <div style="float: right; margin-right: 20px;">
            <el-form-item>
                <el-button type="danger" @click="showAlwaysColorMainTable">
                    返回上一页
                </el-button>
            </el-form-item>
        </div>
        <el-table v-loading="loading" :data="mainBetResultList" stripe style="width: 100%;">
            <el-table-column prop="order_sub_num" label="订单号" width="100">
            </el-table-column>
            <el-table-column prop="lottery_name" label="彩票类别">
            </el-table-column>
            <el-table-column prop="qishu" label="彩票期号">
            </el-table-column>
            <el-table-column prop="rtype_str" label="投注玩法"></el-table-column>
            <el-table-column prop="content_name" label="投注内容"></el-table-column>
            <el-table-column prop="bet_money_one" label="投注金额">
            </el-table-column>
            <el-table-column prop="fs" label="反水">
            </el-table-column>
            <el-table-column prop="bet_rate_one" label="赔率">
            </el-table-column>
            <el-table-column prop="win_sub" label="可赢金额">
            </el-table-column>
            <el-table-column prop="money_result" label="会员结果">
            </el-table-column>
            <el-table-column prop="bet_time" label="投注时间">
            </el-table-column>
            <el-table-column prop="z_user" label="状态">
                <template #default="scope">
                    <font color="#0000FF" v-if="scope.row.status == 0"> 未结算</font>
                    <font color="#FF0000" v-if="scope.row.status == 1">已结算</font>
                    <font color="#FF0000" v-if="scope.row.status == 2">已重算</font>
                    <font color="#FFcccc" v-if="scope.row.status == 3">作废</font>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, toRefs } from 'vue';
import { ElLoading } from 'element-plus'
import { lotteryResultStore } from "@/stores/lottery_result";
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import router from '@/router';
import { showToast } from 'vant';

const props = defineProps<{ g_type: string, status: any, s_time: string }>();
const { g_type, status, s_time } = toRefs(props);

const emit = defineEmits<{
    (e: 'showAlwaysColorMain'): void,
}>()

const { dispatchSubBetResult } = lotteryResultStore();
const loading = ref(false);

const showAlwaysColorMainTable = () => {
    emit("showAlwaysColorMain");
}

const mainBetResultList = computed(() => {
    const { getMainBetResultList } = storeToRefs(lotteryResultStore());
    return getMainBetResultList.value;
})
const user = computed(() => {
    const { getUser } = storeToRefs(useAuthStore());
    return getUser.value;
})
const token = computed(() => {
    const { getToken } = storeToRefs(useAuthStore());
    return getToken.value;
})
onMounted(async () => {
    if (user.value.id == undefined) {
        showToast('你必须先登录。')
        router.push("login")
        return;
    }
    const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchSubBetResult({ g_type: g_type.value, status: status.value, s_time: s_time.value }, token.value);
    loading.close();
})
</script>
<style scoped>
.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2000;
}
</style>