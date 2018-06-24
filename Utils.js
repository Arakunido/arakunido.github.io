function getItemHtml(item, quantity, from){
	quantity = quantity || 1;
	var itemInfo = getItemInfo(item);
	var dropInfo = getDropInfo(item);
	var txt = itemInfo + (itemInfo.trim() && dropInfo.trim() ? "<br/><br/>" : "") + dropInfo;
	return `<span class="${item.color} item-tooltip" data-placement="bottom" data-toggle="tooltip" data-html="true" title="${txt}">${item.name + (quantity > 1 ? ' x' + quantity : '')}</span>`;
  }

function toArr (smth) {
  if (smth == null) return []
  if (smth instanceof Array == false) return [smth]
  return smth
}

function getItemInfo (item) {
  var template = "";
  
  if (item.stats) {
    for (var stat in item.stats) {
      template += formatStat(stat, item.stats[stat]) + "<br/>";
    }
  }
	  
  template += toArr(item.effects).join("<br/>");

  return template.endsWith("<br/>") ? template.substring(0, template.lastIndexOf("<br/>")) : template

}

function getDropInfo (item) {
  var from = toArr(item.mob).filter(v => !!v);
  var chance = toArr(item.chance);

      if (!from[0]) return "";

      return from.map((f, i) => "<span style = 'color:turquoise'>" + f + "</span> <span style = 'color:gold'>(" + chance[i] + " " + "드랍 확률" + ")</span>").join("<br/> ")
}

function formatStat (stat, val) {  
	if (stat == "atk") return "<span>" + "공격력: [" + val + "]" +  "</span>";
  else if (stat == "str") return "<span>" + "STR: [" + val + "]" +  "</span>";
  else if (stat == "dex") return "<span>" + "DEX: [" + val + "]" +  "</span>";
  else if (stat == "int") return "<span>" + "INT: [" + val + "]" +  "</span>";
  else if (stat == "hp") return "<span>" + "HP: [" + val + "]" +  "</span>";
  else if (stat == "hpreg") return "<span>" + "HP리젠: [" + val + "]" +  "</span>";
  else if (stat == "mp") return "<span>" + "MP: [" + val + "]" +  "</span>";
  else if (stat == "mpreg") return "<span>" + "MP리젠: [" + val + "]" +  "</span>";
  else if (stat == "def") return "<span>" + "방어력: [" + val + "]" +  "</span>";
  else if (stat == "mvspd") return "<span>" + "이동속도: [" + val + "]" +  "</span>";
  else if (stat == "atkspd") return "<span>" + "공격속도: [" + val + "]" +  "</span>";
  else if (stat == "reqlvl") return "<span>" + "착용제한: [" + val + "]" +  "</span>";
  else if (stat == "crit") return "<span>" + "크리티컬: [" + val + "]" +  "</span>";
  else if (stat == "eva") return "<span>" + "회피: [" + val + "]" +  "</span>";
  else if (stat == "mdef") return "<span>" + "마법방어력: [" + val + "]" +  "</span>";
  else if (stat == "misc") return "<span>" + "" + val + "" +  "</span>";
  
  else console.warn("stat not defined : " + stat)
}

