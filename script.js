$(document).ready(function() {
    console.log('Script linked correctly to the page');
    console.assert(workers, 'Array of workers not found');

    /*creates a row for each element of the workers array and
    appends it to the table */
    workers.forEach(person => {
        console.log('Iterating ' + person.name);

        let $tableBody = $('tbody');
        let $newRow = $('<tr class="row"><tr>');
        let $name = $('<td>' + person.name + '<td>');
        let $rate = $('<td>' + person.rate + '<td>');
        
        $tableBody.append($newRow);
        $newRow.append($name)
                    .append($rate);
    });
});