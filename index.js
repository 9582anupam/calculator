const num1 = document.getElementsByClassName("input1")[0]
const num2 = document.getElementsByClassName("input2")[0]
const ans = document.getElementsByClassName("ans")[0]
const button = document.getElementsByClassName("calculate")[0]
const wrapper = document.getElementsByClassName("wrapper")[0]
const blueScreen = document.getElementsByClassName("blue-screen")[0]
const jk = document.getElementsByClassName("jk")[0]

button.addEventListener('click',toggleFullScreen);
function toggleFullScreen() {
    wrapper.requestFullscreen()
    wrapper.style.display = 'none';
    blueScreen.style.display = "block";

    setTimeout(() => {
        console.log("timeout");
        document.exitFullscreen();
        blueScreen.style.display = "none";
        jk.style.display = "inline-block";
        jk.nodeValue = "JK";
    }, 10000);

}

function calculate()
{
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);
    const value3 = value1 + value2;
    ans.textContent = value3;
}