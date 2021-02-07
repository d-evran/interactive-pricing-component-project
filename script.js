const range = document.getElementById("range");
const pageV = document.getElementById("pageV");
const price = document.getElementById("price");
const checkbox = document.getElementById("checkbox");


const views = ["10K ","50K ","100K ","500K ","1M "];
const prices = ["8.00","12.00","16.00","24.00","36.00"];

var ranges = [];
for (let i=0; i<101; i++){
    ranges.push(i);
}

range.oninput = function (){

    if(checkbox.checked){
        checkbox.checked = false;
        const priceNormal = parseInt(price.innerHTML,10)*4;
        price.innerHTML = priceNormal + ".00";
    }

    const percentage = ranges[this.value];
    switch (percentage) {
        case 1:
            pageV.innerHTML = views[0];
            price.innerHTML = prices[0];
            break;
        case 5:
            pageV.innerHTML = views[1];
            price.innerHTML = prices[1];
            break;
        case 10:
            pageV.innerHTML = views[2];
            price.innerHTML = prices[2];
            break;
        case 50:
            pageV.innerHTML = views[3];
            price.innerHTML = prices[3];
            break;
        case 100:
            pageV.innerHTML = views[4];
            price.innerHTML = prices[4];
            break;
        default:
            break;
    }
    let color = 'linear-gradient(90deg, rgb(165, 243, 235) 0%, rgb(165, 243, 235)' + percentage + '%, rgb(234, 238, 251)' + (100-percentage) + '%)';
    range.style.background = color;
};
range.oninput();

checkbox.addEventListener('change',function(){
    if(this.checked){
        const discountP = parseInt(price.innerHTML,10)*0.25;
        price.innerHTML = discountP + ".00";
    }
    else {
        const priceNormal = parseInt(price.innerHTML,10)*4;
        price.innerHTML = priceNormal + ".00";
    }
});

const settings = {
    fill: '#a5f3eb',
    background: '#eaeefb'
}

range.addEventListener('input',(event)=>{
    applyFill(event.target);
});

function applyFill(slider){
    const percentage = ranges[this.value];
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
    slider.style.background = bg;
}