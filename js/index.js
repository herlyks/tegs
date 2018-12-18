$(document).ready(function() {
  init();
  render();
});

var enemy, player;

function init() {
  enemy = new Actor();
  player = new Actor();

  $('#attack').on('click', function() {
    player.attack(enemy).then(enemyTurn);
  });
}

function render() {
  $('.enemy .hp .value').css('width', (enemy.hp/enemy.max_hp*100) + '%');
  $('.enemy .mp .value').css('width', (enemy.mp/enemy.max_mp*100) + '%');
  $('.player .hp .value').css('width', (player.hp/player.max_hp*100) + '%');
  $('.player .mp .value').css('width', (player.mp/player.max_mp*100) + '%');
  setTimeout(render, 100);
}

function Actor(max_hp = 100, max_mp = 100, atk = 10, matk = 10, crit_chance = 0, crit_dmg = 200) {
  this.max_hp      = max_hp;
  this.hp          = this.max_hp;
  this.max_mp      = max_mp;
  this.mp          = this.max_mp;
  this.atk         = atk;
  this.matk        = matk;
  this.crit_chance = crit_chance;
  this.crit_dmg    = crit_dmg;
  this.attack = function(target) {
    target.hp = target.hp - this.atk;
    return this;
  };

  this.then = function(callback) {
    callback();
  };
}

function enemyTurn() {
  alert('yes');
}

function dice(min = 1, max = 6) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
