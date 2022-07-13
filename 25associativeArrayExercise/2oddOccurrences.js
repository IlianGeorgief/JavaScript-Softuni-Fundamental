function oddOccurrences(input) {
   let elements = input.split(' ').map((element) => element.toLowerCase());
   let map = genMap(new Set(elements));

   elements.forEach((ele) => {
      map.set(ele, map.get(ele) + 1);
   });
    
   let output = "";
   Array.from(map).forEach((kvpArr) => {
      let [key, value] = kvpArr;

      if (Number(value) % 2 !== 0) {
         output += key + " ";
      }
   });

   function genMap(set) {
      let map = new Map();
      set.forEach((ele) => {
         map.set(ele, 0);
      });
      return map;
   }
   console.log(output)

   
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'); 