function changeColor() {
    let colors = ["pink", "purple", "yellow", "blue"];
    let random = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random];
}