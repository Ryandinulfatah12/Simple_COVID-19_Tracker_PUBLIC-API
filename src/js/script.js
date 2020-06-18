function reqData() {
	$.ajax({
		url: 'https://covid19.mathdro.id/api/countries/Indonesia/confirmed/',
		type: 'GET',
		dataType: 'json',

		success: (data) => {
			//console.log(data);
			let hasil = data[0];
			const confirm = String(hasil.confirmed).replace(/(.)(?=(\d{3})+$)/g,'$1,');
			const recover = String(hasil.recovered).replace(/(.)(?=(\d{3})+$)/g,'$1,');
			const activ = String(hasil.active).replace(/(.)(?=(\d{3})+$)/g,'$1,');
			const dead = String(hasil.deaths).replace(/(.)(?=(\d{3})+$)/g,'$1,');


			$('#negara').append(`
				<h3 class="text-center font-weight-bolder">`+ hasil.countryRegion +`</h3>
			`);
			$('#terkonfirmasi').html(`
				<h2 class="font-weight-bolder">`+ confirm +`</h2>
			`);

			$('#sembuh').html(`
				<h2 class="font-weight-bolder">`+ recover +`</h2>
			`);

			$('#aktif').html(`
				<h2 class="font-weight-bolder">`+ activ +`</h2>
			`);

			$('#meninggal').html(`
				<h2 class="font-weight-bolder">`+ dead +`</h2>
			`);
		}
	});
}
reqData();

function globalData() {
	$.ajax({
		url: 'https://covid19.mathdro.id/api/',
		type: 'GET',
		dataType: 'json',
		success: (data) => {
			const global_positive = String(data.confirmed.value).replace(/(.)(?=(\d{3})+$)/g,'$1,');
			const global_recovered = String(data.recovered.value).replace(/(.)(?=(\d{3})+$)/g,'$1,');
			const global_deaths = String(data.deaths.value).replace(/(.)(?=(\d{3})+$)/g,'$1,');
			$('#positive').html(`
				<h2 class="font-weight-bolder">`+ global_positive +`</h2>
			`);

			$('#recovered').html(`
				<h2 class="font-weight-bolder">`+ global_recovered +`</h2>
			`);

			$('#death').html(`
				<h2 class="font-weight-bolder">`+ global_deaths +`</h2>
			`);		
		}
	})
}
globalData();

// TOMBOL DIKLIK
$('#btn').on('click', function () {
	$.ajax({
		url: 'https://covid19.mathdro.id/api/confirmed',
		type: 'GET',
		dataType: 'json',
		success: (hasil) => {
			console.log(hasil)
		}
	});
});