var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    let buckets = new Map();
    const getBucketLabel = (element, bucketRange) => {
          return Math.floor(element/bucketRange);
    }
    let bucketRange = valueDiff+1;
    let i = 0;
    while(i < nums.length){
        let bucketLbl = getBucketLabel(nums[i],bucketRange);
        if(buckets.has(bucketLbl)){
            return true;
        }
        if(buckets.has(bucketLbl - 1) && Math.abs(nums[i] - buckets.get(bucketLbl -1))<bucketRange){
            return true;
        }
         if(buckets.has(bucketLbl + 1) && Math.abs(nums[i] - buckets.get(bucketLbl +1))<bucketRange){
            return true;
        }
        buckets.set(bucketLbl,nums[i]);
        if(i >= indexDiff){
            // this is because we want to maintain only elements with index diff less than or equal to indexDiff
             buckets.delete(getBucketLabel(nums[i-indexDiff],bucketRange));
        }
        i++;
    }
  return false;
};

containsNearbyAlmostDuplicate(nums =
    [1,5,9,1,5,9],
    indexDiff =
    2,
    valueDiff =
    3)