<template>
  <div id="app">
      <div class="container">
        <div class="videoContianer" v-for="(item,index) in list" :key="item.id" >
          <div class="videoImage" :index="index" @click="changeTo(index)">
            <img :src="item.src" width="100%" height="140px"/>
          </div>
          <div class="stationControl"></div>
          <div class="stationDecoration">{{item.SITEREMARK}}</div>
        </div>
      
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[
        1,2,3
      ],

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
html .header{
  background:gray;
}
.videoContianer{
  width: 100%;
  height: 200px;
  // background: red;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid gray;
}
.stationDecoration{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  text-indent: 2rem;
}
.stationControl{
  width:100%;
  height: 30px;
  background: green;
}
.videoImage{
  width: 100%;
  height: 140px;
  // background: blue;  
}
</style>
