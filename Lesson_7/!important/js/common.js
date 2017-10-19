$(function() {


	
	
	/*
	let promise = new Promise(function(resolve, reject) {
		setTimeout(function() { 
			let age = +prompt("Your age?");
			 	age >= 18 ? resolve(age) : reject(`${age} is less than need`);
		}, 5000);
    	
	});
	console.info(promise);
	promise.then( age => {
		setTimeout(function() {
		console.info(promise);
		alert(age)}, 5000)
	})
	//promise.catch( age => alert(age));
	console.log("hi");
	console.log("hi");
	console.log("hi");
	console.log("hi");
	console.log("hi"); */
	/*
	function arrGen(n) {
		var arr = [];
		for(var i = 0; i < n; i++) {
			arr.push(Math.floor(Math.random() * n))
		}
		return arr
	}

	function bubbleSort(arr) {
		for( var j = 0; j < arr.length; j++) {
			for( var i = 0; i < arr.length; i++) {
				if( arr[i] > arr[i + 1] ) {
					buf = arr[i];
					arr[i] = arr[i + 1];
					arr[++i] = buf;
				}
			}
		}
		return arr
	}

	var randArr = arrGen(100000);

	console.info(randArr)

	let sort = new Promise(function(resolve, reject) {
		
		var start = new Date();

		var show = bubbleSort(randArr);

		var end = new Date();
		var timeMin = parseInt(( (end - start) / 1000 / 60 ) + "");
		var timeSec = parseInt(( (end - start) / 1000 % 60 ) + "");
		var time = timeMin + " : " + timeSec;
		console.log(show);
		resolve(time)

	});
	sort.then(alert(time))
	console.info("We can  to continue to do something ");
	console.info("We can  to continue to do something ");
	console.info("We can  to continue to do something ");
	console.info("We can  to continue to do something ");
	*/

});

