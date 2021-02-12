const link = document.querySelectorAll('.link');
const tab = document.querySelectorAll('.tab');

//console.log(link);

for (let i = 0; i < link.length; i++) {
    //console.log(link);
    link[i].addEventListener('click', function() {
        for (let ix = 0; ix < link.length; ix++) {
            link[ix].classList.remove('active');
            tab[ix].classList.remove('active-tab');
        }
        tabs(this, tab[i])
    })
}


function tabs(link, tab) {
    link.classList.add('active');
    tab.classList.add('active-tab');
}


// second strat

const linkMin = document.querySelectorAll('.min_link');
const tabMin = document.querySelectorAll('.min_tab');
//console.log(linkMin);



for (let j = 0; j < linkMin.length; j++) {

    linkMin[j].addEventListener('click', function() {

        for (let jx = 0; jx < linkMin.length; jx++) {
            linkMin[jx].classList.remove('active_m');
            tabMin[jx].classList.remove('active-min');
        }
        tabs1(this, tabMin[j]);
    })
}

function tabs1(linkMin, tabMin) {
    linkMin.classList.add('active_m');
    tabMin.classList.add('active-min');
};