<template>
    <div style="margin-top: 60px; margin-bottom: 42px;">
        <div style="float: right; margin-right: 20px;">
            <el-form-item>
                <el-button type="danger" @click="showMainTable">
                    返回上一页
                </el-button>
            </el-form-item>
        </div>
        <el-table v-loading="loading" :data="mainBetResultList" :summary-method="getSummaries" show-summary stripe
            style="width: 100%;">
            <el-table-column prop="num" label="下注单号" width="100">
                <template #default="scope">
                    {{ scope.row.num }}
                </template>
            </el-table-column>
            <el-table-column prop="adddate" label="下注时间">
            </el-table-column>
            <el-table-column prop="" label="内容">
                <template #default="scope">
                    <div v-html="scope.row.class4"></div>
                </template>
            </el-table-column>
            <el-table-column prop="rate" label="赔率"></el-table-column>
            <el-table-column prop="sum_m" label="金额"></el-table-column>
            <el-table-column prop="z_userds" label="佣金">
            </el-table-column>
            <el-table-column prop="z_user" label="会员收付">
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, toRefs } from 'vue';
import { ElLoading } from 'element-plus'
import { katanStore } from "@/stores/katan";
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import router from '@/router';
import { showToast } from 'vant';
import type { TableColumnCtx } from 'element-plus'

const props = defineProps<{ period: number }>();
const { period } = toRefs(props);

const emit = defineEmits<{
    (e: 'showMain'): void,
}>()

const { dispatchSubBetResult } = katanStore();
const loading = ref(false);

const showMainTable = () => {
    emit("showMain");
}

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
    num: string
    adddate: string
    class4: number
    rate: number
    sum_m: number
    z_userds: number
    z_user: number
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
        if (index === 4 || index === 5 || index === 6) {
            const values = data.map((item) => Number(item[column.property]))
            sums[index] = Number(`${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)}`).toFixed(2)
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
    await dispatchSubBetResult({ period: period.value }, token.value);
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