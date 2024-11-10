class Dequeue {
    constructor(nums){
        this.queue = [];
        this.nums = nums
    }
    insert(index){
      let currEle = this.nums[index];
      let topElement = this.nums[this.queue[this.queue.length -1]];
      while(!this.isEmpty() && currEle >= topElement){
        // pop the last element
        this.queue.pop();
        topElement = this.nums[this.queue[this.queue.length -1]];
      }
      this.queue.push(index);
    }
    popLeft(){
        // pop first element of queue
       return this.queue.shift();
    }
    currentMax(){
       return this.nums[this.queue[0]];
    }
    isEmpty(){
        return (this.queue.length === 0);
    }
    checkOverflow(currentIndex,k){
      let topIndex = this.queue[0];
      if(topIndex === (currentIndex - k)){
        this.popLeft();
      }
    }
}
var maxSlidingWindow = function(nums, k) {
    let dequeue = new Dequeue(nums);
    let ans = [];
    let i = 0;
    while(i < k){
        dequeue.insert(i);
        i++;
    }
    // now the top element is the first max element of first k window
    ans.push(dequeue.currentMax());
    while(i < nums.length){
        // the queue must not contain more than k element
        if(!dequeue.isEmpty()){
            dequeue.checkOverflow(i,k);
        }
        dequeue.insert(i);
        ans.push(dequeue.currentMax());
        i++;
    }
    return ans;


}
maxSlidingWindow(nums =
    [1,-1],
    k =
    1);