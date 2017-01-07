// Route State Load Spinner(used on page or content load)
MetronicApp.directive('searchformdirective', function () {
        return {
            templateUrl: 'public/html/searchForm.html',
            controller: function ($scope){
            },
        };
    })
    .directive('searchformlistdirective', function(){
        return {
            templateUrl: 'public/html/searchFormList.html',
            controller: function ($scope){
            },
        }
    })
    .directive('searchrightawaydirective', function(){
        // 搜索按钮的指令
        return {
            // restrict: 'C',
            controller: function($scope){
                $scope.searchPatients = $('#searchPatients');       // 患者展示表格
                $scope.table = {};
                $scope.time = 0;                                    // 用于判断是否是页面初始化
                $scope.patients = $('#patients');                   // 患者展示表格的容器


                // 初始化表格，
                $scope.table = $scope.searchPatients.DataTable({
                    ajax: "",
                    data: [],
                    "columns": [
                        {"data": "id", title: "id","visible": false},
                        {"data": "name", title: "name"},
                        {"data": "birthday", title: "birthday"},
                        {"data": "IDNumber", title: "IDNumber"},
                        {"data": "outpatientNumber", title: "outpatientNumber"},
                        {"data": "sex", title: "sex"},
                        {"data": "address", title: "address"},
                        {"data": "registrationDate", title: "registrationDate"}
                    ],

                    createdRow: function( row, data, dataIndex ) {
                        $(row).find('td:eq(0)').attr('data-id', data.id);
                    },

                    "autoWidth": true,                                             // 自适应宽度
                    lengthMenu: [10, 20, 50, 100, 200, 500, 1000],          // 煤业显示多少条
                    ordering: false,                                                // 是否允许dataTables开启排序
                    paging: true,                                                   // 是否开启本地分页
                    // scrollY: "200px",                                            // 强行设置 datatables 为指定的高度。
                    scrollCollapse: true,                                           // 当显示更少的记录时，是否允许表格减少高度
                    info: true,                                                     // 控制是否显示表格左下角的信息
                    // "processing": true,                                          // 显示加载的进度条
                    scrollX: true,
                    stateSave: true,                                                // 保存用户选中的每页显示多少条
                    searching: true,                                                // 本地的搜索
                    // "jQueryUI": true,                                            // 使用 jqueryui 与否
                    tabIndex: -1,
                    "stripeClasses": ['strip1', 'strip2', 'strip3'],                // 定义三个不同的样式


                    // table 的文字
                    oLanguage: {
                        sProcessing: "<img src='/images/datatable_loading.gif'>  努力加载数据中...",
                        sLengthMenu: "每页显示 _MENU_ 条",
                        sInfo: "显示 _START_ 到 _END_ 共 _TOTAL_ 条数据",
                        sInfoEmpty: "没有数据",
                        sInfoFiltered: "(从 _MAX_ 条数据中检索)",
                        sZeroRecords: "暂无此数据",
                        sSearch: "查询:  ",
                        oPaginate: {
                            sFirst: "首页",
                            sPrevious: "上一页",
                            sNext: "下一页",
                            sLast: "尾页"
                        }
                    },

                    orderMulti: true,

                    // 表格在初始化的时候的排序,asc为升序或desc降序排序,
                    order: [[1, 'desc'], [0, 'asc'], [2, 'asc']],
                });

                if($scope.time==0){ $scope.patients.hide(); $scope.time++; }                         // 首次打开默认隐藏搜索的展示表格

                // 搜索按钮
                $scope.searchOn = function (){
                    console.log($scope.condition);

                    $scope.tr = $scope.searchPatients.find('tbody');
                    $scope.patients.show();
                    $scope.table.ajax.url('http://localhost/ng1/search/public/public/json/search.json').load();
                    $scope.time++;
                    $scope.tr.off('click').on( 'click', 'tr', function () {
                        window.location.href = '?id='+$(this).find('td:eq(0)').attr('data-id');
                    });
                };

                /*if(!$scope.search){
                 $scope.search = $scope.condition[$scope.$index];
                 }*/
                $scope.searchSelectChange = function (){
                    console.log(111);
                }

            }
        }
    })
    .directive('deldirective', function(){
        // 移出检索条件的指令
        return {
            controller: function ($scope) {
                $scope.del = function(index){
                    if($scope.condition.length==1){ return false; }
                    $scope.condition.splice(index,1);
                };
            }
        }
    })

    .directive('addsearchconditiondirective', function(){
        // 添加更多检索条件的指令
        return {
            controller: function ($scope) {
                $scope.addSearchCondition = function(){
                    // $scope.addList = $scope.searchSelectTitle.slice(0, 1);
                    $scope.condition.push({"field": "name", "text": "姓名", "type":"text", "operator": "", "expression": ""});                 // 添加多一项检索条件
                    // $scope.condition.push($scope.addList);                 // 添加多一项检索条件
                }
            }
        }
    })
    .directive('selectconditiondirective', function(){
        // 点击检索条件的title的指令
        return {
            controller: function ($scope) {

                $scope.mathematical = [
                    { key: 'eq', value: '等于'  },
                    { key: 'gt', value: '大于'  },
                    { key: 'egt', value: '大等于'  },
                    { key: 'lt', value: '小于'  },
                    { key: 'elt', value: '小等于'  }
                ];

                $scope.characterString = [
                    { key: 'equal', value: '等于'  },
                    { key: 'Contain', value: '含有'  },
                    { key: 'notContain', value: '不含有'  }
                ];
                $scope.sex = [
                    { key: 'male', value: '男'  },
                    { key: 'female', value: '女'  },
                    { key: 'other', value: '其他'  }
                ];
                $scope.inputSexSelect = $scope.sex[0];                // text 的
                $scope.searchSelectChange = function () {
                    alert(123123);
                }


            },
        }
    })
    .directive('sexdirective', function(){
        // sexdirective 的指令
        return {
            controller: function ($scope) {
                if(!$scope.search.operator){
                    $scope.search.operator = $scope.sex[0];
                }
            }
        }
    })
    .directive('inputdirective', function(){
        // stringDirective 的指令
        return {
            templateUrl: 'public/html/inputDirective.html',
            controller: function ($scope) {
                if($scope.search.type=='number' || $scope.search.type=='date'){
                    if(!$scope.search.operator){
                        $scope.search.operator = $scope.mathematical[0];
                    }
                }else if($scope.search.type=='text'){
                    if(!$scope.search.operator){
                        $scope.search.operator = $scope.characterString[0];
                    }
                }
            }
        }
    })


;


