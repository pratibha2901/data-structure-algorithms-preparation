var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let map = new Map();
    let i = 0;
    while(i < nums.length){
        let key = nums[i];
        let v = 0;
        while(v<=valueDiff)
           {
                let keySet1 = key + v;
                let keySet2 = key - v;
                if(map.has(keySet1)){
                    let idxDiff = Math.abs(i-map.get(keySet1));
                    let valDiff = Math.abs(key - nums[map.get(keySet1)]);
                    if(idxDiff <= indexDiff && valDiff <= valueDiff){
                        return true;
                    }
                    else{
                        map.set(key, i);
                    }
                }else if(map.has(keySet2)){
                    let idxDiff = Math.abs(i-map.get(keySet2));
                    let valDiff = Math.abs(key - nums[map.get(keySet2)]);
                    if(idxDiff <= indexDiff && valDiff <= valueDiff){
                        return true;
                    }
                    else{
                        map.set(key, i);
                    }
                }else{
                    map.set(key, i);
                }
                v++;
            
            }    
            

        
        i++;
    }
    return false;
     
};
console.log(containsNearbyAlmostDuplicate([1,2,1,1],1,0));