
const DATA_COLLECTED = 262;
const DATA_EXPECTED = 265;
var dataPercentage = (DATA_COLLECTED/DATA_EXPECTED) * 100;

$(document).ready(function () {
    $('#MIA-table').DataTable({
        "ajax": "data/MIA.json"
    });

    $('.progress-bar').css('width', dataPercentage + '%').attr('aria-valuenow', dataPercentage);
    $('.progress-bar').text(`Data terkumpul ${DATA_COLLECTED} dari ${DATA_EXPECTED}`);
    $('#lastUpdate').text('Last checked: Thursday, 31 Jan 2019 14:12:46 (WIB)');
    $('#downloadURL').html('Data beserta nilai bisa diunduh di <a href="data/jathayu-mia-rank.csv">sini</a> (MIA)');
});
