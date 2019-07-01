<template>
    <div id="app22">
       传过来的 id 是： {{text}}
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                text:'123'
            }
        },
        created(){
            console.log('this is stationMonitor page');
            this.text  = this.$route.query.userId;
            
        },
        
    }
</script>

<style  scoped>
    
</style>