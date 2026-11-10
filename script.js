const whatsappNumber = "6281261541285";
const namaToko = "Ryuxa";

const menuMakanan = [
  {
    nama: "Nasi Goreng",
    harga: 15000,
    deskripsi: "Nasi goreng spesial dengan telur dan bumbu pilihan.",
    foto: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
  },
  {
    nama: "Mie Ayam",
    harga: 15000,
    deskripsi: "Mie kenyal dengan potongan ayam dan kuah gurih.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2re188gErqb7RWf4bpKKPy1zcIvL_6UtgNGLVPRnlaA&s=10"
  },
  {
    nama: "Ayam Geprek",
    harga: 15000,
    deskripsi: "Ayam crispy dengan sambal pedas yang menggugah selera.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCBmfE0waI5d8mXtM0cy6sMRKl1S9SZ9mxoUBLn5Bew&s=10"
  },
  {
    nama: "Sate Ayam",
    harga: 20000,
    deskripsi: "Sate ayam dengan bumbu kacang dan kecap spesial.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXwKw6VJUzaJ4h7Ge8l-pI0IuNM7ldrsF1Bqwaworkw&s=10"
  },
  {
    nama: "Bakso",
    harga: 10000,
    deskripsi: "Bakso daging dengan kuah hangat dan gurih.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4dvYiyBF54dD8GvbbzhJUJtZZYvfSd7Ft_8UFm6GEQ&s=10"
  },
  {
    nama: "Martabak",
    harga: 25000,
    deskripsi: "Martabak lezat dengan isian melimpah.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxKteT3ijpYKLhGvHWUpIdmyvRUpsOdo2KO-x8HcjFQ&s=10"
  }
];

const menuContainer = document.getElementById("menuContainer");

function tampilkanMenu() {
  menuContainer.innerHTML = "";

  menuMakanan.forEach((menu) => {
    menuContainer.innerHTML += `
      <div class="col-6 col-lg-4">
        <div class="card menu-card">
          <img
            src="${menu.foto}"
            class="card-img-top"
            alt="${menu.nama}"
            loading="lazy"
          >

          <div class="card-body">
            <h5>${menu.nama}</h5>
            <p>${menu.deskripsi}</p>

            <div class="d-flex justify-content-between align-items-center">
              <span class="price">
                Rp${menu.harga.toLocaleString("id-ID")}
              </span>

              <a
                href="${buatLinkPesanan(menu)}"
                target="_blank"
                rel="noopener"
                class="btn-order"
              >
                Pesan
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function buatLinkPesanan(menu) {
  const pesan = `Halo ${namaToko}, saya ingin memesan ${menu.nama} dengan harga Rp${menu.harga.toLocaleString("id-ID")}.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesan)}`;
}

document.getElementById("contactButton").href =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin bertanya mengenai menu makanan.")}`;

tampilkanMenu();