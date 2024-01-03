let a = document.links;
Array.from(a).forEach(function (element) {
    let b = element.href;
    let bn = b.includes('google');
    if (bn) {
        console.log(b)
    }

})