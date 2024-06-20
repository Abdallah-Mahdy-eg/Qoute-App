let btn=document.querySelector('.btn');
let quoteOutput=document.querySelector('.quoteOutput');
let authorOutput=document.querySelector('.authorOutput');
let copy=document.querySelector('.copy');
let sound=document.querySelector('.sound');
let message=document.querySelector('.message');

let quotes=[
    {quote:'Be yourself everyone else is already taken.',name:'― Oscar Wilde'},
    {quote:'So many books, so little time.',name:'― Frank Zappa'},
    {quote:'Two things are infinite: the universe and human stupidity and I\'m not sure about the universe.',name:'― Albert Einstein'},
    {quote:'A room without books is like a body without a soul.',name:'― Marcus Tullius Cicero'},
    {quote:'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',name:'― Bernard M. Baruch'},
    {quote:'You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening, And live like it\'s heaven on earth.',name:'― William W. Purkey'},
    {quote:'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',name:'― Dr. Seuss'},
    {quote:'You only live once, but if you do it right, once is enough.',name:'― Mae West'},
    {quote:'Be the change that you wish to see in the world.',name:'― Mahatma Gandhi'},
    {quote:'A friend is someone who knows all about you and still loves you.',name:'― Elbert Hubbard'},
];

let index=Math.floor(Math.random()*10);
quoteOutput.innerHTML=quotes[index].quote;
authorOutput.innerHTML=quotes[index].name;

function display(){
    index=Math.floor(Math.random()*10);
    console.log(quotes[index]);
    quoteOutput.innerHTML=quotes[index].quote;
    authorOutput.innerHTML=quotes[index].name;
}

function speak(index){
    const utterance = new SpeechSynthesisUtterance(quotes[index].quote);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0];
    speechSynthesis.speak(utterance);
}

function copyQuote(){
    navigator.clipboard.writeText(quoteOutput.innerHTML);
    message.classList.add('message__active');
    console.log(message);
    setInterval(()=>{
        message.classList.remove('message__active');
    },2500);
}

btn.addEventListener('click',()=>{
    display();
});
sound.addEventListener('click',()=>{
    speak(index);
});

copy.addEventListener('click',()=>{
    copyQuote();
});