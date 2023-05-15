function parseCount (numbers){
    let parseCheck = Number.parseFloat(numbers);
    if(Number.isNaN(parseCheck)){
        throw new Error("Невалидное значение");
    }
    return parseCheck
};

 function validateCount(numbers){
   try{
    return parseCount (numbers)
   }catch(error){
    return error
   }
 };


 class Triangle{
    constructor(a, b, c){
   this.a = a;
   this.b = b;
   this.c = c
   if(a > b + c || b > a + c || c > a + b){
    throw new Error ('Треугольник с такими сторонами не существует');
     }
    }

   get perimeter (){
       return (this.a + this.b + this.c)
   }

    
   get area (){
       const p = (this.a + this.b + this.c)/2;
       return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
       //const p = this.getPerimeter()/ 2;   
       //return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
   }

 }

  function getTriangle (a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch (error){
        return {
             get area () { return "Ошибка! Треугольник не существует" },
            get perimeter () { return "Ошибка! Треугольник не существует" }
        }
    }
   }
