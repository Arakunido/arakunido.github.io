var itemArray;
var columns = [	
  {
    field : "label",
    title : translate("Name"),
    sortable : true,
    formatter : function (value, item) {
      return getItemHtml(item);
    },
    class : "name"
  },
  {
    field : "type",
    title : translate("Type"),
    sortable : true,
    class : "type"
  },
  {
    field : "actions",
    title : translate("Actions"),
    formatter : function (value, item) {
      var html = "";
      
      if (item.materials) {
        html += `<button data-item="${item.key}" class = "btn btn-primary build-tree" data-toggle="modal" data-target="#item-tree-modal">${translate('View Combination Tree')}</button>`;
      }
      
      return html;
    }
  },  
  {
    field: "materials",
    visible: false,
    formatter: function (val) {
      if (val) return val.map(v => items[v].label).toString();
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
  
  if ($("#table thead tr .type select").val() != translate("All")) {  
    filters.type = $("#table thead tr .type select").val().toLowerCase()
  } 
  
 return itemArray.filter(function(item) {
	 if (filters.type && item.type.toLowerCase() != filters.type) return false;
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
       $(this).find("thead tr .type").append("<div class = 'text-left'><select>"+["All", "Accessory", "Armor", "Heavy Armor", "Auxiliary", "Blunt Weapon", "Badge", "Cloth", "Offhand", "Bow", "Consumable", "Glove", "Great Sword", "Gun", "Leather Armor", "Magic Stone", "Mineral", "Staff", "Title"].map(v => "<option>"+translate(v)+"</option>")+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "label", pagination : true, search : true, locale: (config.lang == 'eng' ? 'en' : 'zh-CN')});
}
