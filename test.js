function TempTracker() {
    this.max = 0;
    this.min = 0;
    this.avg = 0;
    this.count = 0;
}

TempTracker.prototype.insert = function(newTemp) {
    if( this.count === 0 ) {
        this.min = this.max = this.avg = newTemp;
    } else {
        this.min = this.min > newTemp ? newTemp : this.min;
        this.max = this.max < newTemp ? newTemp : this.max;
        this.avg = (this.avg * this.count + newTemp) / (this.count + 1);
    }
    this.count ++;
}

TempTracker.prototype.getMax = function() {
    return this.max;
}

TempTracker.prototype.getMin = function() {
    return this.min;
}

TempTracker.prototype.getAvg = function() {
    return this.avg;
}

// TempTracker.prototype.__defineGetter__("maxTemp", function() { return this.max });
// TempTracker.prototype.__defineSetter__("maxTemp", function(e) { this.max = e });

let temp = new TempTracker()

temp.insert(4)
temp.insert(5)
temp.insert(8)
temp.insert(3)
temp.insert(1)
temp.insert(33)
temp.insert(22)

console.log(temp.getMax())
console.log(temp.getMin())
console.log(temp.getAvg())