$(function() {
    console.log('Script linked correctly to the page');
    console.assert(workers, 'Array of workers not found');

    let rows = [];
    
    /*creates a row for each element of the workers array and
    add it into the array */
    workers.forEach(person => {
        console.log('Iterating ' + person.name);
        
        let $newRow = $('<tr class="row"></tr>');
        let $name = $('<td>' + person.name + '</td>');
        let $rate = $('<td>' + person.rate + '</td>');
        $newRow.append($name)
               .append($rate);
        
        rows.push({
            person: person,
            row: $newRow
        })
    });
    
    console.log(rows);

    rows.forEach(item => {
        let $tableBody = $('tbody');
        $tableBody.append(item.row);
    });

    

});