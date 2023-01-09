
const cr = (s) => document.createElement(s);

const table = document.querySelector('#data');
const record = JSON.parse(localStorage.getItem('data'));



record.forEach( e => {
	// buat elemen baru
	const row = cr('tr');
	const data = cr('td');
	
	// isi elemen td dengan data pesanan
	data.innerText = e.pesanan;
	row.append(data.cloneNode(true));
	
	// isi elemen td dengan data harga
	data.innerText = e.harga;
	row.append(data.cloneNode(true));
	
	// tambahkan elemen action
	row.append(document.querySelector('template').content.cloneNode(true));
	row.setAttribute('idx',e.id);
	
	// masukan elemen ke tabel
	table.append(row);
})

// tambahkan event ketika di klik ke semua button delete
document.querySelectorAll('.btn-delete').forEach(e=>{
	e.addEventListener('click',deleteData);
})
function deleteData(event){
	const id = event.currentTarget.parentElement.parentElement.getAttribute('idx')
	const dataSebelumnya = JSON.parse(localStorage.getItem('data') ?? '[]');
	
	// cari id yang mau di hapus	
	dataSebelumnya.splice(dataSebelumnya.indexOf(dataSebelumnya.find(e=> e.id == id)), 1);
	
	// tulis kebali data yang baru
	localStorage.setItem('data',JSON.stringify(dataSebelumnya));
	location.reload();
}