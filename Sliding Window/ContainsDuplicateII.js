var containsNearbyDuplicate = function(nums, k) {
    let indicesDiffMap = {}
    let i = 0;
    while(i < nums.length){
        let key = nums[i];
        if(key in indicesDiffMap){
            diff = i- indicesDiffMap[key]
            if(diff <= k){
                return true;
            }else{
                indicesDiffMap[key]=i;
            }
        }else{
            indicesDiffMap[key] = i;
        }
        i+=1;
    }
  return false;
}; 
containsNearbyDuplicate(nums = [1,2,3,1,2,3], k = 2);