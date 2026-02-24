let interviewList = [];
let rejectedList = [];
let currentStatus = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main');
const hiddenSection = document.getElementById('hiddenSection')

const all = document.getElementById('all')
const interview = document.getElementById('interview')
const rejected = document.getElementById('rejected')


function count() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

count();

function toggleStyle(id) {
    all.classList.remove('bg-[#3b5fea]', 'text-[#ffffff]');
    interview.classList.remove('bg-[#3b5fea]', 'text-[#ffffff]');
    rejected.classList.remove('bg-[#3b5fea]', 'text-[#ffffff]');


    all.classList.add('bg-[#ffffff]', 'text-[#64748b]');
    interview.classList.add('bg-[#ffffff]', 'text-[#64748b]');
    rejected.classList.add('bg-[#ffffff]', 'text-[#64748b]');

    const selected = document.getElementById(id);

    currentStatus = id;
    console.log(currentStatus);

    selected.classList.add('bg-[#3b5fea]', 'text-[#ffffff]');
    selected.classList.remove('bg-[#ffffff]', 'text-[#64748b]');


    if (id == 'interview') {
        allCardSection.classList.add('hidden');
        hiddenSection.classList.remove('hidden')

        renderInterview();
    }
    else if (id == 'all') {
        allCardSection.classList.remove('hidden');
        hiddenSection.classList.add('hidden');
    }
    else if (id = 'rejected') {
        allCardSection.classList.add('hidden');
        hiddenSection.classList.remove('hidden');
        
        renderRejected();
    }
}


mainContainer.addEventListener('click', function (event) {



    if (event.target.classList.contains('interviewBtn')) {

        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.companyName').innerText
        const position = parenNode.querySelector('.position').innerText
        const type = parenNode.querySelector('.type').innerText
        const status = parenNode.querySelector('.status').innerText
        const description = parenNode.querySelector('.description').innerText

        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            companyName,
            position,
            type,
            status: 'Interview',
            description
        }

        const presentInfo = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!presentInfo) {
            interviewList.push(cardInfo)
        }


        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interview') {
            renderRejected()
        }

        count();

    }
    else if (event.target.classList.contains('rejectedBtn')) {

        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.companyName').innerText
        const position = parenNode.querySelector('.position').innerText
        const type = parenNode.querySelector('.type').innerText
        const status = parenNode.querySelector('.status').innerText
        const description = parenNode.querySelector('.description').innerText

        parenNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            companyName,
            position,
            type,
            status: 'Rejected',
            description
        }

        const presentInfo = rejectedList.find(item => item.companyName == cardInfo.companyName)


        if (!presentInfo) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        if (currentStatus == "rejected") {
            renderInterview();
        }

        count();

    }
})


function renderInterview() {

    hiddenSection.innerHTML = ''

    for (let interviews of interviewList) {

        console.log(interviews);

        let div = document.createElement('div');
        div.className = 'bg-[#ffffff] flex justify-between p-6'
        div.innerHTML = `
        <div class="">
            <div class="card-info">
                <p class="companyName text-lg text-[#002c5c]">${interviews.companyName}</p>
                <p class="position text-[16px] text-[#64748b]">${interviews.position}</p>
                <p class="type text-[#64748b] py-5">${interviews.type}</p>
                <p class="status bg-[#eef4ffFF] text-[#002c5c] px-3 py-2 mt-3 mb-4 w-30 h-10 text-center">${interviews.status}</p >
                <P class="description text-[#323b49] text-[14px]">${interviews.description}</P>
            </div >
            <div class="flex gap-2 py-6">
                <button class="interviewBtn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejectedBtn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div >
        <div>
            <button class="cursor-pointer p-4"><i class="fa-regular fa-trash-can  border border-[#f1f2f4] rounded-full pr-6 pt-2 pb-2 pl-2" style="color: #64748b;"></i></button>
        </div>
    `
        hiddenSection.appendChild(div)
    }
}

function renderRejected() {

    hiddenSection.innerHTML = ''

    for (let reject of rejectedList) {

        let div = document.createElement('div');
        div.className = 'bg-[#ffffff] flex justify-between p-6'
        div.innerHTML = `
        <div class="">
            <div class="card-info">
                <p class="companyName text-lg text-[#002c5c]">${reject.companyName}</p>
                <p class="position text-[16px] text-[#64748b]">${reject.position}</p>
                <p class="type text-[#64748b] py-5">${reject.type}</p>
                <p class="status bg-[#eef4ffFF] text-[#002c5c] px-3 py-2 mt-3 mb-4 w-30 h-10 text-center">${reject.status}</p>
                <P class="description text-[#323b49] text-[14px]">${reject.description}</P>
            </div>
            <div class="flex gap-2 py-6">
                <button class="interviewBtn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejectedBtn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div >
        <div>
            <button class="cursor-pointer p-4"><i class="fa-regular fa-trash-can  border border-[#f1f2f4] rounded-full pr-6 pt-2 pb-2 pl-2" style="color: #64748b;"></i></button>
        </div>
    `
        hiddenSection.appendChild(div)
    }
}