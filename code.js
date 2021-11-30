function play() { //will run a quick game of craps using the set variables and descriptors
    var die1 = 5  //defines variable die1
    var die2 = 2  //defines variable die2

    var sum = die1+ die2 //defines the sum variable and has it add the die variables
    document.write("Die 1 = " + die1) //writes the dialogue to define die1
    document.write("<br/>")
    document.write("Die 2 = " + die2) //writes the dialogue to define die2
    document.write("<br/>")
    document.write("Sum = " + sum) //writes the dialogue to state the sum of the die
    document.write("<br/>")
    if (sum == 7||sum == 11) //determines the respone based on the results of the sum
    { document.write("CRAPS - sorry buddy, you lose") //writes the dialogue for the results based on the sum
    document.write("<br/>")
    }
    else if (die1==die2 & die1%2==0) //determines an alternate response based on the results of the sum
    {
        document.write("DOUBLES - you win") //writes the dialogue for the alternate response
        document.write("<br/>")
    }

}
document.write("Simple Craps") //writes a descriptive dialogue
document.write("<br/>")
play()