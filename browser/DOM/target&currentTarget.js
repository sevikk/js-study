// target vs currentTarget

<div id="button">
    <p>button</p>
</div>

document.getElementById('button').addEventListener("click", function(e) {
    console.log(e.target);
    console.log(e.currentTarget);
});