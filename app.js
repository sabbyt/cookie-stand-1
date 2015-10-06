var hourOperation = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	},
	
	totalCookieHour: function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	}
	
}

for(var i = 0; i < hourOperation.length; i++) {
  	var text = document.createTextNode(hourOperation[i] + " : Bake " + pikePlace.totalCookieHour() + " Cookies");
  	var list = document.getElementById('pike');
  	var item = document.createElement("li");
  	item.appendChild(text);
  	list.appendChild(item);
  }


var seaTac = {
	location: 'SeaTac Airport',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2,
	
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	},
	
	totalCookieHour: function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	}
	
}

for(var i = 0; i < hourOperation.length; i++) {
  	var text = document.createTextNode(hourOperation[i] + " : Bake " + seaTac.totalCookieHour() + " Cookies");
  	var list = document.getElementById('seaTac');
  	var item = document.createElement("li");
  	item.appendChild(text);
  	list.appendChild(item);
  }


var southCenter = {
	location: 'Southcenter Mall',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9,
	
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	},
	
	totalCookieHour: function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	}
	
}

for(var i = 0; i < hourOperation.length; i++) {
  	var text = document.createTextNode(hourOperation[i] + " : Bake " + southCenter.totalCookieHour() + " Cookies");
  	var list = document.getElementById('southCenter');
  	var item = document.createElement("li");
  	item.appendChild(text);
  	list.appendChild(item);
  }


var bellSQ = {
	location: 'Bellevue Square',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3,
	
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	},
	
	totalCookieHour: function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	}
}

for(var i = 0; i < hourOperation.length; i++) {
  	var text = document.createTextNode(hourOperation[i] + " : Bake " + bellSQ.totalCookieHour() + " Cookies");
  	var list = document.getElementById('bellSQ');
  	var item = document.createElement("li");
  	item.appendChild(text);
  	list.appendChild(item);
}

var alki = {
	location: 'Alki Beach',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6,
	
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour +1)) + this.minCustHour;
	},
	
	totalCookieHour: function() {
		return Math.floor(this.randCustHour() * this.avgCookiesCust);
	}
	
}

for(var i = 0; i < hourOperation.length; i++) {
  	var text = document.createTextNode(hourOperation[i] + " : Bake " + alki.totalCookieHour() + " Cookies");
  	var list = document.getElementById('alki');
  	var item = document.createElement("li");
  	item.appendChild(text);
  	list.appendChild(item);
}

























