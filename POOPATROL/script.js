function logout() {
    window.location.href = "poopatrol.html"; 
}

function viewlogs() {
    window.location.href = "view.html";
}

function liveulit() {
    window.location.href = "livefeed.html";
}

function clickthis(){
    console.log("Ang galing");
}

function Login() {
    var email = document.getElementById("id_email").value;
    var pass = document.getElementById("id_pass").value;

    if (email === "Poo" || pass === "Patrol") {
        console.log("Ang galing");
        // var myModal = new bootstrap.Modal(document.getElementById('myModalUserList'));
        // myModal.show();
        window.location.href = "livefeed.html"; 
    } else {
        console.log("BOBO MALI KA!");
    }
   
}

function panis(){
    console.log(response.data);
}

function call(){
fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data and display it on your website
    console.log("DB Connected");
    console.log(data); // Here you can process and display the data however you want
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

function callLogs(){
    fetch('http://localhost:3000/logs')
      .then(response => response.json())
      .then(data => {
        // Process the fetched data and display it on your website
        console.log("DB Connected");
        console.log(data); // Here you can process and display the data however you want
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }

function checkLogs() {
    var logthings = document.getElementById("id_viewlogs").value;
    console.log(logthings);
    
    fetch(`http://localhost:3000/logs`)
        .then(response => response.json())
        .then(data => {
            // Process the fetched data and display it on your website
            console.log("Checking");
            console.log(data); // Here you can process and display the data however you want
            displayLogResults(data);
        })
        .catch(error => {
                console.error('Error fetching data:', error);
        });
}
    
function displayLogResults(data) {
    const dataLogsResultsTable = document.getElementById('dataLogsResults');
    dataLogsResultsTable.innerHTML = ''; // Clear previous results

    // Create table
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-striped');

    // Create table header
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Assuming the first object in data contains the keys for the table headings
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });

    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    // Create table body
    const tableBody = document.createElement('tbody');

    // Loop through the search results and create table rows for each result
    data.forEach(result => {
        const row = document.createElement('tr');

        // Assuming each result is an object with properties for each column
        Object.values(result).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value; // Display the value in the cell
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    // Append the table to the table container
    dataLogsResultsTable.appendChild(table);
}

function search() {
    var searchy = document.getElementById("id_sdogs").value;
    console.log(searchy);
    if (searchy !== '') {
        fetch(`http://localhost:3000/search?searchy=${searchy}`)
            .then(response => response.json())
            .then(data => {
                // Process the fetched data and display it on your website
                console.log("Search");
                console.log(data); // Here you can process and display the data however you want
                displaySearchResults(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        alert("Error: Please Input A Term");
    }
}

function displaySearchResults(data) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Clear previous results

    // Create the table element
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows with data
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(cellValue => {
            const td = document.createElement('td');
            td.textContent = cellValue;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    // Append the table to the searchResultsDiv
    searchResultsDiv.appendChild(table);
}

function searchlogresults() {
    var searchylo = document.getElementById("id_searchlogs").value;
    console.log(searchylo);
    if (searchylo !== '') {
        fetch(`http://localhost:3000/sealogs?searchylo=${searchylo}`)
            .then(response => response.json())
            .then(data => {
                // Process the fetched data and display it on your website
                console.log("Search");
                console.log(data); // Here you can process and display the data however you want
                displaySearchLogResults(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        alert("Error: Please Input A Term");
    }
}

function displaySearchLogResults(data) {
    const logresultsDiv = document.getElementById('logresults');
    logresultsDiv.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No results found.';
        logresultsDiv.appendChild(noResultsMessage);
        return;
    }

    // Create the table element
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table rows with data
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(cellValue => {
            const td = document.createElement('td');
            td.textContent = cellValue;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    // Append the table to the searchResultsDiv
    logresultsDiv.appendChild(table);
}

function clearSearchResults() {
    var logresultsDiv = document.getElementById("logresults");
    logresultsDiv.innerHTML = "";
}

function clearLogView() {
    var dataLogsResultsDiv = document.getElementById("dataLogsResults");
    dataLogsResultsDiv.innerHTML = "";
}

//# © Owned by Pauline Sandico (loeyline)