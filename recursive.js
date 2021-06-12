const input = [
    {
        name: "test",
        cost: {
            value: 1000
        }
        , subTotal: []
    },
    {
        name: "test 1",
        cost:  {
            value: 4000
        },
        subTotal: [
            {
                name: "test",
                cost: {
                    value: 1000
                }
        , subTotal: [
            {
                name: "test",
                cost: {
                    value: 1000
                }
        , subTotal: [
            {
                name: "test",
                cost: {
                    value: 1000
                }
        , subTotal: [] 
            }
        ] 
            }
        ] 
            }
        ]
    }
]


const getAverage = (data, total = 0, count = 0) => {
    let result = {};
    data.forEach((ele) => {
        total += ele.cost.value;
        count += 1;
        result = { total, count};
        if(ele.subTotal.length > 0) {
            result =  getAverage(ele.subTotal, total, count);
        }
    })

    return result;
}

var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    
    let i = 0;
    
    for(let j = 1; j < nums.length; j++) {
        if(nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};

removeDuplicates([1,1,2])