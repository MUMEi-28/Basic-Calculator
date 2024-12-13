const display = document.getElementById("display");

// OPERATOR VARIABLES
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const period = document.getElementById("period");

var addedPeriod = false;


// ON CLICK FUNCTIONS ON HTML
function appendInput(input)
{
    display.value += input;
}
function allClear()
{
    display.value = "0";
    addedPeriod = false;
}
function backspaceInput()
{
    // Makes sure that the 0 is not deleted
    if (display.value.length > 1)
    {
        display.value = display.value.toString().slice(0, -1);
    }

    if (!display.value.includes("."))
    {
        addedPeriod = false;
    }
}
function calculate()
{
    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    // Prevent the "undefined" output to the display
    if (lastStringValue === "")
    {
        display.value = "0";
    }
    // if any of the operator is the last value then calculated
    else if (lastStringValue === "+" ||
        lastStringValue === "-" ||
        lastStringValue === "*" ||
        lastStringValue === "/" ||
        lastStringValue === "" ||
        lastStringValue === "." ||
        lastStringValue === "%"

    )
    {

        // If the last are like this -. +. /.
        if (lastStringValue === ".")
        {
            // Remove the period too
            display.value = display.value.toString().slice(0, -2);
        }
        else
        {
            // Remove the last operator
            display.value = display.value.toString().slice(0, -1);

            // Then evaluate it
            display.value = eval(display.value);
        }
    }

    else
    {
        display.value = eval(display.value);
    }

    //Make sure that the period is not added again on calculated when theres already one
    if (!display.value.includes("."))
    {
        addedPeriod = false;
    }
}
//FUNCTIONS
function AppendOperator(operator)
{
    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    if (lastStringValue !== operator)
    {
        display.value += operator;
    }
    else
    {
        console.log("DUPLICATION OF OPERATORS NOT ALLOWED");
    }
}
// ADD EVENT LISTNERS
percent.addEventListener('click', function ()
{

    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    // If percent was clicked and the last value was any operator, then remove and change the last operator
    if (lastStringValue === "+" ||
        lastStringValue === "-" ||
        lastStringValue === "*" ||
        lastStringValue === "/"
    )
    {
        display.value = display.value.toString().slice(0, -1) + "%";
    }
    else
    {
        // Make sure theres no doubled operator
        AppendOperator("%");
        addedPeriod = false;

    }

});
divide.addEventListener('click', function ()
{
    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    // If divide was clicked and the last value was any operator, then remove and change the last operator
    if (lastStringValue === "+" ||
        lastStringValue === "-" ||
        lastStringValue === "*" ||
        lastStringValue === "%"
    )
    {
        display.value = display.value.toString().slice(0, -1) + "/";
    }
    else
    {
        // Make sure theres no doubled operator
        AppendOperator("/");
        addedPeriod = false;

    }

});
multiply.addEventListener('click', function ()
{
    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    // If multiple was clicked and the last value was any operator, then remove and change the last operator
    if (lastStringValue === "+" ||
        lastStringValue === "-" ||
        lastStringValue === "%" ||
        lastStringValue === "/"
    )
    {
        display.value = display.value.toString().slice(0, -1) + "*";
    }
    else
    {
        // Make sure theres no doubled operator
        AppendOperator("*");
        addedPeriod = false;

    }
});
add.addEventListener('click', function ()
{

    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    // If add was clicked and the last value was any operator, then remove and change the last operator
    if (lastStringValue === "%" ||
        lastStringValue === "-" ||
        lastStringValue === "*" ||
        lastStringValue === "/"
    )
    {
        display.value = display.value.toString().slice(0, -1) + "+";
    }
    else
    {
        // Make sure theres no doubled operator
        AppendOperator("+");
        addedPeriod = false;

    }
});
subtract.addEventListener('click', function ()
{

    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    // If subtract was clicked and the last value was any operator, then remove and change the last operator
    if (lastStringValue === "+" ||
        lastStringValue === "%" ||
        lastStringValue === "*" ||
        lastStringValue === "/"
    )
    {
        display.value = display.value.toString().slice(0, -1) + "-";
    }
    else
    {
        // Make sure theres no doubled operator
        AppendOperator("-");
        addedPeriod = false;
    }
});
period.addEventListener('click', function ()
{
    const lastStringValue = display.value.toString().charAt(display.value.length - 1);

    if (!addedPeriod)
    {
        // Make sure theres no doubled operator
        AppendOperator(".");
        addedPeriod = true;
    }
});



