function DistinctNumberBasic(n,nums){
    // const set = new Set(nums);
    //  return set.size


    const set = new Set();
    for (let i = 0; i <n ; i++){
        set.add(nums[i]);

    }
    return set.size();

}