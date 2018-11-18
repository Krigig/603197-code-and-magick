var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 50;

var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;

var topTitleHeight = 80;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP - topTitleHeight;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx,names,times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    var barY = topTitleHeight + barHeight - (barHeight * times[i]) / maxTime;
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(1, 47, 130, ' + Math.random() + ' )';
    }
    ctx.fillRect(CLOUD_X + FONT_GAP + (FONT_GAP + BAR_WIDTH) * i,barY, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }



};

// window.renderStatistics = function(ctx,names,times) {

//   ctx.fillStyle = '#000';
//   ctx.font = '16px PT Mono';
//   ctx.fillText('Ура вы победили!', 130, 50);
//   ctx.fillText('Список результатов:', 130, 70);

//   ctx.fillText('Вы', 130, 260);
//   ctx.fillRect(130, 90, 20, 140);

// };
