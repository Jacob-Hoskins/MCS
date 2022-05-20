console.log('hello mcs')

// module.exports = function matchingInputs(emailOne, emailTwo){
//     if(emailOne === emailTwo){
//         console.log(emailOne, emailTwo)
//         return true
//     }
//     else{
//         false
//     }
// };

const verifyInputs = function matchingInputs(emailOne, emailTwo){
    if(emailOne === emailTwo){
        console.log(emailOne, emailTwo)
        return true
    }
    else{
        false
    }
};



module.exports = {verifyInputs}
