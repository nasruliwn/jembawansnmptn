
const DATA_COLLECTED = 69;
const DATA_EXPECTED = 69;
var dataPercentage = (DATA_COLLECTED/DATA_EXPECTED) * 100;

$(document).ready(function () {
    $('#IIS-table').DataTable({
        "ajax": "data/IIS.json"
    });

    $('.progress-bar').css('width', dataPercentage + '%').attr('aria-valuenow', dataPercentage);
    $('.progress-bar').text(`Data terkumpul ${DATA_COLLECTED} dari ${DATA_EXPECTED}`);
    $('#lastUpdate').text('Last checked: Wednesday, 23 Jan 2019 16:07:15 (WIB)');
});
