<template>
  <div id="app">
    <router-view></router-view>
      </div>

</template>
<script>
export default {
  data(){
   return {

   }
  },
  methods:{
   changeTo(e){
     console.log(e)
   }
  },
  mounted(){
    let that = this;
    let url = this.globaData.localhost + '/tlgklw/tl_interface/service/dataservice/siteList';
      this.axios.get(url).then((response) => {
              response.data.data.forEach(element => {
                element.src =that.globaData.localhost+'/tlgklw/tl_core/servlet/cameraPreviewImgServlet?siteId='+ element.SITEID
              });
              that.list = response.data.data;
      }).catch((err) => {
        console.log(err)
      });
  }
  
}
</script>

<style lang="less">
.Main{
  height:calc(100vh - 133px);
}


</style>
