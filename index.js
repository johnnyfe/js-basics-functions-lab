// Code your solution in this file!
function distanceFromHqInBlocks(value){
    const result = Math.abs(value-42);
    return result;
}
function distanceFromHqInFeet(result1){
    let feet;
    feet = distanceFromHqInBlocks(result1);
    result1=feet*264;
    return result1;
}
function distanceTravelledInFeet(value1,value2){
    let distanceTravel = Math.abs(value1-value2)*264;
    return distanceTravel;
}
function calculatesFarePrice(start,destination){
    let dist=distanceTravelledInFeet(start,destination);
    if (dist>=0 && dist<=400)
    {
    let freeSample = Math.abs(start-destination)*0;
    return freeSample;
    }
    if (dist>400 && dist<=2000)
    {
    let cost1= (dist-400)*.02;
    return cost1;
    }
    if (dist>2000 && dist<=2500)
    {
    let cost2=25;
    return cost2;
    }
    if (dist>2500) 
    {
        return 'cannot travel that far'
    }
}
