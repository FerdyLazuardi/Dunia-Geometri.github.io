window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script12 = function()
{
  DS.appState.currentVolume()     
DS.appState.setVolume( 0 )
}

window.Script13 = function()
{
  DS.appState.currentVolume()     // get sound volume [0 ... 1]
DS.appState.setVolume( 1 )  
}

};
