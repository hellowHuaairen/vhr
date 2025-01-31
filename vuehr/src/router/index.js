import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Chat from '@/components/chat/Chat'
import EmpAdv from '@/components/emp/EmpAdv'
import EmpBasic from '@/components/emp/EmpBasic'
import PerEc from '@/components/personnel/PerEc'
import PerEmp from '@/components/personnel/PerEmp'
import PerMv from '@/components/personnel/PerMv'
import PerSalary from '@/components/personnel/PerSalary'
import PerTrain from '@/components/personnel/PerTrain'
import SalMonth from '@/components/salary/SalMonth'
import SalSearch from '@/components/salary/SalSearch'
import SalSob from '@/components/salary/SalSob'
import SalSobCfg from '@/components/salary/SalSobCfg'
import SalTable from '@/components/salary/SalTable'
import StaAll from '@/components/statistics/StaAll'
import StaPers from '@/components/statistics/StaPers'
import StaRecord from '@/components/statistics/StaRecord'
import StaScore from '@/components/statistics/StaScore'
import SysBasic from '@/components/system/SysBasic'
import SysCfg from '@/components/system/SysCfg'
import SysData from '@/components/system/SysData'
import SysHr from '@/components/system/SysHr'
import SysInit from '@/components/system/SysInit'
import SysLog from '@/components/system/SysLog'

Vue.use(Router)
export const initRoutes = [{
	"id": 2,
	"path": "/home",
	"component": Home,
	"name": "员工资料",
	"iconCls": "fa fa-user-circle-o",
	"children": [{
		"id": null,
		"path": "/emp/basic",
		"component": EmpBasic,
		"name": "基本资料",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}],
	"meta": {
		"keepAlive": false,
		"requireAuth": true
	}
}, {
	"id": 3,
	"path": "/home",
	"component": Home,
	"name": "人事管理",
	"iconCls": "fa fa-address-card-o",
	"children": [{
		"id": null,
		"path": "/per/ec",
		"component": PerEc,
		"name": "员工奖惩",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/per/train",
		"component": PerTrain,
		"name": "员工培训",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/per/salary",
		"component": PerSalary,
		"name": "员工调薪",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/per/mv",
		"component": PerMv,
		"name": "员工调动",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}],
	"meta": {
		"keepAlive": false,
		"requireAuth": true
	}
}, {
	"id": 4,
	"path": "/home",
	"component": Home,
	"name": "薪资管理",
	"iconCls": "fa fa-money",
	"children": [{
		"id": null,
		"path": "/sal/sob",
		"component": SalSob,
		"name": "工资账套管理",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sal/sobcfg",
		"component": SalSobCfg,
		"name": "员工账套设置",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sal/table",
		"component": SalTable,
		"name": "工资表管理",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sal/month",
		"component": SalMonth,
		"name": "月末处理",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sal/search",
		"component": SalSearch,
		"name": "工资表查询",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}],
	"meta": {
		"keepAlive": false,
		"requireAuth": true
	}
}, {
	"id": 5,
	"path": "/home",
	"component": Home,
	"name": "统计管理",
	"iconCls": "fa fa-bar-chart",
	"children": [{
		"id": null,
		"path": "/sta/all",
		"component": StaAll,
		"name": "综合信息统计",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sta/score",
		"component": StaScore,
		"name": "员工积分统计",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sta/pers",
		"component": StaPers,
		"name": "人事信息统计",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sta/record",
		"component": StaRecord,
		"name": "人事记录统计",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}],
	"meta": {
		"keepAlive": false,
		"requireAuth": true
	}
}, {
	"id": 6,
	"path": "/home",
	"component": Home,
	"name": "系统管理",
	"iconCls": "fa fa-windows",
	"children": [{
		"id": null,
		"path": "/sys/basic",
		"component": SysBasic,
		"name": "基础信息设置",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sys/cfg",
		"component": SysCfg,
		"name": "系统管理",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sys/log",
		"component": SysLog,
		"name": "操作日志管理",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sys/hr",
		"component": SysHr,
		"name": "操作员管理",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sys/data",
		"component": SysData,
		"name": "备份恢复数据库",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}, {
		"id": null,
		"path": "/sys/init",
		"component": SysInit,
		"name": "初始化数据库",
		"iconCls": null,
		"children": [],
		"meta": {
			"keepAlive": false,
			"requireAuth": true
		}
	}],
	"meta": {
		"keepAlive": false,
		"requireAuth": true
	}
}]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    }, {
      path: '/home',
      name: '主页',
      component: Home,
      hidden: true,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/chat',
          name: '消息',
          component: Chat,
          hidden: true,
          meta: {
            keepAlive: false,
            requireAuth: true
          }
        }
      ]
    },
    ...initRoutes
  ]
})
