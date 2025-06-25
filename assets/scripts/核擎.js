const 核擎 = extend(CoreBlock, "核擎", 
 {
       canBreak(tile) { return Vars.state.teams.cores(tile.team()).size > 1; },
       canReplace(other) { return other.alwaysReplace; },
       canPlaceOn(tile, team) { return Vars.state.teams.cores(team).size < 1000000000000; },
 });
exports.核擎 = 核擎;
