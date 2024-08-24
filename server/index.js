// https://gist.github.com/DingGGu/8144a2b96075deaf1bac
// going to make modifications for .wav and .mp3 files
// Thank you to DingGGu for this resource
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const fs = require('fs');

app.use(cors()); // lets app accept requests from the front-end


app.get("/api/home", (req,res) => {
    res.json({messages: "hello world"});
})

app.get('/api/song/:key', function(req,res) {
    var key = req.params.key;

    var music = 'music/' + key + '.mp3';
    console.log("requested: " + music)

    var stat = fs.statSync(music);
    range = req.headers.range;
    var readStream;

    if(range !== undefined) {
        var parts = range.replace(/bytes=/, "").split("-");

        var partial_start = parts[0];
        var partial_end = parts[1];

        if ((isNaN(partial_start) && partial_start.length > 1) || (isNaN(partial_end) && partial_end.length > 1)) {
            return res.sendStatus(500); //ERR_INCOMPLETE_CHUNKED_ENCODING
        }

        var start = parseInt(partial_start, 10);
        var end = partial_end ? parseInt(partial_end, 10) : stat.size - 1;
        var content_length = (end - start) + 1;

        res.status(206).header({
            'Content-Type': 'audio/mpeg',
            'Content-Length': content_length,
            'Content-Range': "bytes " + start + "-" + end + "/" + stat.size
        });

        readStream = fs.createReadStream(music, {start: start, end: end});
    } else {
        res.header({
            'Content-Type': 'audio/mp3',
            'Content-Length': stat.size
        });
        readStream = fs.createReadStream(music);
    }
    readStream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Sever started on port ${PORT}`);
});