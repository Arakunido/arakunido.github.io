var itemArray;
var columns = [
  {
    field : "icon",
    title : "아이콘",
	width : 52,
	align : "center"
  },
  {
    field : "name",
    title : "이름",
	align : "center",
	sortable : true,
    formatter : function (value, item) {
      return getItemHtml(item);
    },
    class : "name"
  },
  {
    field : "type",
    title : "유형",
    sortable : true,
    class : "type"
  }
]
$(function(){
    itemArray = Object.keys(items).filter(k => !items[k].disabled).map(v => {items[v].key = v; return items[v]});
    initializeMaps();
    initializeTable();
})

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != "모두") {  
	filters.type = $("#table thead tr .type select").val().toLowerCase()
  }
  
  if ($(".karta").val() != $(".karta option:eq(0)").val()) {
    filters.karta = $(".karta").val()
  }
  
 return itemArray.filter(function(item) {
	 if (filters.type && item.type != filters.type) return false;
     if (filters.karta && (!item.karta || item.karta.indexOf(filters.karta) == -1)) return false;
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
      $(this).find("thead tr .type").append("<div class = 'text-left'><select>"+["모두", "장비", "무기","장신구", "치장", "메달", "기타", "소모품"].map(v => "<option>"+v+"</option>")+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
  });
  
  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "type", pagination : true, search : true});
  
  $(".karta").change(function(){
    $("#table").bootstrapTable("load", getFilteredData())
  })  
}

function initializeMaps () {
  var karta = ["모두",
               "Victoria",
               "Time",
			   "Final"
			   ]
  
  $(".karta").append(karta.map(v => $("<option>").text(v)));
}