function translate (str, lang) {
  if (str == null) return str;
 
  if (config && config.lang) {
    lang = config.lang
  }
  
  if (Array.isArray(str) == false) {  
    if (!translations[str]) {
      console.warn(str + ' does not have translation');
      return str;
    }
    
    if ((lang == 'eng' || lang == null) && typeof translations[str] == 'string') return str;
    if (typeof translations[str] == 'string') return translations[str]; 

    return translations[str][lang] || str;
  } else {
    return str.map(v => translate(v, lang))
  }
}

function checkLanguage (items, lang) {
  if (lang == 'zh-CN') {
    for (var item in items) {
      items[item].label = translate(items[item].label);
      items[item].effects = items[item].cn_effects;
      items[item].type = translate(items[item].type)
      items[item].mob = translate(items[item].mob)

      if (items[item].label == null) console.warn(items[item])
    }
  }
}