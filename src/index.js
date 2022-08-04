module.exports = function toReadable(number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    function toReadableLessHundred(n) {
        if (n <= 19) return one[n]
        else if (n % 10 === 0) return ten[String(n)[0]]
        else if (n >= 20) return `${ten[String(n)[0]]} ${one[String(n)[1]]}`
    }

    function toReadableMoreHundred(n) {
        if (n % 100 === 0) return `${one[String(n)[0]]} hundred`
        else return `${one[String(n)[0]]} hundred ${toReadableLessHundred(Number(String(n).slice(1)))}`
    }

if (number < 100) return toReadableLessHundred(number)
else if (number <= 999) return toReadableMoreHundred(number)
else if (number > 999) return false

}