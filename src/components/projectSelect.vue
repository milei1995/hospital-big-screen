<template>
  <div id="project-select">
    <a-dropdown
      :trigger="['click']"
      :visible="visibleMenu"
      class="action-item"
      placement="bottomCenter"
    >
      <a-tooltip :mouseEnterDelay="0.3" :title="currentProject ? currentProject.name:`请选择项目`">
        <a
          class="project-select"
          style="color: #333"
          @click="visibleMenu = !visibleMenu"
        >
          <span>{{ currentProject ? currentProject.name:`请选择项目` }}</span>
          <span class="m-l-xs"><a-icon type="down"/></span>
        </a>
      </a-tooltip>
      <template >
        <div slot="overlay" class="middle-menu member-menu project-select-menu">
          <div class="search-content">
            <a-input v-model="keyword" size="large" placeholder="搜索">
              <a-icon slot="prefix" type="search" />
            </a-input>
          </div>
          <div class="member-list">
            <vue-scroll>
              <div class="list-group">
                <a-list
                  class="list-content"
                  itemLayout="horizontal"
                  :dataSource="projectList"
                  :locale="{
                    emptyText:
                      keyword && keyword.length > 1 ? '没有找到该项目' : '',
                  }"
                >
                  <a-list-item
                    class="member-list-item"
                    slot="renderItem"
                    slot-scope="item"
                    @click.native="changeProject(item, item.code)"
                  >
                    <span slot="actions">
                      <a-icon
                        type="check"
                        v-show="showCheck(item.code)"
                      ></a-icon>
                    </span>
                    <a-list-item-meta>
                      <span slot="title">{{ item.name }}</span>
                      <a-avatar slot="avatar" icon="user" :src="item.cover" />
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </div>
            </vue-scroll>
          </div>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import _ from "lodash";
import { list as getProjectList } from "../../api/project";
import pagination from "../../mixins/pagination";

export default {
  name: "ProjectSelect",
  props: {
    code: {
      type: [String],
      default() {
        return "";
      },
    },
    projTypeCode:{
      type:[String],
      default(){
        return ''
      }
    },
    type: {
      type: [String],
      default() {
        return "";
      },
    },
    fromType:{
      type:[String],
      default(){
        return "all"
      }
    }
  },
  data() {
    return {
      visibleMenu: false,
      keyword: "",
      loading: false,
      currentProject: null,
      projectList: [],
      projectListCopy: [],
      projectTotal: 0,
    };
  },
  mixins: [pagination],
  computed: {
   
  },
  watch: {
    code(newCode,oldCode) {
       console.log(newCode)
       if(newCode==''){
           this.currentProject=null
       } 
    },
    keyword() {
      this.search();
    },
    projTypeCode:{
      handler(newCode,oldCode){
          this.getProjectList()  
      },
      deep:true,
      immediate: true,
    }
  },
  created() {
    this.init();
  },
  methods: {
    
    init() {
      this.getProjectList(true);
    },
    getProjectList(loading = true) {
      this.loading = loading;
      this.requestData = {
        page: 1,
        pageSize: 50,
        type: this.fromType=='all' ? "selectAll" : "model",
        proj_type:this.projTypeCode
      };
      getProjectList(this.requestData).then((res) => {
        this.projectList = res.data.list;
        this.projectListCopy = res.data.list;
        this.projectTotal = res.data.total;
        if (this.type !== "plan") {
          this.currentProject = res.data.list.find(
            (item) => item.code == this.code
          );
        } else {
            this.currentProject=res.data.list[0]
            this.$emit('getOriginSelect',res.data.list[0])
        }
        this.loading = false;
      });
    },
  
    changeProject(record, code) {
      this.currentProject = record;
      this.visibleMenu = false;
      if (this.type !== "plan") {
        this.$router.push("/project/space/task/" + code);
      }else{
          this.$emit('getChangeProjectSelect',record)
      }
    },
    showCheck(code) {
      if (code == this.code) {
        return true;
      }
    },
    search: _.debounce(function() {
      this.keyword = this.keyword.trim();
      if (!this.keyword) {
        this.projectList = JSON.parse(JSON.stringify(this.projectListCopy));
      }
      if (this.keyword.length < 1) {
        return false;
      }
      // this.searching = true;
      this.projectList = this.projectList.filter(
        (item) => item.name.indexOf(this.keyword) != -1
      );
    }, 500),
    getPopup() {
      return document.getElementById("project-select");
    },
  },
};
</script>

<style lang="less" scope>
#project-select {
  cursor: pointer;

  :hover {
    /*background: rgba(0, 0, 0, 0.025);*/
  }
}

.project-select-menu {
  margin-left: 10px;

  .member-list {
    height: 290px;
  }
}
</style>
