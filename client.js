var itemArray;
var columns = [
  {
    field : "name",
	title : translate("이름"),
	align : "center",
	sortable : true,
    formatter : function (value, item) {
      return getItemHtml(item);
    },
    class : "name"
  },
  {
    field : "type",
	title : translate("유형"),
    sortable : true,
    class : "type"
  },
  {
    field : "actions",
    title : translate("행위"),
    formatter : function (value, item) {
      var html = "";
      
      if (item.materials) {
        html += `<button data-item="${item.key}" class = "btn btn-primary build-tree" data-toggle="modal" data-target="#item-tree-modal">${translate('조합 트리')}</button>`;
      }
      
      return html;
    }
  },  
  {
    field: "materials",
    visible: false,
    formatter: function (val) {
      if (val) return val.map(v => items[v].name).toString();
      return '';
  }
}

]
$(function(){
    itemArray = Object.keys(items).filter(k => !items[k].disabled).map(v => {items[v].key = v; return items[v]});
    initializeTable();
})

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != translate("모두")) {  
    filters.type = $("#table thead tr .type select").val().toLowerCase()
  } 
  
 return itemArray.filter(function(item) {
	 if (filters.type && item.type != filters.type) return false;
     return true;
  })   
} 

function initializeTable () {
  $("#table").on("post-body.bs.table", function () {
    $('[data-toggle="tooltip"]').each(function(){
      $(this).tooltip({container: $(this)});
    })
  }).on("post-header.bs.table", function () {
    if($(this).find("thead tr .type select").length == 0) {
      $(this).find("thead tr .type").append("<div class = 'text-left'><select>"+["모두", "무기", "갑옷", "악세사리", "투구", "날개", "빈카드", "카드", "몬스터 테이밍", "조련사 석판", "마법 종이", "스크롤", "마법책", "재료", "포션", "펫 알", "특수", "융합 카드", "디스크 데이터", "융합 몬스터", "기타"].map(v => "<option>"+translate(v)+"</option>")+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "name", pagination : true, search : true, locale: (config.lang == 'kor' ? 'kr' : 'eng')});
  
}
