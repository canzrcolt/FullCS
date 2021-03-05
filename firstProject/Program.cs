using System;
using firstProject.math;

namespace firstProject
{
    class Program
    {
        static void Main(string[] args)
        {
            byte nummy = 255;
            nummy += 1;
            var number = "12345";
            int i = Convert.ToInt32(number);
            System.Console.WriteLine($"{number.GetType()} {i.GetType()} {nummy}");
            var sillyAdd = new Calculator();
            System.Console.WriteLine(sillyAdd.add(2, 17));
        }


    }
}
