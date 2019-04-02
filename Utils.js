function getItemTree(itemId, quantity) {
  var item = items[itemId]
  quantity = quantity || 1;
  var materials = (item.materials || []).reduce(function(all, current) {
      all[current] = all[current] || 0;
      all[current] += 1;
      return all;
    }, {});
  return {
    innerHTML : getItemHtml(item, quantity, "tree"),
    children : Object.keys(materials).map(key => getItemTree(key, materials[key]))
  }
}

function getItemHtml(item, quantity, lang, from){
	quantity = quantity || 1;
	var itemInfo = getItemInfo(item, lang);
	var dropInfo = getDropInfo(item);
	var txt = itemInfo + (itemInfo.trim() && dropInfo.trim() ? "<br/><br/>" : "") + dropInfo;
	return `<span class="${item.color} item-tooltip" data-placement="bottom" data-toggle="tooltip" data-html="true" title="${txt}">${item.name + (quantity > 1 ? ' x' + quantity : '')}</span>`;
  }
	
	
function toArr (smth) {
  if (smth == null) return []
  if (smth instanceof Array == false) return [smth]
  return smth
}

function getItemInfo (item, lang) {
      var template = "";

      if (item.stats) {
        for (var stat in item.stats) {
          template += formatStat(stat, item.stats[stat], lang) + "<br/>";
        }
      }

      template += toArr(item.effects).join("<br/>");

      return template.endsWith("<br/>") ? template.substring(0, template.lastIndexOf("<br/>")) : template
    }


function getDropInfo (item) {
  var from = toArr(item.mob).filter(v => !!v);
  var chance = toArr(item.chance);

      if (!from[0]) return "";

      return from.map((f, i) => "<span style = 'color:turquoise'>" + f + "</span> <span style = 'color:gold'>(" + chance[i] + " " + translate("드랍 확률") + ")</span>").join("<br/> ")

}


function formatStat (stat, val, lang) {  
      if (stat == "dmg") return translate("데미지", lang) + ": +" + val;
      else if (stat == "str") return translate("힘", lang) + ": +" + val;
      else if (stat == "agi") return translate("민첩성", lang) + ": +" + val;
      else if (stat == "int") return translate("지능", lang) + ": +" + val;
	  else if (stat == "allstats") return translate("모든 능력치", lang) + ": +" + val;
      else if (stat == "attack_speed") return translate("공격속도", lang) + ": +" + val + "%";
      else if (stat == "maxhp") return translate("최대 체력", lang) + ": +"+val;
      else if (stat == "maxmp") return translate("최대 마력", lang) + ": +"+val;
      else if (stat == "mp") return translate("MP", lang) + ": +"+val;
      else if (stat == "movement_speed") return translate("Movement Speed", lang) + ": +"+val+ "%";
      else if (stat == "armor") return translate("방어력", lang) +": +" +val;
	  else if (stat == "misc") return "" +val;
	  else if (stat == "misc2") return "" +val;
      else if (stat == "magic_resistance") return translate("마법 면역력", lang) + ": +" + val + "%";
      else if (stat == "mpreg") return translate("마나 회복 속도", lang) + ": +" + val + "%";
      else if (stat == "magic_crit_dmg") return translate("마법 크리티컬 데미지", lang) + ": +" + val + "%";
      else if (stat == "magic_crit_chance") return translate("마법 크리티컬 확률", lang) + ": +" + val + "%";
      else if (stat == "phys_crit_dmg") return translate("물리 크리티컬 데미지", lang) + ": +" + val + "%";
      else if (stat == "phys_crit_chance") return translate("물리 크리티컬 확률", lang) + ": +" + val + "%";
      else if (stat == "agi_crit_dmg") return translate("민첩 크리티컬 데미지", lang) + ": +" + val + "%";
      else if (stat == "agi_crit_chance") return translate("민첩 크리티컬 확률", lang) + ": +" + val + "%";
  
  else console.warn("stat not defined : " + stat)
  
}

