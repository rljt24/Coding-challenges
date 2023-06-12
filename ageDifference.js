class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		let diff = other.age - this.age;
        if(diff > 0){
            console.log(`${other.name} is older than me`);
        } else if(diff < 0){
            console.log(`${other.name} is younger than me`);
        } else {
            console.log(`${ohter.name} is the same age as me`);
        }
		
	}
}