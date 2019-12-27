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
	return `<span class="${item.color} item-tooltip" data-placement="bottom" data-toggle="tooltip" data-html="true" title="${txt}">${item.label + (quantity > 1 ? ' x' + quantity : '')}</span>`;
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

      return from.map((f, i) => "<span style = 'color:turquoise'>" + f + "</span> <span style = 'color:gold'>(" + chance[i] + " " + translate("Drop Chance") + ")</span>").join("<br/> ")

}


function formatStat (stat, val, lang) {  
      if (stat == "dmg") return translate("Damage", lang) + ": +" + val;
      else if (stat == "str") return translate("Strength", lang) + ": +" + val;
      else if (stat == "agi") return translate("Agility", lang) + ": +" + val;
      else if (stat == "int") return translate("Intelligence", lang) + ": +" + val;
	  else if (stat == "allstats") return translate("All Stats", lang) + ": +" + val;
	  else if (stat == "mainstat") return translate("Mainstat", lang) + ": +" + val;
      else if (stat == "attack_speed") return translate("Attack Speed", lang) + ": " + val + "%";
      else if (stat == "n_maxhp") return translate("HP", lang) + ": -"+val;
      else if (stat == "maxhp") return translate("HP", lang) + ": +"+val;
      else if (stat == "maxmp") return translate("MP", lang) + ": +"+val;
      else if (stat == "movement_speed") return translate("Movement Speed", lang) + ": +"+val+ "";
      else if (stat == "evasion") return translate("Evasion", lang) + ": +"+val+ "";
      else if (stat == "defense") return translate("Defense", lang) + ": +" +val;
      else if (stat == "n_defense") return translate("Defense", lang) + ": -" +val;
      else if (stat == "magic_resistance") return translate("Magic Resistance", lang) + ": +" + val + "%";
      else if (stat == "healing") return translate("Healing Received", lang) + ": +" + val + "%";
      else if (stat == "skill_damage") return translate("Skill Damage", lang) + ": +" + val + "%";
      else if (stat == "bonus_damage") return translate("Bonus Damage", lang) + ": +" + val + "%";
      else if (stat == "fire_damage") return translate("Fire Attribute Damage", lang) + ": +" + val + "%";
      else if (stat == "dark_damage") return translate("Dark Attribute Damage", lang) + ": +" + val + "%";
      else if (stat == "wind_damage") return translate("Wind Attribute Damage", lang) + ": +" + val + "%";
      else if (stat == "ice_damage") return translate("Ice Attribute Damage", lang) + ": +" + val + "%";
      else if (stat == "light_damage") return translate("Light Attribute Damage", lang) + ": +" + val + "%";
      else if (stat == "thunder_damage") return translate("Thunder Attribute Damage", lang) + ": +" + val + "%";
      else if (stat == "critical_chance") return translate("Critical Chance", lang) + ": +" + val + "%";
      else if (stat == "critical_damage") return translate("Critical Damage", lang) + ": +" + val + "%";
      else if (stat == "experience") return translate("Experience Gain", lang) + ": +" + val + "%";
      else if (stat == "mpreg") return translate("MP Regeneration", lang) + ": +" + val + "";
      else if (stat == "hpreg") return translate("HP Regeneration", lang) + ": +" + val + "";
      else if (stat == "dmg_taken") return translate("Damage Taken", lang) + ": -" + val + "";
      else if (stat == "n_dmg_taken") return translate("Damage Taken", lang) + ": +" + val + "";
	  else if (stat == "misc") return "" +val;
	  else if (stat == "misc2") return "" +val;
  
  else console.warn("stat not defined : " + stat)
  
}

