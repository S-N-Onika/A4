let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const cards = document.getElementById("card");
const mainContainer = document.querySelector('main');

const all = document.getElementById('all')
const accept = document.getElementById('accept')
const reject = document.getElementById('reject')


function count (){
    total.innerText = cards.children.length
    interview.innerText = interviewList.length
    rejected.innerText = rejectedList.length
}

count();

function toggleStyle(id) {
    all.classList.remove('bg-[#3b5fea]' , 'text-[#ffffff]');
    accept.classList.remove('bg-[#3b5fea]' , 'text-[#ffffff]');
    reject.classList.remove('bg-[#3b5fea]' , 'text-[#ffffff]');


    all.classList.add('bg-[#ffffff]' , 'text-[#64748b]');
    accept.classList.add('bg-[#ffffff]' , 'text-[#64748b]');
    reject.classList.add('bg-[#ffffff]' , 'text-[#64748b]');

    const selected = document.getElementById(id);
    // console.log(selected);
    
    selected.classList.add('bg-[#3b5fea]' , 'text-[#ffffff]');
    selected.classList.remove('bg-[#ffffff]' , 'text-[#64748b]');
}
