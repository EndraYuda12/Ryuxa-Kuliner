
const whatsappNumber = "6281261541285";
const namaToko = "Ryuxa";

const menuMakanan = [
  {
    nama: "Nasi Goreng",
    harga: 15000,
    kategori: "Makanan Berat",
    deskripsi: "Nasi goreng spesial dengan telur dan bumbu pilihan.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWNXXKTD3xIOO5tRHZxcO0gE_0kYTMGiw7RWI2gl0-A&s=10"
  },
  {
    nama: "Mie Ayam",
    harga: 15000,
    kategori: "Mie & Bakso",
    deskripsi: "Mie kenyal dengan potongan ayam dan kuah gurih.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2re188gErqb7RWf4bpKKPy1zcIvL_6UtgNGLVPRnlaA&s=10"
  },
  {
    nama: "Ayam Geprek",
    harga: 15000,
    kategori: "Makanan Berat",
    deskripsi: "Ayam crispy dengan sambal pedas yang menggugah selera.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCBmfE0waI5d8mXtM0cy6sMRKl1S9SZ9mxoUBLn5Bew&s=10"
  },
  {
    nama: "Sate Ayam",
    harga: 20000,
    kategori: "Makanan Berat",
    deskripsi: "Sate ayam dengan bumbu kacang dan kecap spesial.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXwKw6VJUzaJ4h7Ge8l-pI0IuNM7ldrsF1Bqwaworkw&s=10"
  },
  {
    nama: "Bakso",
    harga: 10000,
    kategori: "Mie & Bakso",
    deskripsi: "Bakso daging dengan kuah hangat dan gurih.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4dvYiyBF54dD8GvbbzhJUJtZZYvfSd7Ft_8UFm6GEQ&s=10"
  },
  {
    nama: "Es Teh Manis",
    harga: 5000,
    kategori: "Minuman",
    deskripsi: "Teh manis segar untuk menemani makanan.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC909gLFFmX-51p_BopZrjbDwEjZyYv-yvBRVzHQ-aUw&s=10"
  },
  {
    nama: "Es Jeruk",
    harga: 7000,
    kategori: "Minuman",
    deskripsi: "Minuman jeruk segar dengan rasa manis dan asam.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJ7KlYnNl2SxfSayxyxEA3pr_ZJtW2zZn839riL73LA&s=10"
  },
  {
    nama: "Jus Alpukat",
    harga: 10000,
    kategori: "Minuman",
    deskripsi: "Jus alpukat lembut dengan rasa creamy.",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCz66I2jYwgRH6A4PqF1EYtQj__GlqlOymdQvCEJ4Yg&s=10"
  },
  {
    nama: "Kopi Susu",
    harga: 10000,
    kategori: "Minuman",
    deskripsi: "Perpaduan kopi dan susu yang nikmat.",
    foto: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
  },
];

const menuContainer = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const menuCount = document.getElementById("menuCount");
const emptyState = document.getElementById("emptyState");

function formatRupiah(harga) {
  return "Rp" + harga.toLocaleString("id-ID");
}

function buatLinkPesanan(menu) {
  const pesan = `Halo ${namaToko}, saya ingin memesan ${menu.nama} dengan harga ${formatRupiah(menu.harga)}.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesan)}`;
}

function tampilkanMenu() {
  const kataKunci = searchInput.value.toLowerCase().trim();
  const kategoriDipilih = categoryFilter.value;

  const hasilFilter = menuMakanan.filter((menu) => {
    const cocokNama = menu.nama.toLowerCase().includes(kataKunci);
    const cocokKategori =
      kategoriDipilih === "Semua" ||
      menu.kategori === kategoriDipilih;

    return cocokNama && cocokKategori;
  });

  menuContainer.innerHTML = "";

  hasilFilter.forEach((menu) => {
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
            <span class="menu-category">${menu.kategori}</span>

            <h5>${menu.nama}</h5>
            <p>${menu.deskripsi}</p>

            <div class="d-flex justify-content-between align-items-center gap-2">
              <span class="price">
                ${formatRupiah(menu.harga)}
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

  menuCount.textContent =
    `Menampilkan ${hasilFilter.length} dari ${menuMakanan.length} menu`;

  emptyState.classList.toggle("d-none", hasilFilter.length !== 0);
}

searchInput.addEventListener("input", tampilkanMenu);
categoryFilter.addEventListener("change", tampilkanMenu);

tampilkanMenu();

const contactButton = document.getElementById("contactButton");

if (contactButton) {
  const pesanKontak = encodeURIComponent(
    `Halo ${namaToko}, saya ingin bertanya mengenai menu makanan.`
  );

  contactButton.href =
    `https://wa.me/${whatsappNumber}?text=${pesanKontak}`;
}
