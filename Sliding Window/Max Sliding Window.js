class Dequeue{
  constructor(nums){
      this.nums = nums;
      this.queue = [];
  }
  isEmpty(){
       (this.queue.length > 0)?false:true;
  }
  peek(){
      return this.queue[this.queue.length -1]
  }
  insert(item){
      while(!this.isEmpty() && this.nums[item] >= this.nums[this.peek()]){
          this.queue.pop();
          }
          this.queue.push(item);
      }
  
  popLeft(){
     return this.queue.shift();
  }
}
  
var maxSlidingWindow = function(nums, k) {
  let ans = [];
 let dequeue = new Dequeue(nums);
 let i = 0;
 while(i < k){
   dequeue.insert(i);
   i++;
 }
 ans.push(nums[dequeue.queue[0]]);
 while(i < nums.length){
  if(!(dequeue.isEmpty()) && dequeue.queue[0] === (i-k)){
      dequeue.popLeft();
  }
  dequeue.insert(i);
  ans.push(nums[dequeue.queue[0]]);
  i++;
 }
 return ans;
};
maxSlidingWindow(nums =
    [1,3,-1,-3,5,3,6,7],
    k =
    3);