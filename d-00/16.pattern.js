// *
// * *
// * * *
// * * * *
// * * * * *

    // Outer loop for rows
    for (let i = 1; i <= n; i++) { 
       // Inner loop for columns
        for (let j = 1; j <= i; j++) { 
            // Print '*' with a space
            process.stdout.write('* '); 
        }
        // Move to the next line after each row
        console.log(); 
    }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
    // Outer loop for rows
    for (let i = 1; i <= n; i++) { 
        // Inner loop for columns
        for (let j = 1; j <= i; j++) { 
            // Print current number with a space
            process.stdout.write(j + " "); 
        }
        // Move to the next line after each row
        console.log(); 
    }

// A
// A B
// A B C
// A B C D
// A B C D E

for (let i = 1; i <= n; i++) { 
        // Inner loop for columns
        for (let j = 0; j < i; j++) { 
            // Convert ASCII value to character
            process.stdout.write(String.fromCharCode(65 + j) + " "); 
        }
        // Move to the next line after each row
        console.log(); 
    }

// * * * * *
// * * * *
// * * *
// * *
// *

 for (let i = n; i >= 1; i--) { 
        // Inner loop for columns
        for (let j = 1; j <= i; j++) { 
            // Print '*' with a space
            process.stdout.write("* "); 
        }
        // Move to the next line after each row
        console.log();
    }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

  for (let i = 1; i <= n; i++) { 
        // Loop for leading spaces
        for (let j = 1; j <= n - i; j++) { 
            // Print two spaces for alignment
            process.stdout.write("  "); 
        }
        
        // Print '* ' with a space
        for (let k = 1; k <= i; k++) { 
            process.stdout.write("* "); 
        }
        // Move to the next line after each row
        console.log(); 
    }

// *       * 
//  *     *  
//   *   *   
//    * *    
//     * 

  for (let i = 1; i <= n; i++) { 
        // Loop for leading spaces
        for (let j = 1; j < 2*n; j++) { 
            if(i == j || i+j == 2*n)
               process.stdout.write("*"); 
            else
              process.stdout.write(" "); 
        }
        console.log();
    }

// * *
//  * 
// * *

    for (let i = 1; i <= n; i++) { 
        // Inner loop for columns
        for (let j = 1; j <= n; j++) { 
             // Check diagonal conditions
            if (j === i || i+j === n+1) {
                process.stdout.write("*"); 
            } else {
                process.stdout.write(" "); 
            }
        }
        // Move to the next line after each row
        console.log(); 
    }