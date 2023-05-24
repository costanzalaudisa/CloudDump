const express = require('express');
const app = express();
const port = 1337;
// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});
// Start the server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
//# sourceMappingURL=app.js.map