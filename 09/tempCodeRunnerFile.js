let person = {
    name: 'lowXenergy',
    age: 99,
    city: 'Earth',
    contact: {
        email: 'lowx@energy.com',
        phoneNo:'12345234134'
    }
};
function greet({name="Unknown",city="Unknown",...rest}){
    console.log(`Hello ${name} from ${city}`);
    console.log(rest);
    
}
greet(person)

function contact({contact:{email,phoneNo}}){
    console.log(`Your email is ${email} and phoneNo is ${phoneNo}`);
}
contact(person)