const elBody = document.querySelector('#body');
const elHeader = document.querySelector('#header');
const elTitle = document.querySelector('#title');
const elDasturchi = document.querySelector('#das');
const elListItem = document.querySelector('.list-item');
const elListItem1 = document.querySelector('.list-item1');
const elGithubIcon = document.querySelector('#github-icon');
const elTelegramIcon = document.querySelector('#telegram-icon');
const elGithub = document.querySelector('#github');
const elTelegram = document.querySelector('#telegram');
const elKun = document.querySelector('#kun');
const elTun = document.querySelector('#tun');
const elLoyiha = document.querySelector('#loyiha');

elTun.addEventListener('click', ()=>{
    elBody.classList.toggle('bg-[#221d1d]');
    elHeader.classList.toggle('bg-black');
    elTitle.classList.toggle('text-white');
    elDasturchi.classList.toggle('text-yellow-200');
    elListItem.classList.toggle('border-yellow-200');
    elListItem1.classList.toggle('border-yellow-200');
    elLoyiha.classList.toggle('text-yellow-200');
    elGithubIcon.classList.toggle('text-white');
    elTelegramIcon.classList.toggle('text-white');
    elGithub.classList.toggle('text-white');
    elTelegram.classList.toggle('text-white');
    elKun.classList.toggle('hidden');
    elTun.classList.toggle('hidden');
});
elKun.addEventListener('click', ()=>{
    elBody.classList.toggle('bg-[#221d1d]');
    elHeader.classList.toggle('bg-black');
    elTitle.classList.toggle('text-white');
    elDasturchi.classList.toggle('text-yellow-200');
    elListItem.classList.toggle('border-yellow-200');
    elListItem1.classList.toggle('border-yellow-200');
    elLoyiha.classList.toggle('text-yellow-200');
    elGithubIcon.classList.toggle('text-white');
    elTelegramIcon.classList.toggle('text-white');
    elGithub.classList.toggle('text-white');
    elTelegram.classList.toggle('text-white');
    elKun.classList.toggle('hidden');
    elTun.classList.toggle('hidden');
});