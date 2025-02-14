function searchTools() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let rows = document.querySelectorAll("#toolList tr");
    rows.forEach(row => {
        let toolName = row.cells[0].textContent.toLowerCase();
        row.style.display = toolName.includes(input) ? "" : "none";
    });
}
