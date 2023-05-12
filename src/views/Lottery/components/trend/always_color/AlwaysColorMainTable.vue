<template>
    <div style="margin-top: 60px; margin-bottom: 42px;">
        <el-form :inline="true" class="demo-form-inline" style="text-align: center;">
            <el-form-item label="日期:" style="margin-right: 0px;">
              <el-select v-model="selectedDay" style="width: 120px; margin-right: 2px;">
                <el-option
                  v-for="item in dayOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button type="primary" @click="getResultByDate">确定</el-button>
              <el-button type="danger" @click="showSubTableByStatus">未结算注单</el-button>
            </el-form-item>
        </el-form>
        <el-table v-loading="loading" :data="mainBetResultList" :summary-method="getSummaries" show-summary stripe
            style="width: 100%;">
            <el-table-column label="游戏名称" width="100">
                <template #default="scope">
                    <font color="red" @click="showSubTable(scope.row.g_type)"><b>{{ scope.row.lottery_type }}</b></font>
                </template>
            </el-table-column>
            <el-table-column prop="bet_money" label="下注金额"></el-table-column>
            <el-table-column prop="bet_money_0" label="未结算金额"></el-table-column>
            <el-table-column prop="win_money" label="结果"></el-table-column>
        </el-table>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { ElLoading } from 'element-plus'
import { lotteryResultStore } from "@/stores/lottery_result";
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import moment from 'moment-timezone';
import router from '@/router';
import { showToast } from 'vant';
import type { TableColumnCtx } from 'element-plus'

const emit = defineEmits<{
    (e: 'showAlwaysColorSubTable', data: any): void,
    (e: 'showSubTableByStatus', data: any): void,
}>()

const { dispatchTotalBetResult } = lotteryResultStore();

const loading = ref(false);

const selectedDay = ref(moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"));

const dayOptions = ref([]);

const getResultByDate = async () => {
    const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchTotalBetResult({s_time: selectedDay.value}, token.value);
    loading.close();    
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
const showSubTable = (g_type: string) => {
    emit("showAlwaysColorSubTable", {g_type: g_type, s_time: selectedDay.value});
}
const showSubTableByStatus = () => {
    emit("showSubTableByStatus", {s_time: selectedDay.value});
}
interface BetResult {
    lottery_type: string
    bet_money: number
    bet_money_0: number
    win_money: number
}
interface SummaryMethodProps<T = BetResult> {
    columns: TableColumnCtx<T>[]
    data: T[]
}
const getSummaries = (param: SummaryMethodProps) => {
    const { columns, data } = param
    const sums: string[] = []
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = '小计'
            return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => Number.isNaN(value))) {
            sums[index] = `${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)}`
        } else {
            sums[index] = ''
        }
    })

    return sums
}
onMounted(async () => {
    if (user.value.id == undefined) {
        showToast('你必须先登录。')
        router.push("login")
        return;
    }
    for (let i = 0; i <= 30; i++) {
        dayOptions.value.push({
            label: moment().tz("Asia/Hong_Kong").subtract(i, "days").format("YYYY-MM-DD"),
            value: moment().tz("Asia/Hong_Kong").subtract(i, "days").format("YYYY-MM-DD")
        });
    }
    const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchTotalBetResult({s_time: selectedDay.value}, token.value);
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