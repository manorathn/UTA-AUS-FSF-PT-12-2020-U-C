const inquirer = require('inquirer');
const mysql = require('mysql');

//connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'Duckboy85!',
    database: 'top_songsDB'
});

function prompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'filter',
            message: 'What kind of search would you like to do?',
            choices: ['By Artist', 'By Song Count', 'By Year Range', 'By Song Name']
        }
    ]).then(function (input) {
        console.log('User selected ' + input.filter);

        if (input.filter === 'By Artist') {
            console.log('___By Artist___');
            selectArtist();

        }
    })
}
function selectArtist() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'artist',
            message: 'Please enter the artist of your choice.'
        }
    ]).then(function (input) {
        selectArtist = 'SELECT * FROM top5000 WHERE ?';
        connection.query(selectArtist, { artist: input.artist }, (err, data) => {
            if (err) throw err;

            console.log('Songs Returned: ');
            console.log('..................\n');

            for (var i = 0; i < data.length; i++) {
                console.log([
                    data[i].position,
                    data[i].artist,
                    data[i].song,
                ].join(" | "));
            }

        })
    })
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    prompt();
});
