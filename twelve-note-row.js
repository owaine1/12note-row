// does not work efficiently use another attempt
var noteRow = [];

function noteRowGenerator(xNumNoteRow) {

    for (i = 0; i < xNumNoteRow; i++) {

        var result = Math.floor(Math.random() * xNumNoteRow);


        console.log("result is: " + result);

        for (j = 0; j < noteRow.length; j++) {

            if (result !== noteRow[j]) {
                noteRow.push(result);
            }
            // console.log('has been popped');
            // noteRow.pop();
            // xNumNoteRow++;

            console.log("new result is" + result);
        }

        console.log('noterow index at \'0\' is ' + noteRow[i]);
        console.log('noterow is: ' + noteRow);
    }
}
noteRowGenerator(3);