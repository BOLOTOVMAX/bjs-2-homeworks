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
    throw new Error ("Tреугольник с такими сторонами не существует");
     }
    }

   get Perimeter (){
       return (this._a + this._b + this._c);
   }

    
   getarea (){
       const p = this.getPerimeter()/ 2;   
       return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
   }

   getTriangle(){
    try
    {
        return new Triangle(a, b, c);
    } catch (error){
        return {
            getArea: function () { return "Ошибка! Треугольник не существует" },
            getPerimeter: function () { return "Ошибка! Треугольник не существует" }
        }
    }
   }
 }
