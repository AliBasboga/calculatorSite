function calculate (opera) {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "sayı girin";
    } else {
        switch (opera) {
            case "+":
                result = num1 + num2;
                break;

                case "-":
                result = num1 - num2;
                break;

                case "*":
                result = num1 * num2;
                break;

                case "/":
                if (num2 === 0) {
                    result = "0 bolünmez";
                    alert("0 bolünürmü aw");
                } else {
                    result = num1 / num2;
                }
                break;
        
            default:
               result = "naptın bee"
        }
    }
    document.getElementById("result").innerText =`Sonuç ${result}`
}