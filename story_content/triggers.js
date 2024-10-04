function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IhkskQ66SI":
        Script1();
        break;
      case "5urOzXjBeJW":
        Script2();
        break;
      case "6aqeUL2JIXx":
        Script3();
        break;
      case "5dPJ21t65ep":
        Script4();
        break;
      case "6UuYGJs44sC":
        Script5();
        break;
      case "6o05WPEyd7B":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6oydynlIzLg');
const duration = 250;
const easing = 'ease-out';
const id = '60QLxVodj2n';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6oydynlIzLg');
const duration = 250;
const easing = 'ease-out';
const id = '60QLxVodj2n_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5UzyDdGJsPv');
const duration = 250;
const easing = 'ease-out';
const id = '5p95G61ndlI';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5UzyDdGJsPv');
const duration = 250;
const easing = 'ease-out';
const id = '5p95G61ndlI_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6ThDBkZh8Cp');
const duration = 250;
const easing = 'ease-out';
const id = '68w7Id3Cfl5';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6ThDBkZh8Cp');
const duration = 250;
const easing = 'ease-out';
const id = '68w7Id3Cfl5_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
