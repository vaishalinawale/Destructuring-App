const animals = [
    { name: "cat", sound: "meow" ,feedingRequirements:{food:2, water:3}},
    { name: "dog", sound: "woof" }
  ];

  function makeAnimals(animal)
  {
    return[
        animal.name,
        function()
        {
            console.log(animal.sound);
        }
    ];
  }
  
  export default animals;
  export {makeAnimals};