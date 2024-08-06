function calculate (opera) {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Eksik sayı girdiniz";
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
                    alert("0 bolünmez sayıdır");
                } else {
                    result = num1 / num2;
                }
                break;
        
            default:
               result = "Error"
        }
    }
    document.getElementById("result").innerText =`Sonuç ${result}`
}
