// console.log(condition);


//
// $(document).ready(function() {
//
//
//     var url = './public/js/patients.json',
//         searchConditionUrl = './public/json/searchCondition.json',
//         table,
//         $searchPatients = $('#searchPatients'),
//         $selectForm = $('#selectForm');
//
//     $.getJSON(searchConditionUrl, function (json) {
//         var data = json.searchCondition,
//             condition = data.condition,
//             conditionLen = condition.length,
//             conStr = '';
//         // alert(conditionLen);
//         for(let i = 0; i<conditionLen; i++){
//             conStr += '<div class="form-group"><label class="searchCriteria"><span>'+condition[i].text+'：</span>';
//             let type = condition[i].type;
//             if(type == 'number'){
//                 let num = Number(condition[i].num);
//                 if(num==1){
//                     conStr += '<input type="'+type+'" class="form-control" placeholder="请输入'+condition[i].text+'">';
//                 }else{
//                     for(let i = 0; i<num; i++){
//                         let place;
//                         if(i==0){place = "起";}else{place = "止";}
//                         conStr += '<input type="'+type+'" class="form-control" placeholder="'+place+'">';
//                         if(i!=(num-1)){
//                             conStr += ' - ';
//                         }
//                     }
//                 }
//             }else if(type == 'text'){
//                 conStr += '<input type="'+type+'" class="form-control" placeholder="请输入'+condition[i].text+'">';
//             }
//             if(condition[i].tips){
//                 conStr += '<em><span style="color:red;">* </span>'+condition[i].tips+'</em>';
//             }
//             conStr += `</label></div>`;
//         }
//
//         conStr += `<div class="form-group mt20" style="height: 34px;margin-bottom: 0;">
//                         <input type="submit" id="btn" class="searchBtn" (click)="searchPerson('#selectForm');" value="搜 索">
//                     </div>`;
//
//         $selectForm.html('').append(conStr);
//
//
//
//
//         $('#btn').on('click touchstart', function(){
//             // table.clear();
//
//
//             table = null;
//             $searchPatients.html('');
//
//             $.when(
//                 $.getJSON(url, function (json) {
//                     var patients = json.patientsData,
//                         patTd = '',
//                         patTr = '',
//                         padTh;
//
//                     $searchPatients.html('');
//
//                     // thead
//                     for(let i in patients){
//                         padTh += '<tr>';
//                         for(let j in patients[i].item){
//                             padTh += '<th>'+j+'</th>';
//                         }
//                         padTh += '</tr>';
//                         break;
//                     }
//                     $searchPatients.append("<thead>"+padTh+"</thead>");
//
//
//                     // 内容
//                     for(let i in patients){
//                         patTr += '<tr data-linkId="'+patients[i].linkId+'">';
//                         patTd = '';
//                         for(let j in patients[i].item){
//                             patTd += '<td>'+patients[i].item[j]+'</td>';
//                         }
//                         patTr += patTd + '</a></tr>';
//                     }
//                     $searchPatients.append("<tbody>"+patTr+"</tbody>");
//
//                     // 跳转链接
//                     $('#searchPatients tbody').on('click','tr', function (e) {
//                         var name = $(this).attr('data-linkId');
//                         console.log(name);
//                         window.location.href = 'aa.html?&linkId='+name;
//                     } );
//                 })
//             ).then(
//
//                 // 加个计时器，不然 thead 的排序会失效
//                 setTimeout(function(){
//                     table = null;
//
//                     table = $searchPatients.DataTable({
// //                ordering: false,                    // 是否允许dataTables开启排序
//
//                         paging:  true,                      // 是否开启本地分页
// //                scrollY: "200px",                   // 强行设置 datatables 为指定的高度。
//                         scrollCollapse: true,               // 当显示更少的记录时，是否允许表格减少高度
//
//                         info: true,                         // 控制是否显示表格左下角的信息
//                         scrollX: true,
//                         stateSave: true,
//                         searching: true,                    // 本地的搜索
//                         /*createdRow: function( row, data, dataIndex ) {
//                          console.log(data[0]);
//                          },*/
// //                "jQueryUI": true,                 // 使用 jqueryui 与否
//                         tabIndex: -1,
//                         "stripeClasses": [ 'strip1', 'strip2', 'strip3' ],      // 定义三个不同的样式
//
//                         // columnDefs  设置定义列的初始属性
//                         columnDefs: [
//                             // { targets: [0, 1, 2, 3], visible: true},                // targets 告诉这个定义是指向那一列或者那几列
//                             // { targets: '_all', visible: false },                    // visible 显示或隐藏该列
//                             { targets: [0], searchable: true },                    // 允许第一列参与搜索
//                             { targets: [1], searchable: true },                     // 允许第二列参与搜索
//                             { targets: [ 0, 2],  orderable: false }            // 第一列和第三列不能排序
//                             // { targets: [0], title: 'one' },                         // 定义第一列的 title 相当于 thead
//                             /*{ targets: [0], width: '500px' },
//                              { targets: [1, 2], width: '100px' },
//                              { targets: [3], width: '200px' }*/
//                         ],
//                         orderMulti: true,
//
//                         // 表格在初始化的时候的排序,asc为升序或desc降序排序,
//                         order: [[1, 'desc'], [0, 'asc'], [2, 'asc']],
//
//                         buttons: {
//                             buttons: [
//                                 {
//                                     text: 'Alert',
//                                     action: function ( e, dt, node, config ) {
//                                         alert( 'Activated!' );
//                                         this.disable(); // disable button
//                                     }
//                                 }
//                             ]
//                         }
//                     });
//
//                 }, 100)
//
//             );
//
//         });
//
//     });
//
// } );
