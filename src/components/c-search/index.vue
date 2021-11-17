<template>
    <div class="c-search">
        <el-input></el-input>
    </div>
</template>
<script setup lang="ts">
import { ElButton, ElInput } from 'element-plus'
import { ref , onMounted } from 'vue'
import store from '../../service/storge';

function updateHistory(){
    store.local.set("search_history",[])
}

function deleteHostory(){

}

</script>