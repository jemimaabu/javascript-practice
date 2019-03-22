const fs = require('fs');
fs.readFile('readMe.txt', 'utf8', function(err,data){
	fs.writeFile('writeMe.txt', data);
});

const fs = require('fs');

var dir = '../../Task/';

var input_files = [ 
"a_example.in"
,"b_should_be_easy.in"
,"c_no_hurry.in"
,"d_metropolis.in"
,"e_high_bonus.in"
];

// fs.readFile('readMe.txt', 'utf8', function(err,data){
// 	fs.writeFile('writeMe.txt', data);
// });

function solve_all(files) {
	for ( let file of files ){
		fs.readFile( dir+file, 'utf8', function(err,rawdata){
		console.log( dir+file );
		// console.log(rawdata.length);
		var data = rawdata.split('\n');
		// console.log(typeof rawdata);
		metadata = data.shift();
		metadata = metadata.split(' ');

		let rows = metadata[0];
		let columns = metadata[1];
		let cars = metadata[2];
		let ridenum = metadata[3];
		let bonus = metadata[4];
		let steps = metadata[5];

		console.log(metadata);
		// 	fs.writeFile('writeMe.txt', data);
		});
	}
}

solve_all(input_files);

// console.log(metadata);

function imageExtract(str, index) {
	var arr = str.trim().split(" ");
	var objArr = {shape: arr[0], index: index,  tags: arr.splice(2)};
	return objArr;
}

function splitSentence(sen) {
	var senArray = sen.split("\n");
	var storArr = [];
	for (var i = 0; i<senArray.length; i++) {
		console.log(imageExtract(senArray[i], i));
		storArr.push(imageExtract(senArray[i], i));
	}
	return storArr;
}