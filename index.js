const convertNumbers2English =  function (string) {
    return string.replace(/[\u0660-\u0669]/g, function (c) {
        // console.log(c.charCodeAt(0) - 0x0660)
        return c.charCodeAt(0) - 0x0660;
    })
    .replace(/[\u06f0-\u06f9]/g, function (c) {
        // console.log(c.charCodeAt(0) - 0x06f0)
       return c.charCodeAt(0) - 0x06f0;
   });
}

const convertNumbers2Arabic =  function (string) {
    return string.replace(/[0-9]/g, function (c) {
        return "٠١٢٣٤٥٦٧٨٩".charAt(c);
    })
}


// ١٢ \u0661\u0662

// export default { convertNumbers2English, convertNumbers2Arabic };
module.exports = { convertNumbers2English, convertNumbers2Arabic };