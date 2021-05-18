let hqBlock = 42;
function distanceFromHqInBlocks(blockNumber1,blockNumber2) {
    if(blockNumber1 < hqBlock) {
        return hqBlock - blockNumber1;
    } 
    else {
    if(blockNumber1 > hqBlock) {
        return blockNumber1 - hqBlock;
    }
    else {
    if (blockNumber1 === hqBlock) {
        return 0;
    }
    }
    }
}

function distanceFromHqInFeet(blockNumber1) {
    return distanceFromHqInBlocks(blockNumber1)*264;
}

function distanceTravelledInFeet(blockNumber1, blockNumber2) {
    if (blockNumber2 > blockNumber1) {
        return (blockNumber2 - blockNumber1) * 264;
    }
    else {
    if (blockNumber1 > blockNumber2) {
        return (blockNumber1 - blockNumber2) * 264;
    }
    else {
    if (blockNumber1 === blockNumber2) {
        return 0;
    }
    }
    }
}

const flatRate = 25;
const cancellationString = "cannot travel that far";

function calculatesFarePrice(blockNumber1, blockNumber2) {
    if (distanceTravelledInFeet(blockNumber1, blockNumber2) < 400) {
        return 0; 
    }
    else {
    if (distanceTravelledInFeet(blockNumber1, blockNumber2) < 2000) {
        return (distanceTravelledInFeet(blockNumber1, blockNumber2) - 400) * 0.02; 
    }
    else {
    if (2000 < distanceTravelledInFeet(blockNumber1, blockNumber2) && distanceTravelledInFeet(blockNumber1, blockNumber2) < 2500) {
        return 25;
    }
    else {
    if (distanceTravelledInFeet(blockNumber1, blockNumber2 >= 2500)) {
        return cancellationString; 
    }
} 
}
}
}
    
    
    
