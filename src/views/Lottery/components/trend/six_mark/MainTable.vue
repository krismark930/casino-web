<template>
    <div style="margin-top: 60px; margin-bottom: 42px;">
        <el-table v-loading="loading" :data="mainBetResultList" :summary-method="getSummaries" show-summary stripe
            style="width: 100%;">
            <el-table-column prop="nd" label="日期" width="100">
                <template #default="scope">
                    <font color="red" @click="showSubTable(scope.row.nn)"><b>{{ scope.row.nd }}</b></font>
                </template>
            </el-table-column>
            <el-table-column prop="nn" label="期数">
                <template #default="scope">
                    {{ scope.row.nn }}
                </template>
            </el-table-column>
            <el-table-column prop="sum_m" label="金额"></el-table-column>
            <el-table-column prop="user_ds" label="退水"></el-table-column>
            <el-table-column prop="sum_m_1" label="结果"></el-table-column>
        </el-table>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ElLoading } from 'element-plus'
import { katanStore } from "@/stores/katan";
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import router from '@/router';
import { showToast } from 'vant';
import type { TableColumnCtx } from 'element-plus'

const emit = defineEmits<{
    (e: 'showSubTable', period: number): void,
}>()

const { dispatchMainBetResult } = katanStore();
const loading = ref(false);

const mainBetResultList = computed(() => {
    const { getMainBetResultList } = storeToRefs(katanStore());
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
interface BetResult {
    nn: string
    nd: string
    sum_m: number
    user_ds: number
    sum_m_1: number
}
const showSubTable = (period: any) => {
    emit("showSubTable", period.split("期")[0]);
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
    const loading = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await dispatchMainBetResult(token.value);
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