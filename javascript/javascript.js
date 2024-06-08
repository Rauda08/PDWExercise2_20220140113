document.getElementById("FormPembelian").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai-nilai formulir
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    var varianType = document.getElementById("varianType").value;
    var date = document.getElementById("date").value;

    // Membuat template HTML custom untuk alert
    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" value="${firstName}" readonly />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" value="${lastName}" readonly />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="alamat">Alamat</label>
                <input type="alamat" value="${alamat}" readonly />
            </div>
            <div class="form-group">
                <label for="varianType">Varian Cake:</label>
                <input type="text" value="${varianType}" readonly />
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="text" value="${date}" readonly />
            </div>
        </div>
    `;

    // Menampilkan data dalam alert
    showCustomAlert(alertHTML, document.getElementById("FormPembelian"));
});

function showCustomAlert(htmlContent, formElement) {
    var alertBox = document.createElement("div");
    alertBox.innerHTML = htmlContent;
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.backgroundColor = "white";
    alertBox.style.padding = "180px"; 
    alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "1000";
    alertBox.style.maxWidth = "100%"; 

    // Menambahkan teks "Pembelian berhasil dilakukan"
    var successText = document.createElement("p");
    successText.textContent = "Pembelian berhasil dilakukan";
    successText.style.fontWeight = "bold";
    alertBox.appendChild(successText);

    var closeButton = document.createElement("button");
    closeButton.textContent = "selesai";
    closeButton.style.marginTop = "10px";
    closeButton.style.backgroundColor = "#ff5076"; 
    closeButton.style.color = "white"; 
    closeButton.style.border = "none"; 
    closeButton.style.borderRadius = "5px"; 
    closeButton.style.padding = "8px 16px";
    closeButton.style.cursor = "pointer"; 
    closeButton.addEventListener("click", function() {
        document.body.removeChild(alertBox);
        formElement.style.display = "none"; 
    });

    alertBox.appendChild(closeButton);
    document.body.appendChild(alertBox);
}
