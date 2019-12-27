var items = {
  I18O: {
    name: "TEST",
    type: "TEST",
    effects: ["TESTTESTTESTTEST"],
    mob: "TESTTESTTEST",
    chance: "4.76%"
  },
  IS8O: {
    name: "TEST",
    type: "TEST",
    effects: ["TESTTESTTESTTEST"],
    mob: "TESTTESTTEST",
    chance: "4.76%"
  },

  I1P1: {
    name: "TEST[TEST]",
    en_name: "TESTTEST[TEST]",
    type: "TEST",
    effects: [
      "TESTTESTTEST",
      "<span style = 'color:red'>** TESTTESTTESTTEST **</span>"
    ],
    stats: {
      armor: "3500",
      allstats: "200000",
      maxhp: "15000000",
      agi: "450000"
    },
    materials: ["I18O", "IS8O", "I0BE", "I093", "I09I", "I01W"],
    en_materials: ["I18O", "IS8O", "I0BE", "I093", "I09I", "I01W"]
  },
  I003: {
    name: "거미다리",
    type: "재료",
    effects: ["거미를 잡고 뜯어온 다리이다", "상점에 판매 가능, 조합에 사용됨"],
    mob: "검정거미",
    chance: "16.6%"
  },
  I00U: {
    name: "산동이[빈카드]",
    type: "빈카드",
    effects: [
      "빈카드를 사용하여 몬스터를 봉인할수있습니다.",
      "산동이를 봉인합니다."
    ],
    mob: "산동이",
    chance: "1%"
  },
  I01W: {
    name: "산동이의 곡괭이",
    type: "재료",
    effects: ["몹쓸 곡괭이.. 이걸로 날 때렸단말이지", "조합에 사용됨"],
    mob: "산동이",
    chance: "14%"
  },
 I09I: {
    name: "도치의 뇌와 척수",
    type: "재료",
    effects: ["도치의 뇌와 척수를 뽑아온 아이템", "조합에 사용됨"],
    mob: "생명의 숲 지킴이 도치",
    chance: "14.29%"
  },
  I093: {
    name: "생명의 투구[유니크]",
    type: "투구",
    effects: [
      "도치가 소중히 보관하던 생명력이 깃든 투구",
      "[체력 200회복 스킬]"
    ],
    stats: {
      str: "50",
      agi: "20",
      int: "25",
      armor: "15"
    },
    mob: "생명의 숲 지킴이 도치",
    chance: "14.29%"
  },
  I092: {
    name: "생명의 갑옷[유니크]",
    type: "갑옷",
    effects: ["도치가 입고 있던 생명력이 깃든 갑옷", "[체력 500 회복스킬]"],
    stats: {
      armor: "50"
    },
    mob: "생명의 숲 지킴이 도치",
    chance: "14.29%"
  },
  I094: {
    name: "도치의 꽃[유니크]",
    type: "악세사리",
    effects: ["[갈드의 구슬]", "도치의 몸에 한번씩 핀다는 꽃이다...."],
    stats: {
      allstats: "60"
    },
    mob: "생명의 숲 지킴이 도치",
    chance: "14.29%"
  },
  I095: {
    name: "생명의 지팡이[유니크]",
    type: "무기",
    effects: ["생명력이 강하게 깃든 지팡이", "[체력 500회복스킬]"],
    stats: {
      dmg: "700",
      int: "250"
    },
    mob: "생명의 숲 지킴이 도치",
    chance: "14.29%"
  },
  I096: {
    name: "생명의 도치발[유니크]",
    type: "무기",
    effects: ["도치발을 잘라 만든 클러같은 무기다", "[체력 500회복스킬]"],
    stats: {
      dmg: "1500",
      agi: "260",
      attack_speed: "20"
    },
    mob: "생명의 숲 지킴이 도치",
    chance: "14.29%"
  },
  I08T: {
    name: "나비요정[빈카드]",
    type: "빈카드",
    effects: [
      "빈카드를 사용하여 몬스터를 봉인할수있습니다.",
      "나비요정을 봉인합니다."
    ],
    mob: "나비 요정",
    chance: "1%"
  },
  I08W: {
    name: "나비날개",
    type: "재료",
    effects: [
      "나비요정에게서 뜯어온 나비날개다",
      "퀘스트에 사용됨, 조합에 사용됨"
    ],
    mob: "나비 요정",
    chance: "5.3%"
  },
  I0AJ: {
    name: "나무족 돌칸[빈카드]",
    type: "빈카드",
    effects: [
      "빈카드를 사용하여 몬스터를 봉인할수있습니다.",
      "나무족 돌칸을 봉인합니다."
    ],
    mob: "나무족 돌칸",
    chance: "1%, 1%"
  },
  I0BD: {
    name: "숲의 지혜",
    type: "재료",
    effects: ["나무족 돌칸이 떨구는 아이템", "조합에 사용됨"],
    mob: "나무족 돌칸",
    chance: "7%"
  },
  I0AD: {
    name: "나무족 트론[빈카드]",
    type: "빈카드",
    effects: [
      "빈카드를 사용하여 몬스터를 봉인할수있습니다.",
      "나무족 트론을 봉인합니다."
    ],
    mob: "나무족 트론",
    chance: "1%"
  },
  I18L: {
    name: "리프의 돌",
    type: "특수",
    effects: [
      "풀속성 정보가 담겨 있는 돌이다.",
      "퀘스트에 사용됨, 조합에 사용됨, 포켓몬 특수 진화"
    ],
    mob: ["나무족 트론", "부엉부엉이", "숲의 일족 - 라로나"],
    chance: ["0.05%", "0.1%", "0.11%"]
  },
  I0BE: {
    name: "숲의 망각",
    type: "재료",
    effects: ["나무족 트론이 떨구는 아이템", "조합에 사용됨"],
    mob: "나무족 트론",
    chance: "7.1%"
  },
  I0AF: {
    name: "나무족 파임[빈카드]",
    type: "빈카드",
    effects: [
      "빈카드를 사용하여 몬스터를 봉인할수있습니다.",
      "나무족 파임을 봉인합니다."
    ],
    mob: "나무족 파임",
    chance: "1%"
  }
};
