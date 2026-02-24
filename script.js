let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main');
const hiddenSection = document.getElementById('hiddenSection')

const all = document.getElementById('all')
const interview = document.getElementById('interview')
const rejected = document.getElementById('rejected')

const jobCount = document.getElementById('jobCount');


function count() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}


function toggleStyle(id) {
    all.classList.remove('bg-[#3b5fea]', 'text-[#ffffff]');
    interview.classList.remove('bg-[#3b5fea]', 'text-[#ffffff]');
    rejected.classList.remove('bg-[#3b5fea]', 'text-[#ffffff]');


    all.classList.add('bg-[#ffffff]', 'text-[#002c5c]');
    interview.classList.add('bg-[#ffffff]', 'text-[#002c5c]');
    rejected.classList.add('bg-[#ffffff]', 'text-[#002c5c]');

    const selected = document.getElementById(id);

    currentStatus = id;
    console.log(currentStatus);

    selected.classList.add('bg-[#3b5fea]', 'text-[#ffffff]');
    selected.classList.remove('bg-[#ffffff]', 'text-[#002c5c]');


    if (id === 'interview') {
        allCardSection.classList.add('hidden');
        hiddenSection.classList.remove('hidden')

        renderInterview();
        updateJobCount();
    }
    else if (id === 'all') {
        allCardSection.classList.remove('hidden');
        hiddenSection.classList.add('hidden');

        updateJobCount();

    }
    else if (id === 'rejected') {
        allCardSection.classList.add('hidden');
        hiddenSection.classList.remove('hidden');

        renderRejected();
        updateJobCount();
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
        parenNode.querySelector('.status').className = 'status text-[#10b981] bg-[#ffffff] border border-[#10b981] px-3 py-2 mt-3 mb-4 w-30 h-10 text-center';


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
            renderInterview()
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
        parenNode.querySelector('.status').className = 'status text-[#ef4444] bg-[#ffffff] border border-[#ef4444] px-3 py-2 mt-3 mb-4 w-30 h-10 text-center';


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
            renderRejected();
        }

        count();
    }
})


function renderInterview() {

    hiddenSection.innerHTML = ''

    for (let interviews of interviewList) {

        console.log(interviews);

        let div = document.createElement('div');
        div.className = 'bg-[#ffffff] flex justify-between p-6 w-auto cards'
        div.innerHTML = `
        <div class="">
            <div class="card-info">
                <p class="companyName text-lg text-[#002c5c]">${interviews.companyName}</p>
                <p class="position text-[16px] text-[#002c5c]">${interviews.position}</p>
                <p class="type text-[#002c5c] py-5">${interviews.type}</p>
                <p class="status bg-[#ffffff] text-[#10b981] border border-[#10b981] px-3 py-2 mt-3 mb-4 w-30 h-10 text-center">${interviews.status}</p >
                <P class="description text-[#323b49] text-[14px]">${interviews.description}</P>
            </div >
            <div class="flex gap-2 py-6">
                <button class="interviewBtn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejectedBtn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div >
        <div>
            <button class="cursor-pointer p-4"><i class="trash fa-regular fa-trash-can  border border-[#f1f2f4] rounded-full pr-6 pt-2 pb-2 pl-2" style="color: #002c5c;"></i></button>
        </div>
    `
        hiddenSection.appendChild(div)
    }
}

function renderRejected() {

    hiddenSection.innerHTML = ''

    for (let reject of rejectedList) {

        let div = document.createElement('div');
        div.className = 'bg-[#ffffff] flex justify-between p-6 w-auto cards'
        div.innerHTML = `
        <div class="">
            <div class="card-info">
                <p class="companyName text-lg text-[#002c5c]">${reject.companyName}</p>
                <p class="position text-[16px] text-[#002c5c]">${reject.position}</p>
                <p class="type text-[#002c5c] py-5">${reject.type}</p>
                <p class="status bg-[#ffffff] text-[#ef4444] border border-[#ef4444] px-3 py-2 mt-3 mb-4 w-30 h-10 text-center">${reject.status}</p>
                <P class="description text-[#323b49] text-[14px]">${reject.description}</P>
            </div>
            <div class="flex gap-2 py-6">
                <button class="interviewBtn btn btn-outline btn-success">INTERVIEW</button>
                <button class="rejectedBtn btn btn-outline btn-error">REJECTED</button>
            </div>
        </div >
        <div>
            <button class="cursor-pointer p-4"><i class="trash fa-regular fa-trash-can  border border-[#f1f2f4] rounded-full pr-6 pt-2 pb-2 pl-2" style="color: #002c5c;"></i></button>
        </div>
    `
        hiddenSection.appendChild(div)
    }
}


mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('trash')) {

        const parenNode = event.target.parentNode.parentNode.parentNode;
        const companyName = parenNode.querySelector('.companyName').innerText;

        parenNode.remove();

        interviewList = interviewList.filter(item => item.companyName !== companyName);

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        count();
        updateJobCount();
    }
});

// function updateJobCount() {
//     if (currentStatus === 'all') {
//         jobCount.innerText = allCardSection.children.length + " jobs";
//     }
//     else if (currentStatus === 'interview') {
//         jobCount.innerText = interviewList.length + " jobs";
//     }
//     else if (currentStatus === 'rejected') {
//         jobCount.innerText = rejectedList.length + " jobs";
//     }
// }


function updateJobCount() {

    if (currentStatus === 'all') {

        jobCount.innerText = allCardSection.children.length + " jobs";
    }
    else if (currentStatus === 'interview') {

        jobCount.innerText = interviewList.length + " jobs";

        if (interviewList.length === 0) {

            hiddenSection.innerHTML = `
                <div class="text-center py-25">
                    <img class = "mx-auto" src="jobs.png" alt="">
                    <p class="text-[#002c5c] font-semibold text-[24px] mt-4">No jobs available</p>
                    <p class="text-[16px] text-[#64748b]">Check back soon for new job opportunities</p>
                </div>
            `;
        }
    }
    else if (currentStatus === 'rejected') {

        jobCount.innerText = rejectedList.length + " jobs";

        if (rejectedList.length === 0) {

            hiddenSection.innerHTML = `
                <div class="text-center py-25">
                    <img class = "mx-auto" src="jobs.png" alt="">
                    <p class="text-[#002c5c] font-semibold text-[24px] mt-4">No jobs available</p>
                    <p class="text-[16px] text-[#64748b]">Check back soon for new job opportunities</p>
                </div>
            `;
        }
    }
}