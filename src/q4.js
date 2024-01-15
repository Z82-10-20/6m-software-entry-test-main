/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's #abilities array.     
*/
class Parent{
    abilities = []

    constructor(){
        this.abilities.push("Parenting");
        this.abilities.push("Role modeling");
    }

    showAbilities(){
        console.log("These are the abilities:")
        for(const a of this.abilities){
            console.log(a);
        }
    }
}
// Task 1: Add code here

class Child extends Parent {
    constructor() {
        super(); // Call the constructor of the Parent class
    }

    addNewAbility(newAbility) {
        this.abilities.push(newAbility); // Add a new ability to the Parent's abilities array
    }
}


const p = new Parent();
p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling".



const c = new Child();
c.addNewAbility("Dancing");
c.showAbilities(); // This function should print "Parenting", "Role modeling" and "Dancing".
