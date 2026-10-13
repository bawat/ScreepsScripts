module.exports = {
    hasFreeJob: (objSource, arrMiningAllocations) => {
        return (getAccessiblePositions().length - arrMiningAllocations[objSource].length) > 0;
    },
    isRelativePositionAccessible: (objSource, x, y) => {//TESTED
        return objSource.room.lookForAt(LOOK_TERRAIN, objSource.pos.x + x, objSource.pos.y + y) != "wall";
    },
    getAccessiblePositions: (objSource) => {
        var positions = [];
        if(module.exports.isRelativePositionAccessible(objSource, 1, 1)){
            positions.push({x:(objSource.pos.x + 1), y:(objSource.pos.y + 1), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, 0, 1)){
            positions.push({x:(objSource.pos.x + 0), y:(objSource.pos.y + 1), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, -1, 1)){
            positions.push({x:(objSource.pos.x + -1), y:(objSource.pos.y + 1), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, 1, 0)){
            positions.push({x:(objSource.pos.x + 1), y:(objSource.pos.y + 0), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, -1, 0)){
            positions.push({x:(objSource.pos.x + -1), y:(objSource.pos.y + 0), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, 1, -1)){
            positions.push({x:(objSource.pos.x + 1), y:(objSource.pos.y + -1), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, 0, -1)){
            positions.push({x:(objSource.pos.x + 0), y:(objSource.pos.y + -1), roomName:objSource.roomName});
        }
        if(module.exports.isRelativePositionAccessible(objSource, -1, -1)){
            positions.push({x:(objSource.pos.x + -1), y:(objSource.pos.y + -1), roomName:objSource.roomName});
        }
        return positions;
    }
};