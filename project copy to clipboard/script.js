const copyBtn = document.querySelector("button")
const textarea = document.querySelector("textarea");

copyBtn.addEventListener('click', () => {
    textarea.select()
    let textValue = textarea.value;
    //  console.log(textValue)

    navigator.clipboard.writeText(textValue)
    copyBtn.innerText = 'Copied text'
    copyBtn.style.backgroundColor = 'rgb(255, 166, 0)'


    setTimeout(() => {
        copyBtn.innerText = 'Copy'
        copyBtn.style.backgroundColor = '#8ad7fa'
    }, 2500);
})