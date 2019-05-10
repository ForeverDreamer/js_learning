import myExpress from 'express';
import myPath from 'path';
import myOpen from 'open';

const port = 3000;
const myApp = myExpress();
myApp.get('/', function (req, res) {
    res.sendFile(myPath.join(__dirname, '../src/index.html'));
});

myApp.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        myOpen('http://localhost:' + port);
    }
});