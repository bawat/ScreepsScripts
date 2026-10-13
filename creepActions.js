module.exports = {
    mine: function(creep, sourceList){
        
        var data = {
            get: toCheckAgainst => {return creep.memory.miningStatus == toCheckAgainst},
            set: status => {creep.memory.miningStatus = status},
        }
        var currentlyMining = {
                get: () => data.get("Mining"),
                set: () => data.set("Mining")
            }
        var currentlyStoring = {
                get: () => data.get("Storing"),
                set: () => data.set("Storing")
            }
        var awaitingJob = {
                get: () => {return (data.get("AwaitingJob") || data.get(""))},
                set: () => data.set("AwaitingJob")
            }
        
        if(awaitingJob.get()){
            var sourcesFilteredByDistance = sourceList;
            var energyDropoff = Game.spawns['CheeseGatherers'].pos;
            sourcesFilteredByDistance.sort(function(sourceA, sourceB){ return sourceA.pos.findPathTo(energyDropoff) - sourceB.pos.findPathTo(energyDropoff) });
            
            var miningFunctions = require('miningNodeFunctions');
            
            for(var i = 0 ; i < sourcesFilteredByDistance.length; i++){
                if(miningFunctions.hasFreeJob(sourcesFilteredByDistance[i], Game.spawns['CheeseGatherers'].memory.arrMiningAllocations)){
                    miningFunctions.allocateToMineSpecificNode(sourcesFilteredByDistance[i], Game.spawns['CheeseGatherers'].memory.arrMiningAllocations, creep);
                    currentlyMining.set();
                }
            }
        }
        
        if(currentlyMining.get()){
            console.log("Mining");
        
            if(creep.carry.energy >= creep.carryCapacity){
                storing.set();
            }else{
                //energyTarget = currentRoom.find(FIND_SOURCES)[i % numberOfSources];
                console.log(JSON.stringify(sourceList[0].getAccessiblePositions()));
                if(creep.harvest(sourceList.source) == ERR_NOT_IN_RANGE){
                    creep.moveTo(sourceList.source);
                }
            }
        
        }
        if(currentlyStoring.get()){
            
            checkConstructionList(i);
            
            if(creep.carry.energy == 0 || finished[i] == true){
                creep.memory = "Mining";
                finished[i] = false;
            }
        }
    }
};