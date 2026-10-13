var sourceList = Game.spawns['CheeseGatherers'].memory.sourceList;

var actions = require("creepActions");
for(var i = 0; i < Object.keys(Game.creeps).length; i++){
    
    creep = Game.creeps[Object.keys(Game.creeps)[i]];
    console.log('Iterations');
    actions.mine(creep, sourceList);
}