
const DATA_COLLECTED = 69;
const DATA_EXPECTED = 69;
var dataPercentage = (DATA_COLLECTED/DATA_EXPECTED) * 100;

$(document).ready(function () {
    $('#IIS-table').DataTable({
        "ajax": "data/IIS.json"
    });

    $('.progress-bar').css('width', dataPercentage + '%').attr('aria-valuenow', dataPercentage);
    $('.progress-bar').text(`Data terkumpul ${DATA_COLLECTED} dari ${DATA_EXPECTED}`);
    $('#lastUpdate').text('Last checked: Thursday, 31 Jan 2019 14:12:46 (WIB)');
    $('#downloadURL').html('Data beserta nilai bisa diunduh di <a href="data/jathayu-iis-rank.csv">sini</a> (IIS)');
});
