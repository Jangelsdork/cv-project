console.log("hello World!")

let user = {
    name: "john",
    surname: "smith",
}

console.log(user)

user["name"] = "Pete"

console.log(user)

delete user.name

console.log(user)

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let totalAmount = 0
  for (let dollars in salaries){
     totalAmount += salaries[dollars] 
  }

  console.log(totalAmount)


  const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
  };

  console.log(person.bio())