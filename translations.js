var translations = {
  '이름': 'Name',
  '유형': 'Type',
  '행위': 'Actions',
  '조합 트리 -': 'Combination Tree -',
  '모두': 'All',
  '무기': 'Weapon',
  '갑옷': 'Armor',
  '악세사리': 'Accessory',
  '투구': 'Helmet',
  '날개': 'Wings',
  '빈카드': 'Blank Card',
  '카드': 'Card',
  '몬스터 테이밍': 'Monster Taming',
  "조련사 석판": "Trainer's Slate",
  '마법 종이': 'Magic Paper',
  '스크롤': 'Scroll',
  '마법책': 'Magic Book',
  '재료': 'Material',
  '포션': 'Potion',
  '펫 알': 'Pet Egg',
  '융합 카드': 'Fusion Card',
  '특수': 'Special',
  '디스크 데이터': 'Disk Data',
  '융합 몬스터': 'Fusion Monster',
  '촉매제': 'Catalyst',
  '기타': 'Misc',
  '마법 면역력': 'Magic Resistance',
  '공격속도': 'Attack Speed',
  '모든 능력치': 'All Stats',
  '방어력': 'Defense',
  '데미지': 'Damage',
  '최대 체력': 'Max HP',
  '최대 마력': 'Max MP',
  '힘': 'Strength',
  '민첩성': 'Agility',
  '지능': 'Intelligence',
  '마나 회복 속도': 'Mana Regeneration',
  '마법 크리티컬 데미지': 'Magical Critical Damage',
  '마법 크리티컬 확률': 'Magical Critical Chance',
  '물리 크리티컬 데미지': 'Physical Critical Damage',
  '물리 크리티컬 확률': 'Physical Critical Chance',
  '민첩 크리티컬 데미지': 'Agility Critical Damage',
  '민첩 크리티컬 확률': 'Agility Critical Chance',
  '드랍 확률': 'Drop Chance',
  '조합 트리': 'View Combination Tree'
}

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
    
    if ((lang == 'kor' || lang == null) && typeof translations[str] == 'string') return str;
    if (typeof translations[str] == 'string') return translations[str]; 

    return translations[str][lang] || str;
  } else {
    return str.map(v => translate(v, lang))
  }
}

function checkLanguage (items, lang) {
  if (lang == 'eng') {
    for (var item in items) {
      items[item].name = items[item].en_name;
      items[item].effects = items[item].en_effects;
      items[item].type = translate(items[item].type)
      
      if (items[item].en_name == null) console.warn(items[item])
    }
  }
}