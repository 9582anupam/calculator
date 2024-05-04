const num1 = document.getElementsByClassName("input1")[0]
const num2 = document.getElementsByClassName("input2")[0]
const ans = document.getElementsByClassName("ans")[0]
const button = document.getElementsByClassName("calculate")[0]
const wrapper = document.getElementsByClassName("wrapper")[0]
const blueScreen = document.getElementsByClassName("blue-screen")[0]

button.addEventListener('click',toggleFullScreen);
function toggleFullScreen() {
    wrapper.requestFullscreen()
    wrapper.style.display = 'none';
    blueScreen.style.display = "block";

}

function calculate()
{
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const value3 = value1 + value2;
    ans.textContent = value3;
}

// console.log(num1.nodeValue);