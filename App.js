const TILE = 48;
const MAP_W = 13;
const MAP_H = 13;
const SAVE_KEY = "spirit_shinobi_v2_save";

const map = [
  "#############",
  "#..N.....T..#",
  "#..gggg.....#",
  "#..g..g.....#",
  "#..g..g.....#",
  "#.....P.....#",
  "#...........#",
  "#..gggg..H..#",
  "#..g..g.....#",
  "#..g..g..S..#",
  "#..gggg.....#",
  "#...........#",
  "#############"
];

const creaturesData = {
  "Ember Wolf": {
    type:"Fire", maxHp:45, maxChakra:30, attack:55, defense:35, speed:60,
    moves:[
      {name:"Flame Bite", power:40, cost:5, type:"Fire", effect:null},
      {name:"Focus", power:0, cost:3, type:"Neutral", effect:"buff_attack"}
    ]
  },
  "Aqua Serpent": {
    type:"Water", maxHp:50, maxChakra:40, attack:45, defense:50, speed:35,
    moves:[
      {name:"Water Pulse", power:35, cost:4, type:"Water", effect:"stun20"},
      {name:"Coil", power:0, cost:3, type:"Neutral", effect:"buff_defense"}
    ]
  },
  "Volt Hawk": {
    type:"Lightning", maxHp:40, maxChakra:35, attack:50, defense:30, speed:70,
    moves:[
      {name:"Thunder Peck", power:45, cost:6, type:"Lightning", effect:"crit20"},
      {name:"Focus", power:0, cost:3, type:"Neutral", effect:"buff_speed"}
    ]
  },
  "Mist Fox": {
    type:"Water
