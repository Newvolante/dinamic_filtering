$(function() {
    console.log('Script linked correctly to the page');
    console.assert(workers, 'Array of workers not found');

    let rows = [];
    
    /*creates a row for each element of the workers array and
    add it into the array */
    workers.forEach(person => {
        console.log('Iterating ' + person.name);
        
        let $newRow = $('<tr class="row"></tr>');
        
        rows.push({
            person: person,
            row: $newRow
        })
    });
    
    // console.log(rows);

    rows.forEach(item => {
        let $tableBody = $('tbody');
        let $name = $('<td>' + item.person.name + '</td>');
        let $rate = $('<td>' + item.person.rate + '</td>');
        $tableBody.append(item.row);
        item.row.append($name)
                .append($rate);
    });

    

});