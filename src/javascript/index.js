let display = document.querySelector('.numberDisplay');
const startButton = document.querySelector('.startButton')
const inputNumberGuess = document.getElementById('three-digit-input')
const audio = document.getElementById('audio');
const audioPrank = document.getElementById('audioPrank')
const GussingButton = document.querySelector('.OpenGame');
const disGUes = document.querySelector('.disGUes')
const input = document.querySelector('.input')
const fil = document.querySelector('.fil')
const iconHack = document.querySelector('.iconHack')
const body = document.querySelector('body')
const p = document.querySelector('.p')


startButton.addEventListener('click', function() {
    let maxFinalNumber = 999; // maxima number in display
    let interval;
    let intervalHack;
    let speed = 50; // scrolling speed
    let rollingDuration = 2500; // scrolling time
    // play Audio
    playAudio()




    // function to generate 16 numbers in display
    function generateRandom16Digits() {
        let result = '';
        for (let i = 0; i < 16; i++) {
            result += Math.floor(Math.random() * 10); // Generate a number bettween 0 and  9
        }
        return result;
    }
    
        // function to end the animation function and to get the resut
    function stopRolling() {
        clearInterval(interval);
        let finalNumber = Math.floor(Math.random() * (maxFinalNumber + 1)); // generate result number between 0 and  999
        display.textContent = finalNumber.toString().padStart(3, '0'); // be sure that the result contains 3 number 
    }
    
    
    
    
        // function to start animation
        function startRolling() {
            interval = setInterval(() => {
                display.textContent = generateRandom16Digits();
            }, speed);
        }
    


        function pramkBegin(){
            
            body.innerHTML=''
            body.classList.replace("bg-neutral-700","bg-[url('public/img/hack.webp')]")
            body.innerHTML=`
               <div class="prankDiv">
      <div class="f"><h1>I HACKED YOUR DEVICE GO TO HELL &#128127;</h1></div>
      <p>BANK ACCOUNT ANALYSIS : <br> <h2 class="analyz"></h2></p>
      </div>`
            const analyz = document.querySelector('.analyz')
            function pbankRandomNumber(){
                 intervalHack = setInterval(() => {
                    analyz.textContent = generateRandom16Digits();
                }, speed);
                
            }
            pbankRandomNumber()
        }

    // start scrolling
    startRolling();

    // stop scrolling and show the result
    setTimeout(stopRolling, rollingDuration);
    setTimeout(()=>{
    p.innerText=`No Way IDIOT !!  🤬 `
    },2500)
    setTimeout(()=>{
        fil.classList.add('show')
        playAudioPrank()
    },3000)
    setTimeout(()=>{
        pramkBegin()

    },7000)

    setTimeout(()=>{
        clearInterval(intervalHack)
        playAudioPrank()
    },10000)

    setTimeout(()=>{
    body.innerHTML=''
    // playAudioPrank()
    },12000)


});
inputNumberGuess.addEventListener('input', function(e) {
    // remove all non-numeric characters
    this.value = this.value.replace(/\D/g, '');
    // limit to threee digits
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  });
GussingButton.addEventListener('click', () => {   

    //  swicth to gussing number
    moveToGuessing()
   });
//    function to play audio gussinsgtart
function playAudio(){
        audio.play().catch(error => {
            console.error('audio playback error :', error);
        });
}
function playAudioPrank(){
    audioPrank.play().catch(error => {
        console.error('audio playback error :', error);
    });
}
function moveToGuessing(){
    if(inputNumberGuess.value!=''){
        input.classList.add('hide')
        setTimeout(()=>{
          disGUes.classList.add('active')
        },200)
    }else{
        alert('Enter 3-digit number please')
    }

}

