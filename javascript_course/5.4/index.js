function lightOrDark(string) {
    switch (string) {
     case `yellow`:
     case `pink`:
     case `orange`:
         return `light color`;
         break;        
     case `blue`:   
     case `purple`:   
     case `brown`:
         return `dark color`
         break;   
            default:
                return `unknown color`;
    }
}

let color = `some color`;
console.log(lightOrDark(color));