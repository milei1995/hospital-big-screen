<template>
  <div class="target">
    <div class="title1">{{ target.targetLevel }}</div>
    <template v-for="(item3, index3) in target.targetTypeList">
      <div class="title2" :key="index3">{{ item3.typeName }}</div>
      <div
        class="allType"
        v-for="(item, index) in item3.targetList"
        :key="index"
      >
        <div class="typeName">{{ item.targetName }}</div>
        <div
          class="type"
          v-for="(item1, index1) in item.targetDataList"
          :key="index1"
        >
          <template v-if="item1.total">
            <div class="typePercent">{{ parseInt(item1.done) }}/{{ parseInt(item1.total) }}</div>
            <a-progress
              :strokeColor="target.color"
              :percent="((item1.done / item1.total)*100).toFixed(0)"
              status="active"
            />
          </template>
          <template v-if="!item1.total">
            <div class="nodata">---</div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "quota",
  data() {
    return {};
  },
  props: {
    target: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.target {
  width: 98%;
  height: auto;
  padding-left: 2%;
  margin-top: 0.5%;
  .title1 {
    width: 15%;
    height: auto;
    font-size: 14px;
    border-left: 4px solid #1890ff;
  }
  .title2 {
    width: 19%;
    height: auto;
    font-size: 14px;
    border-left: 2px solid #1890ff;
    margin-left: 2%;
  }
  /* .allTypeDiv{
      width:99%;
      height: 30%;
      background-color: hotpink; */
  .allType {
    width: 100%;
    height: 30%;
    display: flex;
    .typeName {
      width: 15%;
      text-align: right;
      font-size: 14px;
      line-height: 1.9;
    }
    .type {
      width: 30%;
      height: auto;
      display: flex;
         /deep/ .ant-progress-text{
           color:#ffffff;
        }
      .typePercent {
        width: 30%;
        text-align: center;
        font-size: 14px;
        line-height: 1.9;
      }
      .nodata{
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 1.9;
      }
    }
  }
}
</style>
